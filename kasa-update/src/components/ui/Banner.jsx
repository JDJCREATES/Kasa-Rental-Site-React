

export default function Banner({imageSrc, imageAlt, text}) {
    return (
        <div className="banner-container">
          <img src={imageSrc} alt={imageAlt} className="banner-image"/>
        <div className="banner__overlay">
                {text && <h1 className="banner__text">{text}</h1>}
            </div>
        </div>
    );
}