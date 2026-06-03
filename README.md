# onerishabh

Personal portfolio site for Rishabh Mehta.

## SEO

- Per-page titles, descriptions, canonical URLs, and Open Graph tags (`react-helmet-async`)
- JSON-LD `Person` and `WebSite` schema on the home page
- `sitemap.xml` and `robots.txt` generated at build time

Set **`REACT_APP_SITE_URL`** to `https://onerishabh.in` in Netlify so canonical URLs and the sitemap match your live domain.

Submit `https://onerishabh.in/sitemap.xml` in [Google Search Console](https://search.google.com/search-console).

### Google Search Console verification

**Option A — HTML tag (recommended)**  
1. In Search Console, choose **HTML tag** (not Domain name provider).  
2. The verification meta tag is in `public/index.html`. Deploy, then click **Verify**.

**Option B — DNS TXT**  
At your DNS host for `onerishabh.in`, add a **TXT** record:

- **Host:** `@` (or leave blank for root)  
- **Value:** `google-site-verification=E7iVM0h0nA2MFrkfr2wbXiXjW_cmXFcLH66u_zQyYIA`  

Wait up to 48 hours for DNS propagation, then verify again.

## Contact form

Submissions are sent to **mehta.rishabh0@gmail.com** via [FormSubmit](https://formsubmit.co). Activate via the link in the first confirmation email.
