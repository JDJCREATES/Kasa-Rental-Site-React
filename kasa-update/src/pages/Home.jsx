import { useState, useEffect } from "react";
import PropertyCard from "../components/ui/PropertyCard";
import data from "../assets/data.json";

import Banner from "../components/ui/Banner";

export default function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    setProperties(data);
  }, []);

  return (
    <div className="home-div">

        <Banner imageSrc="./Home_Page_Image.png" imageAlt="an ocean cliffside landscape" text="At home, everywhere, and anywhere" />
      <div className="property-cards-container">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
          />
        ))}
      </div>
    </div>
  );
}
