import { useState, useRef } from "react";

import Banner from "../components/ui/Banner";

export default function About() {
  return (
    <div className="about-div">
      <Banner
        imageSrc="/assets/About_Page_Image.png"
        imageAlt="An expansive landscape with three mountain peaks, and a river going through a lush green valley."
      />

      
    </div>
  );
}
