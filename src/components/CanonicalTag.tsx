import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const CanonicalTag = () => {
  const location = useLocation();
  const baseUrl = "https://lexoris.com.au";

  useEffect(() => {
    // Build canonical URL: homepage gets trailing slash, others don't
    const canonicalUrl = location.pathname === "/" 
      ? `${baseUrl}/` 
      : `${baseUrl}${location.pathname.replace(/\/$/, "")}`;

    // Remove any existing canonical tags
    const existingCanonicals = document.querySelectorAll('link[rel="canonical"]');
    existingCanonicals.forEach(tag => tag.remove());

    // Create and insert canonical tag
    const link = document.createElement("link");
    link.rel = "canonical";
    link.href = canonicalUrl;
    document.head.appendChild(link);

    return () => {
      link.remove();
    };
  }, [location.pathname]);

  return null;
};

export default CanonicalTag;
