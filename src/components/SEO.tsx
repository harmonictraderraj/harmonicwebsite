import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
}

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage = 'https://www.tamilharmonic.com/og-image.jpg',
  ogType = 'website',
  structuredData,
}: SEOProps) {
  const fullTitle = title.includes('Tamil Harmonic') ? title : `${title} | Tamil Harmonic`;
  const siteUrl = 'https://www.tamilharmonic.com';
  const canonicalUrl = canonical || siteUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Geo Meta Tags */}
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Coimbatore" />
      <meta name="geo.position" content="11.01684;76.95583" />
      <meta name="ICBM" content="11.01684, 76.95583" />
      <meta name="distribution" content="global" />

      {/* Hreflang Tags */}
      <link rel="alternate" href={canonicalUrl} hreflang="ta-IN" />
      <link rel="alternate" href={canonicalUrl} hreflang="en-IN" />
      <link rel="alternate" href={canonicalUrl} hreflang="x-default" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Tamil Harmonic" />
      <meta property="og:locale" content="ta_IN" />
      <meta property="og:locale:alternate" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}

