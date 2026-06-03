# onerishabh

## Contact form email

Submissions POST to `/api/contact`, handled by a **Netlify Function** that sends mail via Gmail SMTP.

**Netlify env vars** (Site settings → Environment variables):

- `GMAIL_USER` — `auraalchemydesignstudio@gmail.com`
- `GMAIL_APP_PASSWORD` — Google App Password (spaces OK)
- `CONTACT_EMAIL` — `mehta.rishabh0@gmail.com`

**Local testing:** run `npx netlify dev` (serves the function on port 8888). Plain `npm start` proxies to it if Netlify Dev is running.
