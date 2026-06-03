import { useEffect, useState } from 'react';

import './ContactUs.scss';

const CONTACT_API = "/api/contact";

function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const createContact = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);

    try {
      const res = await fetch(CONTACT_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone_number: phoneNo,
          message: msg,
        }),
      });

      const body = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(body.error || "Failed to send message");
      }

      setName("");
      setEmail("");
      setPhoneNo("");
      setMsg("");
      setSubmitted(true);
    } catch (error) {
      setErr(error instanceof Error ? error.message : "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      name.length > 0 &&
      email.length > 0 &&
      phoneNo.length > 0 &&
      msg.length >= 10
    ) {
      setIsEnabled(true);
    } else {
      setIsEnabled(false);
    }
  }, [name, email, phoneNo, msg]);

  return (
    <div className='ContactUs'>
      <h1 className='ContactUs_title'>
        <b>Get In Touch</b>
      </h1>
      {!submitted && <form className='ContactUs_form' onSubmit={createContact}>

        <input autoFocus type="text" className="ContactUs_form_name" placeholder='Full Name'
          onChange={(e) => setName(e.target.value)} value={name} name="full name" required/>
        <input type="email" className="ContactUs_form_email" placeholder='Email'
          onChange={(e) => setEmail(e.target.value)} value={email} name="email id" required/>
        <input type="tel" className="ContactUs_form_number" placeholder='Phone Number' 
          onChange={(e) => setPhoneNo(e.target.value)} value={phoneNo} name="phone no" required/>
        <textarea className="ContactUs_form_message" placeholder='Enter your message (at least 10 characters)'
          onChange={(e) => setMsg(e.target.value)} value={msg} required/>

        {err && <div className="ContactUs_error">{err}</div>}

        <button type="submit" disabled={!isEnabled || loading} className="ContactUs_form_submit">
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>}
      {submitted && <div className='ContactUs_wrapper'>
          <div className='ContactUs_text'>Thank you!</div>
          <div className='ContactUs_text'>We'll be in touch soon.</div>
          <br /><br />
        </div>
      }
      <div className='ContactUs_wrapper'>
        <span className='ContactUs_text'><b>Phone: </b></span>
        <span className='ContactUs_data'>+91 8747824255</span>
      </div>
      <div className='ContactUs_wrapper'>
        <span className='ContactUs_text'><b>Whatsapp: </b></span>
        <span className='ContactUs_data'>+91 9405334438</span>
      </div>
      <div className='ContactUs_wrapper'>
        <span className='ContactUs_text'><b>Email: </b></span>
        <span className='ContactUs_data'>mehta.rishabh0@gmail.com</span>
      </div>
    </div>
  );
}

export default ContactUs;
