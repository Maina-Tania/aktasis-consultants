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
  title = 'AKTASIS CONSULTANTS - Professional Architectural Services',
  description = 'Leading architectural consultancy providing innovative design solutions for residential, commercial, and sustainable projects. Transform your vision into reality with AKTASIS CONSULTANTS.',
  keywords = 'architectural consultancy, architectural design, sustainable architecture, residential design, commercial architecture, interior design, building design, construction, architectural services',
  image = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200',
  url = 'https://aktasisconsultancy.com',
  type = 'website',
  author = 'AKTASIS CONSULTANTS',
  publishedTime,
  modifiedTime,
  section,
  tags = []
}) => {
  const fullTitle = title.includes('AKTASIS') ? title : `${title} | AKTASIS CONSULTANTS`;
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
      <meta property="og:site_name" content="AKTASIS CONSULTANTS" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@aktasisconsultants" />
      <meta name="twitter:creator" content="@aktasisconsultants" />

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

      {/* Favicon */}
      <link rel="icon" type="image/png" href="/favicon.png" />

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ArchitectureFirm",
          "name": "AKTASIS CONSULTANTS",
          "description": description,
          "url": "https://aktasisconsultancy.com",
          "logo": "https://aktasisconsultancy.com/logo.png",
          "image": fullImage,
          "sameAs": [
            "https://www.linkedin.com/company/aktasisconsultants",
            "https://www.instagram.com/aktasisconsultants",
            "https://www.facebook.com/aktasisconsultants"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-123-4567",
            "contactType": "customer service",
            "email": "hello@aktasisconsultancy.com"
          }
        })
      }} />
    </>
  );
};

export default SEO; 