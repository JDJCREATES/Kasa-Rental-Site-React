import { useState, useEffect, useRef } from 'react';
import PropertyCard from '../components/ui/PropertyCard';
import data from '../assets/data.json';


export default function Home() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        setProperties(data);
    }, []);

    return (
        <div className="home-div">
            {properties.map(property => (
                <PropertyCard key={property.id} property={property} />
            ))}
        </div>
    );
}