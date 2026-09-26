import { studioData } from "@/data/pilates";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    "name": studioData.name,
    "description": studioData.shortDescription,
    "url": "https://aurapilates.id",
    "telephone": studioData.contact.phone,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": studioData.contact.address,
      "addressLocality": studioData.contact.city,
      "addressRegion": "Jawa Timur",
      "postalCode": "60226",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -7.2850,
      "longitude": 112.6940
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "06:30",
        "closes": "20:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "07:00",
        "closes": "18:00"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
