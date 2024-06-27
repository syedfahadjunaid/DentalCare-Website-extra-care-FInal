import React from 'react';

// import LearnmoreBtn from '../../../learnmoreBtn';
// import Subheading from '../../../Subheading';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import generalmedicine1 from '../../../../assets/generalmedicine1.jpg';
import generalmedicine2 from '../../../../assets/general/image 10.jpg';
import generalmedicine3 from '../../../../assets/general/image 12.jpg';
import generalmedicine4 from '../../../../assets/generalmedicine4.jpg';
import generalmedicine5 from '../../../../assets/general/image 9.jpg';
import generalmedicine6 from '../../../../assets/general/image1.png';
import generalmedicine7 from '../../../../assets/general/image3.png';
import generalmedicine8 from '../../../../assets/general/image6.png';
import generalmedicine9 from '../../../../assets/general/image 8.png';
import generalmedicine10 from '../../../../assets/general/image 11.jpg';

export default function MedicineSlider() {
  const services = [
    {
      name: 'Comprehensive care for people with varied symptoms',
      img: generalmedicine1,
      text: `Treat and follow up on all medical, surgical and general
      disorders`,
    },
    {
      name: 'Preventive medicine care',
      img: generalmedicine2,
      text: `Follow up on Diabetes Mellitus complications of adults,
      Hypertension and skin problems`,
    },
    {
      name: 'Communicating with the patient',
      img: generalmedicine3,
      text: `Diagnose and treat all diseases related to Blood, Respiratory
      system, Endocrine system, Diabetes, Allergies, Renal problems and
      Hypertension`,
    },
    {
      name: 'Collaborating',
      img: generalmedicine4,
      text: 'Wellness and regular health checkups',
    },
    {
      name: 'Review patients',
      img: generalmedicine5,
      text: `Referral to the appropriate specialist based on medical
      condition`,
    },
    {
      name: 'Comprehensive care for people with varied symptoms',
      img: generalmedicine6,
      text: `Evaluation of any medical history`,
    },
    {
      name: 'Preventive medicine care',
      img: generalmedicine7,
      text: `Management and treatment of minor injuries`,
    },
    {
      name: 'Communicating with the patient',
      img: generalmedicine8,
      text: `Management of chronic health conditions`,
    },
    {
      name: 'Collaborating',
      img: generalmedicine9,
      text: `Vaccination visits`,
    },
    {
      name: 'Review patients',
      img: generalmedicine10,
      text: `General consultations for adults, children, and seniors`,
    },
  ];
  const renderedServices = services.map((service, index) => {
    return (
      <div
        key={`${service.name}_${index}`}
        className="services-card flex h-full w-full flex-col items-center gap-[8px] rounded-[1rem] bg-gray-200 p-[2rem]"
      >
        <div className="services-card-image h-[250px] w-full border-2 border-solid border-inherit">
          <LazyLoadImage
            className="h-full w-fit"
            src={service.img}
            alt="service img"
          />
        </div>
        {/* <Subheading className="text-gray-600" text={service.name} /> */}
        <p className="text-md text-center text-black">{service.text}</p>
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
    <div className="carousel-wrapper items-center justify-center">
      <Carousel
        className="mt-[2rem] h-full w-full  rounded-[1rem] border-2 border-solid border-inherit shadow-md transition hover:shadow-2xl"
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
