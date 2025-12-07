import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  type?: string;
}

export const SEO = ({
  title,
  description,
  keywords = "Vivan Chemical, Colloidal Silica Manufacturer, Colloidal Silica India, Colloidal Silica Gujarat, Colloidal Silica Morbi, investment casting chemicals, silica sol, semiconductor polishing, food grade silica",
  canonical = "https://vivan-chemicals.com",
  image = "/og-image.png",
  type = "website"
}: SEOProps) => {
  const siteTitle = "Vivan Chemical - Premium Colloidal Silica Manufacturer";
  const fullTitle = title === siteTitle ? title : `${title} | Vivan Chemical`;

  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Vivan Chemical" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Geo Tags for Local SEO (Morbi, Gujarat, India) */}
      <meta name="geo.region" content="IN-GJ" />
      <meta name="geo.placename" content="Morbi" />
      <meta name="geo.position" content="22.812;70.8236" />
      <meta name="ICBM" content="22.812, 70.8236" />
    </Helmet>
  );
};

export default SEO;
