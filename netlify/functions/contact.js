const nodemailer = require("nodemailer");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function jsonResponse(statusCode, body) {
  return {
    statusCode,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
}

function normalizePassword(password) {
  return (password || "").replace(/\s/g, "");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: corsHeaders, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return jsonResponse(405, { error: "Method not allowed" });
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone_number = String(body.phone_number ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name) return jsonResponse(400, { error: "Name is required" });
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return jsonResponse(400, { error: "Valid email is required" });
    }
    if (!message || message.length < 10) {
      return jsonResponse(400, {
        error: "Message must be at least 10 characters",
      });
    }

    const gmailUser = process.env.GMAIL_USER?.trim();
    const gmailPass = normalizePassword(process.env.GMAIL_APP_PASSWORD);
    const contactEmail =
      process.env.CONTACT_EMAIL?.trim() || "mehta.rishabh0@gmail.com";
    const siteName = process.env.SITE_NAME || "Rishabh Mehta";

    if (!gmailUser || !gmailPass) {
      console.error("[contact] Missing GMAIL_USER or GMAIL_APP_PASSWORD");
      return jsonResponse(500, {
        error: "Email is not configured on the server",
      });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: gmailUser, pass: gmailPass },
      connectionTimeout: 10_000,
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `"${siteName}" <${gmailUser}>`,
      to: contactEmail,
      replyTo: email,
      subject: `New inquiry from ${name} — ${siteName}`,
      text: [
        `New contact form submission`,
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone_number || "Not provided"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone_number || "Not provided")}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      `,
    });

    return jsonResponse(200, { success: true, message: "Message sent" });
  } catch (err) {
    console.error("[contact] Failed to send email:", err);

    let message =
      err instanceof Error ? err.message : "Failed to send message";

    if (/invalid login|username and password not accepted/i.test(message)) {
      message =
        "Gmail login failed. Check GMAIL_USER and GMAIL_APP_PASSWORD in Netlify environment variables.";
    }

    return jsonResponse(500, { error: message });
  }
};
