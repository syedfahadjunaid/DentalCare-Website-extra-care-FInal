import React from 'react';
import './careers.css';

import Subheading from '../../components/Subheading';
import Heading from '../../components/heading';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import contactus_back_img from '../../assets/contactus.jpg';

import Form from '../../components/Form';

export default function Blog() {
  return (
    <div className="section_margin">
      <div className="contactus_section-back-img">
        <LazyLoadImage
          className="absolute h-screen w-full opacity-80"
          src={contactus_back_img}
          alt="contact_us_img"
        />
      </div>

      <div className="career_section relative flex flex-col items-center justify-center gap-[2rem] p-[4rem]">
        <div className="career_section-heading items-center text-center">
          <Subheading className="subheading" text={'at ecmc'} />
          <Heading className="heading" text={'careers'} />
        </div>
        <div className="career_section-content flex flex-col items-center justify-center gap-[2rem] text-center">
          <p className="text-center text-lg font-semibold text-black">
            Welcome to the career page of Extra Care Medical Center. We are
            excited that you are interested in joining our team.
          </p>
          <p className="text-center text-lg text-black">
            If you are passionate about patient care and are looking for a
            fulfilling career in healthcare, we invite you to explore our job
            openings and submit your application. Thank you for considering our
            Extra Care Medical Center as your potential employer.
          </p>

          <Subheading className="subheading" text="Contact us for more info" />
          <div className="career-form w-[75%]">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
