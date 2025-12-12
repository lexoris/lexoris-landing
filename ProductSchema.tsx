import { useEffect } from "react";

interface Product {
  name: string;
  description: string;
  price?: number;
  priceCurrency?: string;
  availability: string;
}

interface ProductSchemaProps {
  products: Product[];
}

const ProductSchema = ({ products }: ProductSchemaProps) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "product-schema";
    script.text = JSON.stringify(
      products.map((product) => ({
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        description: product.description,
        brand: {
          "@type": "Brand",
          name: "Lexoris",
        },
        offers: {
          "@type": "Offer",
          ...(product.price !== undefined && {
            price: product.price,
            priceCurrency: product.priceCurrency || "AUD",
          }),
          availability: `https://schema.org/${product.availability}`,
          seller: {
            "@type": "Organization",
            name: "Lexoris",
          },
        },
      }))
    );

    // Remove existing schema if present
    const existing = document.getElementById("product-schema");
    if (existing) {
      existing.remove();
    }

    document.head.appendChild(script);

    return () => {
      const el = document.getElementById("product-schema");
      if (el) {
        el.remove();
      }
    };
  }, [products]);

  return null;
};

export default ProductSchema;
