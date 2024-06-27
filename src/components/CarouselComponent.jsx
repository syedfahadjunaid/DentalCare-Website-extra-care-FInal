import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './carouselComponent.css';

//Insurance Partners Images
import insuranceImage1 from '../assets/insurance/Rectangle2.png';
import insuranceImage2 from '../assets/insurance/Rectangle3.png';
import insuranceImage3 from '../assets/insurance/Rectangle4.png';
import insuranceImage4 from '../assets/insurance/Rectangle5.png';
import insuranceImage5 from '../assets/insurance/Rectangle6.png';
import insuranceImage6 from '../assets/insurance/Rectangle7.png';
import insuranceImage7 from '../assets/insurance/Rectangle8.png';
import insuranceImage8 from '../assets/insurance/Rectangle9.png';
import insuranceImage9 from '../assets/insurance/Rectangle10.png';
import insuranceImage10 from '../assets/insurance/Rectangle11.png';
import insuranceImage11 from '../assets/insurance/Rectangle 1342.png';
import insuranceImage12 from '../assets/insurance/Rectangle 1343.png';

import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function CarouselComponent() {
  const insuranceImages = [
    insuranceImage1,
    insuranceImage2,
    insuranceImage3,
    insuranceImage4,
    insuranceImage5,
    insuranceImage6,
    insuranceImage7,
    insuranceImage8,
    insuranceImage9,
    insuranceImage10,
    insuranceImage11,
    insuranceImage12,
  ];

  const renderedInsuranceImages = insuranceImages.map((image, index) => {
    return (
      <LazyLoadImage
        key={index}
        className="insure-img h-full w-full"
        src={image}
        alt={`InsuranceImages-${index}`}
      />
    );
  });
  return (
    <div className="carousel-wrapper">
      <Carousel
        className="insure-slider h-fit items-center justify-center"
        infiniteLoop
        useKeyboardArrows
        autoPlay
        dynamicHeight={false}
        showThumbs={false}
        stopOnHover={false}
        showIndicators={false}
        showStatus={false}
        showArrows={false}
      >
        {renderedInsuranceImages}
      </Carousel>
    </div>
  );
}
