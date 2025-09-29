import { Link } from "react-router-dom";


// using a single property object as prop
// property = { id, title, cover }

function PropertyCard({ property }) {
  return (
    <Link
      to={`/property/${property.id}`}
      className="property-card"
    >
      <div className="property-card-image">
        <img
          src={property.cover}
          alt={property.title}
        />
        <div className="property-card-overlay">
          <h3 className="property-card-title">{property.title}</h3>
        </div>
      </div>
    </Link>
  );
}

export default PropertyCard;
