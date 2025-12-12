import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  customItems?: BreadcrumbItem[];
}

const routeNames: Record<string, string> = {
  "/": "Home",
  "/pricing": "Pricing",
  "/security": "Security & Compliance",
  "/how-it-works": "How It Works",
  "/faq": "FAQ",
  "/blog": "Blog",
  "/why-lexoris": "Why Lexoris",
  "/signup": "Start Free Trial",
};

const BreadcrumbSchema = ({ customItems }: BreadcrumbSchemaProps) => {
  const location = useLocation();
  const baseUrl = "https://lexoris.com.au";

  useEffect(() => {
    let items: BreadcrumbItem[] = [];

    if (customItems) {
      items = customItems;
    } else {
      const pathSegments = location.pathname.split("/").filter(Boolean);
      
      // Always start with Home
      items.push({ name: "Home", url: baseUrl });

      if (pathSegments.length > 0) {
        let currentPath = "";
        for (const segment of pathSegments) {
          currentPath += `/${segment}`;
          const name = routeNames[currentPath] || segment.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
          items.push({ name, url: `${baseUrl}${currentPath}` });
        }
      }
    }

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "breadcrumb-schema";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    });

    // Remove existing schema if present
    const existing = document.getElementById("breadcrumb-schema");
    if (existing) {
      existing.remove();
    }

    document.head.appendChild(script);

    return () => {
      const el = document.getElementById("breadcrumb-schema");
      if (el) {
        el.remove();
      }
    };
  }, [location.pathname, customItems]);

  return null;
};

export default BreadcrumbSchema;
