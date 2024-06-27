import React from 'react';
// import AboutUs from './about/Aboutus';
import AboutDoctors from './about/AboutDoctors';
// import AboutServices from './about/AboutServices';
import Subheading from '../../components/Subheading';
import Heading from '../../components/heading';
import aboutusimageLG from '../../assets/19366.jpg';
import aboutusimageSM from '../../assets/portraitdental.jpg';
import './aboutusPage.css';
import Aboutus from './about/Aboutus';

import ChangingComponent from './changingComponent/ChangingComponent';

// import Button from '../../components/Button';
// import Link from '../../components/Link';

function aboutusPage() {
  return (
    <div className="about_us_page-section section_margin">
      <div className="about_us-page-img">
        <img
          className="lg-about-img absolute h-screen w-full opacity-80"
          src={aboutusimageLG}
          alt="aboutus"
        />
        <img
          className="sm-about-img absolute h-screen w-full opacity-80"
          src={aboutusimageSM}
          alt="aboutus"
        />
      </div>
      <div className="about_us-page-img-content relative">
        <div className="about_us-page-img-content-text section margin aboutus_section flex h-screen w-full flex-col items-center justify-center gap-[1rem] p-[4rem] text-center ">
          {/* <Subheading className="subheading" text={'This is about'} /> */}
          <Heading
            className="heading animate-pulse"
            text={'Extra Care Medical Center'}
          />
          <Subheading
            className="w-fit bg-white p-[8px] text-[40px] text-black opacity-70"
            text={'Your Health is our Passion, Your Smile is Our Reward!'}
          />
          <p className="about-us-page-p bg-white p-2 text-center text-xl font-bold text-gray-800 opacity-60">
            Dental care and general healthcare with advanced equipment is the
            specialty of Extra Care Medical Center.
          </p>
          {/* <Button className="bg-[#0F687F] hover:bg-[#259DAE]">
            <Link to="/about/aboutus">Read More</Link>
          </Button> */}
        </div>
      </div>
      <Aboutus />
      <ChangingComponent />
      {/* <div
        className="aboutus_section-about-text p-[4rem] text-center"
        style={{ backgroundColor: '#55BFDE' }}
      >
        <Heading
          className="about animate-pulse text-center text-white"
          text={
            'Make your dream smile a reality! Call us at +971 585855829 to make an appointment'
          }
        />
      </div> */}
      <AboutDoctors />
    </div>
  );
}

export default aboutusPage;
