import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const SEO: React.FC<SEOProps> = ({
  title = 'Aktasis Consultancy - Professional Architectural Services',
  description = 'Leading architectural consultancy providing innovative design solutions for residential, commercial, and sustainable projects. Transform your vision into reality with Aktasis Consultancy.',
  keywords = 'architectural consultancy, architectural design, sustainable architecture, residential design, commercial architecture, interior design, building design, construction, architectural services',
  image = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200',
  url = 'https://aktasisconsultancy.com',
  type = 'website',
  author = 'Aktasis Consultancy',
  publishedTime,
  modifiedTime,
  section,
  tags = []
}) => {
  const fullTitle = title.includes('Aktasis') ? title : `${title} | Aktasis Consultancy`;
  const fullUrl = url.startsWith('http') ? url : `https://aktasisconsultancy.com${url}`;
  const fullImage = image.startsWith('http') ? image : `https://aktasisconsultancy.com${image}`;

  return (
    <>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Aktasis Consultancy" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@aktasisconsultancy" />
      <meta name="twitter:creator" content="@aktasisconsultancy" />

      {/* Article specific meta tags */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ArchitectureFirm",
          "name": "Aktasis Consultancy",
          "description": description,
          "url": "https://aktasisconsultancy.com",
          "logo": "https://aktasisconsultancy.com/logo.png",
          "image": fullImage,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Architecture Ave, Suite 100",
            "addressLocality": "Downtown Design District",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-123-4567",
            "contactType": "customer service",
            "email": "hello@aktasisconsultancy.com"
          },
          "sameAs": [
            "https://www.linkedin.com/company/aktasis-consultancy",
            "https://www.instagram.com/aktasisconsultancy",
            "https://www.facebook.com/aktasisconsultancy"
          ],
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 40.7128,
              "longitude": -74.0060
            },
            "geoRadius": "50000"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Architectural Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Architectural Design",
                  "description": "Complete architectural design services including concept development, detailed drawings, and construction documentation."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Sustainable Design",
                  "description": "Eco-friendly architectural solutions that prioritize energy efficiency and environmental responsibility."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Interior Design",
                  "description": "Seamless interior design integration that complements architectural vision."
                }
              }
            ]
          }
        })
      }} />
    </>
  );
};

export default SEO; 