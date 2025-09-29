

export default function Banner(imageSrc, imageAlt) {
    return (
        <div className="banner-container">
          <img src={imageSrc} alt={imageAlt} className="banner-image"/>
        </div>
    );
}