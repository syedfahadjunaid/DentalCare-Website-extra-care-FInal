import React from 'react';
import './servicesType.css';

import services_back_image from '../../assets/professional-dentist-tools-dental-office.jpg';

import Heading from '../../components/heading';
import Subheading from '../../components/Subheading';
// import placeholder_square from '../../assets/placeholder1.jpg';
import LearnmoreBtn from '../../components/learnmoreBtn';

//Images
import dentalImage from '../../assets/dentist-dental-office-dentistry.jpg';
import generalMedicinesImage from '../../assets/generalimages/image 10.jpg';

import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function ServicesType() {
  const services = [
    {
      name: 'Dental',
      img: dentalImage,
      text: 'Our dentistry services include everything you need to keep your teeth and gums healthy. We offer regular checkups, cleanings, fillings, and other treatments to help prevent and treat dental problems. Our team of skilled professionals provides personalized care to meet your individual needs.',
    },
    {
      name: 'General Medicines',
      img: generalMedicinesImage,
      text: 'At our general medicine department, we provide a wide range of services to help you manage your health and wellness. Our team of experienced physicians and healthcare professionals are dedicated to delivering high-quality care and personalized attention to each of our patients.',
    },
  ];

  const renderedServices = services.map((service, index) => {
    return (
      <div
        key={`${service.name}_${index}`}
        className="servicestype-card flex w-[50%] flex-col items-center gap-[8px] rounded-[1rem] border-2 border-solid border-inherit bg-gray-200 p-[2rem] shadow-md transition hover:shadow-2xl"
      >
        <Subheading className="text-gray-600" text={service.name} />
        <div className="servicestype-card-image h-full w-full border-2 border-solid border-inherit">
          <LazyLoadImage
            className="h-[300px] w-full"
            src={service.img}
            alt="service img"
          />
        </div>

        <p className="font-md service-card-text text-justify text-black">
          {service.text}
        </p>
        <div
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
            linkValue={`/services/${service.name
              .split(' ')
              .join('')
              .toLowerCase()}`}
          />
        </div>
      </div>
    );
  });

  return (
    <div className="servicetype_section">
      <div className="services_section-image">
        <img
          className="absolute h-screen w-full"
          src={services_back_image}
          alt="Services_back"
        />
      </div>
      <div className="servicestype_section-three w-full gap-[1rem] p-[4rem]">
        <div className="services_section-content relative flex flex-col items-center justify-center gap-[1rem] text-center">
          <Subheading
            className="subheading"
            text={'Your Partner in Comprehensive Wellness!'}
          />
          <Heading
            className="heading"
            text={'Expert Care, Personalized Attention!'}
          />
          <p className="homepage_section-three-p w-[75%] text-center text-lg text-gray-600">
            At Extra Care Medical Center, we offer a wide range of services to
            help you achieve and maintain your health with a beautiful smile.
            Whether you need routine checkups or more advanced treatments, our
            experienced team is here to help.
          </p>
          <div className="servicetype_section-services-cards flex flex-row gap-[2rem]">
            {renderedServices}
          </div>
        </div>
      </div>
    </div>
  );
}
