import React from 'react';
//Images
import cosmetic_dentistry from '../../../../assets/cosmetic_dentistry.jpg';
import crownnbridges from '../../../../assets/crown&bridges.jpg';
import rootcanaltreatment from '../../../../assets/rootcanaltreatment.jpg';
import orthodontics from '../../../../assets/orthodontics.jpg';
import teeth_whitening from '../../../../assets/teeth_whitening.jpg';
import dental_implant from '../../../../assets/dental_implant.jpg';
import gum_treatments from '../../../../assets/gum_treatments.jpg';
import pediatric_dental_treatments from '../../../../assets/pediatric_dental_treatments.jpg';

// import LearnmoreBtn from '../../../learnmoreBtn';
import Subheading from '../../../Subheading';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function DentalSlider() {
  const services = [
    {
      name: 'Cosmetic Dentistry',
      img: cosmetic_dentistry,
      text: 'Cosmetic dentistry is the branch of dentistry that focuses on improving the appearance of your smile. Cosmetic Fillings, Smile makeovers, Esthetic crowns, Hollywood smile',
    },
    {
      name: 'Crown & Bridges',
      img: crownnbridges,
      text: 'A dental crown or bridge is the most common alternatives to permanent dental implants.',
    },
    {
      name: 'Root Canal Treatments',
      img: rootcanaltreatment,
      text: 'Root canal is a treatment to repair and save a badly damaged or infected tooth instead of removing it.',
    },
    {
      name: 'Orthodontics',
      img: orthodontics,
      text: 'Orthodontics is a dental specialty focused on aligning your bite and straightening your teeth. Metal braces, Ceramic braces, Invisalign, Damon braces',
    },
    {
      name: 'Teeth Whitening',
      img: teeth_whitening,
      text: 'Whitening gels are clear, peroxide-based gels applied with a small brush directly to the surface of your teeth.',
    },
    {
      name: 'Dental Implants',
      img: dental_implant,
      text: 'A dental implant is a removable replacement for missing teeth and surrounding tissues. Removable and fixed dentures',
    },
    {
      name: 'Gum Treatments',
      img: gum_treatments,
      text: 'Gum treatment may be nonsurgical or surgical, depending on the stage of disease and your oral and overall health. Gingivectomy, Gingivoplasty, Gum countering surgery, Gummy smile corrections.',
    },
    {
      name: 'Pediatric Dental Care',
      img: pediatric_dental_treatments,
      text: 'Pediatric dental care ensures your childs primary teeth stay healthy and free of decay and other dental diseases. Fluoride application, Sealants',
    },
  ];

  const renderedServices = services.map((service, index) => {
    return (
      <div
        key={`${service.name}_${index}`}
        className="services-card flex h-full flex-col items-center gap-[8px] rounded-[1rem] bg-gray-200 p-[2rem]"
      >
        <div className="services-card-image h-[250px] w-full border-2 border-solid border-inherit">
          <LazyLoadImage
            className="h-full w-fit"
            src={service.img}
            alt="service img"
          />
        </div>
        <Subheading className="text-gray-600" text={service.name} />
        <p className="font-md text-black">{service.text}</p>
        {/* <div
          className="w-fit items-center"
          // onClick={() =>
          //   handleLearnMoreBtn(
          //     `/services/${service.name.split(' ').join('')}`,
          //     true
          //   )
          // }
        >
          <LearnmoreBtn
            className="w-full"
            linkValue={`/services/dental/${service.name
              .split(' ')
              .join('')
              .toLowerCase()}`}
          />
        </div> */}
      </div>
    );
  });

  return (
    <div className="carousel-wrapper">
      <Carousel
        className="mt-[2rem] h-full items-center justify-center rounded-[1rem] border-2 border-solid border-inherit shadow-md transition hover:shadow-2xl"
        infiniteLoop
        useKeyboardArrows
        autoPlay
        dynamicHeight={false}
        showThumbs={false}
        stopOnHover={false}
        showIndicators={false}
        showStatus={false}
      >
        {renderedServices}
      </Carousel>
    </div>
  );
}
