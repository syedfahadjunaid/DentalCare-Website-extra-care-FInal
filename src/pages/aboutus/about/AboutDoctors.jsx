import React from 'react';
import './aboutDoctors.css';
import Subheading from '../../../components/Subheading';
import Heading from '../../../components/heading';
import doctor1Img from '../../../assets/dentist-1.jpeg';
import doctor2Img from '../../../assets/dentist-2.jpg';
import doctor3Img from '../../../assets/dentist-3.jpg';
import doctor4Img from '../../../assets/dentist-4.jpg';

import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function aboutDoctors() {
  const doctorsData = [
    {
      name: '',
      about: '',
      img: doctor1Img,
    },
    {
      name: '',
      about: '',
      img: doctor2Img,
    },
    {
      name: '',
      about: '',
      img: doctor3Img,
    },
    {
      name: '',
      about: '',
      img: doctor4Img,
    },
  ];

  const renderedDoctortData = doctorsData.map((doctor, index) => {
    return (
      <div
        className="about_doctors-card flex w-[25%] flex-col border-2 border-solid border-inherit p-[1rem] shadow-md hover:opacity-70 hover:shadow-2xl"
        key={`${doctor.name}-${index}`}
      >
        <div className="about_doctors-card-img ">
          <LazyLoadImage
            className="w-full"
            src={doctor.img}
            alt={`${doctor.name}-img`}
          />
        </div>
        <Subheading className="text-gray-400" text={doctor.name} />
        {/* <p className="text-black">{doctor.about}</p> */}
      </div>
    );
  });

  return (
    <div className="about_doctors-section flex flex-col items-center justify-center gap-[2rem] p-[4rem] text-center">
      <div className="about_doctors-heading">
        <Subheading className="subheading" text={'Meet our'} />
        <Heading text={'Doctors'} />
      </div>
      <div className="about_doctors-cards flex w-full flex-row gap-[1rem]">
        {renderedDoctortData}
      </div>
    </div>
  );
}
