import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: string;
}

const SEO = ({ title, description, keywords, image, type = "website" }: SEOProps) => {
  const location = useLocation();
  const siteUrl = window.location.origin;
  const fullUrl = `${siteUrl}${location.pathname}`;
  const defaultImage = `${siteUrl}/og-image.png`;

  useEffect(() => {
    // Update title
    document.title = `${title} | Vivan Chemicals`;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute("content", content);
    };

    // Standard meta tags
    updateMetaTag("description", description);
    if (keywords) {
      updateMetaTag("keywords", keywords);
    }

    // Open Graph tags
    updateMetaTag("og:title", `${title} | Vivan Chemicals`, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:url", fullUrl, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:image", image || defaultImage, true);
    updateMetaTag("og:site_name", "Vivan Chemicals", true);

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", `${title} | Vivan Chemicals`);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image || defaultImage);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.href = fullUrl;
  }, [title, description, keywords, image, type, fullUrl, defaultImage]);

  return null;
};

export default SEO;
