import { useState } from "react";
import React from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  const [currentIndex, setIndex] = useState(0);
  /* You will need to hanle the click on left and right button */
  function prevImage () {
      setIndex((prevIndex) => {
        if (prevIndex === 0) {
          return images.length - 1; 
        } else {
          return prevIndex -1;
        }
      })  
    }
  /* You will need to manage the cases when we are on the last image or first image*/
  function nextImg() {
    setIndex((prevIndex) => {
      if (prevIndex === images.length - 1) {
        return 0; // Loop back to the first image
      } else {
        return prevIndex + 1;
      }
    });
  }
  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" />

      {/* YOu will need to display the current image, not the first one.. */}
      <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="slide" />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextImg}/>
    </div>
  );
};
