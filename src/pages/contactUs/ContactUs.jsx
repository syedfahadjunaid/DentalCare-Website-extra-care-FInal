import React from 'react';
import './contactUs.css';
import GetInTouch from './GetInTouch';
// import News from '../news/News';

import Subheading from '../../components/Subheading';
import Heading from '../../components/heading';
import Form from '../../components/Form';
import Map from '../../components/Map';
import contactus_back_img from '../../assets/contactus.jpg';

import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function ContactUs() {
  return (
    <div className="section_margin">
      <div className="contactus_section-back-img">
        <LazyLoadImage
          className="absolute h-screen w-full opacity-80"
          src={contactus_back_img}
          alt="contact_us_img"
        />
      </div>

      <div className="contactus_section-content relative flex h-screen w-full flex-col items-center justify-center gap-[1rem] p-[1rem]">
        <div className="contactus_heading text-center">
          <Subheading className="subheading" text={'Want to connect'} />
          <Heading className="heading" text={'our contacts'} />
        </div>
        <div className="contactus_section-form w-[50%] rounded-[1rem] border-2 border-solid border-inherit bg-white shadow-lg hover:shadow-2xl">
          <Form />
        </div>
      </div>

      {/* <div className="contact_section-image w-full items-center">
        <img className="w-full" src={MapImage} alt="Map" />
      </div> */}

      <div className="contactus_section-elements flex flex-col gap-[2rem] p-[4rem] text-center">
        <div className="contactus_section-map">
          <Heading className="heading" text={'Locate Us'} />
          <Map />
        </div>

        <div className="p-[2rem]">
          <div className="contact_section-getintouch">
            <GetInTouch />
          </div>
        </div>
        {/* <div className="contact_section-news">
        <News />
      </div> */}
      </div>
    </div>
  );
}
