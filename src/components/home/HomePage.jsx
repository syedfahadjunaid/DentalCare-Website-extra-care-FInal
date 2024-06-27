import React from 'react';
import './homePage.css';
//import home_image_main from '../../assets/home-image-main.jpg';
import Subheading from '../Subheading';
import Heading from '../heading';
import Button from '../Button';
import Link from '../Link';
// import placeholder_square from '../../assets/placeholder1.jpg';
//import placeholder_wide from '../../assets/placeholder-wide4.jpg';
// import { AiOutlineArrowRight } from 'react-icons/ai';
// import Link from '../Link';
import LearnmoreBtn from '../learnmoreBtn';
// import DropdownPage from '../../pages/comps/DropdownPage';
import Appointment from '../../pages/appointment/Appointment';
import GetInTouch from '../../pages/contactUs/GetInTouch';
// import News from '../../pages/news/News';
import Carousel from '../CarouselComponent';

//Homepage Images
import image1 from '../../assets/dentists-treat-patients-teeth.jpg';
import image2 from '../../assets/dentist-assisting-female-patient-wear-braces.jpg';
import image3 from '../../assets/general/image 10.jpg';
import image4 from '../../assets/types-of-doctors-1600114658.jpg';

import insurance_wide from '../../assets/insurance/Logo Banner.jpg';
import insurance_portrait from '../../assets/insurance/Logo Banner Portrait.jpg';

import Map from '../Map';

//Awesome Slider
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

//Images Services
// import dentalImage from '../../assets/dentist-dental-office-dentistry.jpg';
// import generalMedicinesImage from '../../assets/minimalistic-science-banner-with-pills.jpg';

//Mobile Images
import mobImage1 from '../../assets/female-patient-having-procedure-done-dentist.jpg';
import mobImage2 from '../../assets/close-up-happy-client-dental-clinic.jpg';
import mobImage3 from '../../assets/pexels-anna-shvets-3683099.jpg';
import mobImage4 from '../../assets/pexels-anna-shvets-3786128.jpg';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import DentalSlider from './sliderForServices/dentalSlider/DentalSlider';
import MedicineSlider from './sliderForServices/medicineSlider/MedicineSlider';

function homePage() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  // for Home Section 1
  const homepage_section_one_data = [
    {
      img: image1,
      mobImg: mobImage1,
      subhead: 'caring for life',
      head: 'providing excellent dental care',
      text: 'Assuring Better Healthcare & Happiness for the Community!',
    },
    {
      img: image3,
      mobImg: mobImage3,
      subhead: 'with EXTRACARE General Medicine',
      head: 'Make Your Healthcare Medicine Experience a lot better',
      text: 'We provide various general medicine services',
    },
    {
      img: insurance_wide,
      mobImg: insurance_portrait,
      subhead: '',
      head: '',
      text: '',
    },
    {
      img: image2,
      mobImg: mobImage2,
      subhead: 'at ecmc',
      head: 'From Simple Procedures to Complicated Surgeries',
      text: 'A Personalized Approach to Creating the Perfect Smile',
    },
    {
      img: image4,
      mobImg: mobImage4,
      subhead: 'with EXTRACARE',
      head: 'Consult our general medicine doctors for any pain or suffering',
      text: 'General medicine can help by providing non-surgery-related procedures',
    },
  ];

  // const services = [
  //   {
  //     name: 'Dental',
  //     img: dentalImage,
  //   },
  //   {
  //     name: 'General Medicines',
  //     img: generalMedicinesImage,
  //   },
  // ];

  // const renderedServices = services.map((service, index) => {
  //   return (
  //     <div
  //       key={`${service.name}_${index}`}
  //       className="services-card flex w-[50%] flex-col items-center gap-[8px] rounded-[1rem] border-2 border-solid border-inherit bg-white p-[2rem] shadow-md hover:shadow-2xl"
  //     >
  //       <div className="services-card-image h-full w-full border-2 border-solid border-inherit">
  //         <LazyLoadImage
  //           className="service-img h-[250px] w-full"
  //           src={service.img}
  //           alt="service img"
  //         />
  //       </div>
  //       <Subheading className="text-gray-600" text={service.name} />
  //       {/* <p className="text-black">
  //         Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  //       </p> */}
  //       <div
  //         className="w-fit items-center"
  //         // onClick={() =>
  //         //   handleLearnMoreBtn(
  //         //     `/services/${service.name.split(' ').join('')}`,
  //         //     true
  //         //   )
  //         // }
  //       >
  //         <LearnmoreBtn
  //           className="w-full"
  //           linkValue={`/services/${service.name
  //             .split(' ')
  //             .join('')
  //             .toLowerCase()}`}
  //         />
  //       </div>
  //     </div>
  //   );
  // });

  // // For Services Section
  // const services = [
  //   {
  //     name: 'Cosmetic Dentistry',
  //     img: placeholder_square,
  //   },
  //   {
  //     name: 'Crown & Bridges',
  //     img: placeholder_square,
  //   },
  //   {
  //     name: 'Root Canal Treatments',
  //     img: placeholder_square,
  //   },
  //   {
  //     name: 'Orthodontics',
  //     img: placeholder_square,
  //   },
  //   {
  //     name: 'Teeth Whitening',
  //     img: placeholder_square,
  //   },
  //   {
  //     name: 'Dental Implants',
  //     img: placeholder_square,
  //   },
  //   {
  //     name: 'Gum Treatments',
  //     img: placeholder_square,
  //   },
  //   {
  //     name: 'Pediatric Dental Care',
  //     img: placeholder_square,
  //   },
  // ];

  // For Partner Section
  // const insurancePartnersData = [
  //   {
  //     name: 'Partner 1',
  //     img: placeholder_square,
  //   },
  //   {
  //     name: 'Partner 1',
  //     img: placeholder_square,
  //   },
  //   {
  //     name: 'Partner 1',
  //     img: placeholder_square,
  //   },
  //   {
  //     name: 'Partner 1',
  //     img: placeholder_square,
  //   },
  //   {
  //     name: 'Partner 1',
  //     img: placeholder_square,
  //   },
  //   {
  //     name: 'Partner 1',
  //     img: placeholder_square,
  //   },
  //   {
  //     name: 'Partner 1',
  //     img: placeholder_square,
  //   },
  //   {
  //     name: 'Partner 1',
  //     img: placeholder_square,
  //   },
  // ];

  // const renderedServices = services.map((service, index) => {
  //   return (
  //     <div
  //       key={`${service.name}_${index}`}
  //       className="services-card flex flex-col gap-[8px] border-2 border-solid border-inherit p-[2rem] shadow-md hover:shadow-2xl"
  //     >
  //       <div className="services-card-image">
  //         <img src={service.img} alt="service img" />
  //       </div>
  //       <Subheading className="text-gray-600" text={service.name} />
  //       <p className="text-black">
  //         Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  //       </p>
  //       <div className="w-fit">
  //         <LearnmoreBtn
  //           className="w-full"
  //           linkValue={`/services/${service.name.split(' ').join('')}`}
  //         />
  //       </div>
  //     </div>
  //   );
  // });

  // const renderedInsurancePartners = insurancePartnersData.map(
  //   (partner, index) => {
  //     return (
  //       <div
  //         key={`${partner.name}_${index}`}
  //         className="services-card flex flex-col gap-[8px] border-2 border-solid border-inherit p-[2rem] shadow-md hover:shadow-2xl"
  //       >
  //         <div className="services-card-image">
  //           <img src={partner.img} alt="service img" />
  //         </div>
  //         <Subheading className="text-gray-600" text={partner.name} />
  //         <p className="text-black">
  //           Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  //         </p>
  //         {/* <div className="w-fit">
  //         <LearnmoreBtn
  //           className="w-full"
  //           linkValue={`/services/${partner.name.split(' ').join('')}`}
  //         />
  //       </div> */}
  //       </div>
  //     );
  //   }
  // );

  const renderedHomeSectionOneData = homepage_section_one_data.map(
    (data, index) => {
      return (
        <div
          key={`${data.head}-${index}`}
          className="homepage_section-one flex flex-row items-center justify-center"
        >
          <LazyLoadImage
            className="largeScreen_back absolute h-full w-full"
            src={data.img}
            alt={`${data.head}-(${index})`}
          />
          <LazyLoadImage
            className="smallScreen_back absolute h-full w-full"
            src={data.mobImg}
            alt={`${data.head}-(${index})`}
          />
          <div className="homepage_section-left relative flex flex-col gap-[2rem] p-[8rem]">
            <Subheading
              style={{ backgroundColor: 'white' }}
              className="w-fit p-[8px] text-[40px] text-black opacity-70"
              text={data.subhead}
            />
            <Heading
              style={{ backgroundColor: 'white' }}
              className="heading w-fit animate-pulse p-[8px] text-center text-[60px] "
              text={data.head}
            />
            <p
              className="w-fit p-[8px] text-center text-[15px] font-semibold text-blue-600 opacity-80"
              style={{
                backgroundColor: 'white',
              }}
            >
              {data.text}
            </p>
          </div>

          {/* <div className="homepage_section-right">
          <img src={placeholder_square} alt="homepage img" />
        </div> */}
        </div>
      );
    }
  );

  return (
    <div className="section_margin">
      <AutoplaySlider
        className="mainslider h-screen w-fit items-center justify-center"
        play={true}
        cancelOnInteraction={false}
        interval={3000}
      >
        {renderedHomeSectionOneData}
      </AutoplaySlider>

      {/* Our Insurance Partners Section */}
      <div className="homepage_section-three mt-[2rem] flex w-full flex-col items-center justify-center gap-[1rem] p-[4rem]">
        <Subheading className="subheading" text={'Always Caring'} />
        <Heading
          className="heading text-center"
          text={'our insurance partners'}
        />
        {/* <p className="homepage_section-three-p w-[75%] text-center text-gray-600"></p> */}
        {/* <div className="homepage_section-services-cards gap-[2rem]">
          {renderedInsurancePartners}
        </div> */}

        <div className="homepage_section-insurance w-[40%]">
          <Carousel />
        </div>
      </div>

      <div className="homepage_section-two flex w-full flex-col items-center justify-center gap-[1rem] p-[4rem]">
        <Subheading
          className="subheading text-center"
          text={'Welcome to ECMC'}
        />
        <Heading
          className="heading text-center"
          text={'Your Health is our Passion, Your Smile is Our Reward!'}
        />
        <p className="homepage_section-two-p w-[70%] text-center text-lg text-[#43B64A]">
          Dental care and general healthcare with advanced equipment is the
          specialty of Extra Care Medical Center.
        </p>

        <LearnmoreBtn linkValue={'/about'} />

        {/* <Link to="/about">
          <p className="homepage-section-two-learnmore flex animate-pulse flex-row hover:animate-bounce">
            Learn More
            <AiOutlineArrowRight className="ml-[2px] mt-[5px]" />
          </p>
        </Link> */}

        <div className="map_section w-[70%]">
          <Map />
        </div>
        {/* <img
          className="homepage_section-two-image w-full"
          src={placeholder_wide}
          alt="homepage img2"
        /> */}
      </div>

      {/* Dental Services Section */}
      <div className="homepage_section-three flex w-full flex-col items-center justify-center gap-[2rem] p-[4rem]">
        <div className="w-full text-center">
          {/* <Subheading className="subheading" text={'Care you can believe in'} /> */}
          <Heading className="heading" text={'our dental services'} />
        </div>
        <div className="dentalService-homecontent flex w-full flex-row items-center justify-center gap-[2rem]">
          <div className="dentalService-homecontent-left w-[50%]">
            <p className="  text-center text-[1.5rem] text-gray-600">
              Our dentistry services include everything you need to keep your
              teeth and gums healthy. We offer regular checkups, cleanings,
              fillings, and other treatments to help prevent and treat dental
              problems. Our team of skilled professionals provides personalized
              care to meet your individual needs.
            </p>
          </div>
          <div className="dentalService-homecontent-right w-[50%]">
            <div className="homepage_section-dental-slider w-full rounded-[1rem]">
              <DentalSlider />
            </div>
          </div>
        </div>

        <Button
          primary
          className="border-2 border-solid border-blue-500 hover:bg-white hover:text-blue-500"
        >
          <Link to="/services/dental">View More</Link>
        </Button>
      </div>

      {/* General Medicine */}
      <div className="homepage_section-three flex w-full flex-col items-center justify-center gap-[2rem] p-[4rem]">
        <div className="w-full text-center">
          {/* <Subheading className="subheading" text={'Care you can believe in'} /> */}
          <Heading className="heading" text={'our general medicine services'} />
        </div>
        <div className="dentalService-homecontent flex w-full flex-row items-center justify-center gap-[2rem]">
          <div className="dentalService-homecontent-left w-[50%]">
            <div className="homepage_section-dental-slider w-full rounded-[1rem]">
              <MedicineSlider />
            </div>
          </div>
          <div className="dentalService-homecontent-right w-[50%]">
            <p className="  text-center text-[1.5rem] text-gray-600">
              At our general medicine department, we provide a wide range of
              services to help you manage your health and wellness. Our team of
              experienced physicians and healthcare professionals are dedicated
              to delivering high-quality care and personalized attention to each
              of our patients.
            </p>
          </div>
        </div>

        <Button
          primary
          className="border-2 border-solid border-blue-500 hover:bg-white hover:text-blue-500"
        >
          <Link to="/services/dental">View More</Link>
        </Button>
      </div>

      {/* General Medicine
      <div className="homepage_section-three flex w-full flex-col items-center justify-center gap-[2rem] p-[4rem]">
        <div className="w-full text-center">
          <Subheading className="subheading" text={'Care you can believe in'} />
          <Heading className="heading" text={'our general medicine services'} />
          <p className="  text-gray-600">
            At our general medicine department, we provide a wide range of
            services to help you manage your health and wellness. Our team of
            experienced physicians and healthcare professionals are dedicated to
            delivering high-quality care and personalized attention to each of
            our patients.
          </p>
        </div>
        <div className="homepage_section-dental-slider w-[40%] rounded-[1rem]">
          <MedicineSlider />
        </div>

        <Button
          primary
          className="border-2 border-solid border-blue-500 hover:bg-white hover:text-blue-500"
        >
          <Link to="/services/generalmedicines">View More</Link>
        </Button>
      </div> */}

      {/* Book an appointment section */}
      <div className="section_appointment">
        <Appointment className="m-0" />
      </div>

      {/* News Section */}
      {/* <News /> */}

      {/* Get In Touch Section */}
      <div className="section_getintouch p-[2rem]">
        <GetInTouch />
      </div>
    </div>
  );
}

export default homePage;
