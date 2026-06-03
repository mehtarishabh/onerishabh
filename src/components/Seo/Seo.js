import { Helmet } from "react-helmet-async";
import { siteConfig } from "../../lib/site-config";

export function Seo({
  title,
  description = siteConfig.description,
  path = "",
  imagePath = siteConfig.imagePath,
  type = "website",
  noindex = false,
}) {
  const canonicalUrl = `${siteConfig.url}${path}`;
  const pageTitle = title
    ? `${title} | ${siteConfig.shortName}`
    : siteConfig.title;
  const imageUrl = imagePath.startsWith("http")
    ? imagePath
    : `${siteConfig.url}${imagePath}`;

  return (
    <Helmet>
      <html lang="en" />
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={siteConfig.keywords.join(", ")} />
      <meta name="author" content={siteConfig.name} />
      <meta
        name="google-site-verification"
        content="E7iVM0h0nA2MFrkfr2wbXiXjW_cmXFcLH66u_zQyYIA"
      />
      <link rel="canonical" href={canonicalUrl} />

      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content={siteConfig.locale} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
