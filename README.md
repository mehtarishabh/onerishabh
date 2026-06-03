# onerishabh

## Contact form email

The contact form uses **Netlify Forms** (fast, no server timeout). Submissions appear in the Netlify dashboard and can be emailed to you.

### One-time Netlify setup

1. Deploy the site (form is registered at build time via `public/index.html`).
2. **Netlify → Forms** — confirm the `contact` form appears after a deploy.
3. **Forms → Form notifications → Add notification → Email**  
   Set recipient to `mehta.rishabh0@gmail.com`.
4. Submit the contact page on your live site to test.

`GMAIL_*` env vars are no longer required for the contact form.
