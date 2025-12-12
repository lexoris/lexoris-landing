import { useEffect } from "react";

interface Service {
  name: string;
  description: string;
  price?: number;
  priceCurrency?: string;
  availability: string;
}

interface ServiceSchemaProps {
  services: Service[];
}

const ProductSchema = ({ services }: ServiceSchemaProps) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "service-schema";
    script.text = JSON.stringify(
      services.map((service) => ({
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: {
          "@type": "Organization",
          name: "Lexoris",
        },
        offers: {
          "@type": "Offer",
          ...(service.price !== undefined && {
            price: service.price,
            priceCurrency: service.priceCurrency || "AUD",
          }),
          availability: `https://schema.org/${service.availability}`,
        },
      }))
    );

    // Remove existing schema if present
    const existing = document.getElementById("service-schema");
    if (existing) {
      existing.remove();
    }

    document.head.appendChild(script);

    return () => {
      const el = document.getElementById("service-schema");
      if (el) {
        el.remove();
      }
    };
  }, [services]);

  return null;
};

export default ProductSchema;
