import React from 'react';
import './generalHealthCareServices.css';

import Heading from '../../components/heading';
import Subheading from '../../components/Subheading';
// import placeholder_square from '../../assets/placeholder1.jpg';
// import LearnmoreBtn from '../../components/learnmoreBtn';

import Link from '../../components/Link';
import Button from '../../components/Button';

//Images
import generalmedicine1 from '../../assets/generalmedicine1.jpg';
import generalmedicine2 from '../../assets/general/image 10.jpg';
import generalmedicine3 from '../../assets/general/image 12.jpg';
import generalmedicine4 from '../../assets/generalmedicine4.jpg';
import generalmedicine5 from '../../assets/general/image 9.jpg';
import generalmedicine6 from '../../assets/general/image1.png';
import generalmedicine7 from '../../assets/general/image3.png';
import generalmedicine8 from '../../assets/general/image6.png';
import generalmedicine9 from '../../assets/general/image 8.png';
import generalmedicine10 from '../../assets/general/image 11.jpg';
// import rootcanaltreatment from '../../assets/rootcanaltreatment.jpg';
// import orthodontics from '../../assets/orthodontics.jpg';
// import teeth_whitening from '../../assets/teeth_whitening.jpg';
// import dental_implant from '../../assets/dental_implant.jpg';
// import gum_treatments from '../../assets/gum_treatments.jpg';
// import pediatric_dental_treatments from '../../assets/pediatric_dental_treatments.jpg';

import services_back_image from '../../assets/service_back.svg';

//Awesome Slider
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

//Web Images
import image1 from '../../assets/generalimages/image 10.jpg';
// import image2 from '../../../../assets/dentist-assisting-female-patient-wear-braces.jpg';
import image3 from '../../assets/generalimages/image 12.jpg';
// import image4 from '../../../../assets/pexels-karolina-grabowska-4210611.jpg';

//Mob Images
import mobImage1 from '../../assets/general/image 13.png';
// import mobImage2 from '../../../../assets/close-up-happy-client-dental-clinic.jpg';
import mobImage3 from '../../assets/general/pexels-anna-shvets-3683099.jpg';
// import mobImage4 from '../../../../assets/pexels-anna-shvets-3786128.jpg';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import AboutDoctors from '../aboutus/about/AboutDoctors';

export default function GeneralHealthCareServices() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const service_page_data = [
    {
      img: image1,
      mobImg: mobImage1,
    },
    {
      img: image3,
      mobImg: mobImage3,
    },
  ];

  const renderedServicePageData = service_page_data.map((data, index) => {
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
        <div className="slidercontent">
          <div className="servive_page_slider-content relative right-[20rem] flex w-[500px] flex-col gap-[1rem] rounded-[10px] border-2 border-solid border-inherit bg-gray-200 p-[3rem] shadow-lg">
            <Heading className=" text-black" text="General Medicine" />
            <Button
              primary
              className="w-fit hover:bg-blue-300 hover:text-white"
            >
              <Link to="/appointment">Get an Appointment</Link>
            </Button>
          </div>
        </div>

        {/* <div className="homepage_section-right">
          <img src={placeholder_square} alt="homepage img" />
        </div> */}
      </div>
    );
  });

  // const services = [
  //   {
  //     name: 'Comprehensive care for people with varied symptoms',
  //     img: generalmedicine1,
  //     text: 'Diagnosis for an illness',
  //   },
  //   {
  //     name: 'Preventive medicine care',
  //     img: generalmedicine2,
  //     text: 'Conducting several tests like physical examinations, blood pressure tests, and screenings to ensure the proper health of the patient',
  //   },
  //   {
  //     name: 'Communicating with the patient',
  //     img: generalmedicine3,
  //     text: 'If the patient is suffering from a chronic illness, the doctor keeps in touch with them and provides ongoing care and advice',
  //   },
  //   {
  //     name: 'Collaborating',
  //     img: generalmedicine4,
  //     text: 'Refer the patient to different specialists and doctors depending upon the illness and treatment',
  //   },
  //   {
  //     name: 'Review patients',
  //     img: generalmedicine5,
  //     text: 'Follow-up on patients undergoing surgery and assist surgeons in the postoperative care or any other complications',
  //   },
  // ];

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
        className="services-card flex flex-col items-center gap-[8px] rounded-[1rem] border-2 border-solid border-inherit bg-gray-200 p-[2rem] shadow-md transition hover:shadow-2xl"
      >
        <div className="services-card-image h-[250px] w-full border-2 border-solid border-inherit">
          <img className="h-full w-full" src={service.img} alt="service img" />
        </div>
        {/* <Subheading className="text-center text-gray-600" text={service.name} /> */}
        <p className="text-md text-center text-black">{service.text}</p>
        <div
          className="w-fit items-center"
          // onClick={() =>
          //   handleLearnMoreBtn(
          //     `/services/${service.name.split(' ').join('')}`,
          //     true
          //   )
          // }
        >
          {/* <LearnmoreBtn
            className="w-full"
            linkValue={`/services/generalmedicines/${service.name
              .split(' ')
              .join('')
              .toLowerCase()}`}
          /> */}
        </div>
      </div>
    );
  });

  return (
    <div className="services_section section_margin flex flex-col gap-[1rem]">
      {/* Our Services Section */}
      {/* <div className="services_section-image">
        <img
          className="absolute w-full"
          src={services_back_image}
          alt="Services_back"
        />
      </div> */}
      <AutoplaySlider
        className="slider h-screen w-fit items-center justify-center"
        play={true}
        cancelOnInteraction={false}
        interval={30000}
      >
        {renderedServicePageData}
      </AutoplaySlider>
      <div
        className="services_section-content mt-[2.5rem] flex flex-col items-center justify-center gap-[1rem] text-center"
        style={{
          backgroundImage: `url('${services_back_image}')`,
          backgroundSize: 'cover',
        }}
      >
        <div className="mt-[1rem] p-[2rem]">
          <Heading className="heading" text={'General Medicine!'} />
          <Subheading
            className="subheading"
            text={'Comprehensive Healthcare for all Your Needs!'}
          />
          <p className=" text-center text-lg font-semibold text-gray-600">
            Diagnosing and treating with compassion and expertise to empower
            communities for healthier tomorrow!
          </p>
        </div>
      </div>

      <div className="second-section flex flex-col gap-[1rem] p-[4rem]">
        <p className="text-md text-start text-black">
          The Extra Care Medical Center’s General Medicine Department is
          equipped to provide healthcare services to patients across all age
          groups, including adults, children, and seniors. With their extensive
          knowledge of a diverse range of medical conditions, these physicians
          are capable of delivering comprehensive and ongoing healthcare to
          entire families. They are also capable of referring patients to
          appropriate specialists when necessary.
        </p>
        <p className="text-md text-start text-black">
          General medicine, or internal medicine, is a medical specialty that
          deals with the diagnosis and treatment of diseases affecting the
          internal organs. Physicians specializing in general medicine are
          trained to address a wide range of illnesses.
        </p>
        <p className="text-md text-start text-black">
          If you experience any pain or symptoms that do not clearly indicate a
          particular disease, it is advisable to seek consultation with a
          general medicine doctor at Extra Care Medical Center. After a thorough
          examination of your symptoms, the doctor will either recommend
          treatment or refer you to a specialist for further evaluations.
        </p>
        <p className="text-start text-lg font-bold text-black">
          At What Point should you Consider Visiting a General Medicine Doctor?
        </p>
        <div className="flex flex-col gap-[10px] p-[10px]">
          <p className="text-md text-start text-black">
            If you are experiencing severe symptoms such as :
          </p>
          <p className="text-md text-start font-light text-black">
            <i>
              • A persistent cough lasting for more than two weeks, along with
              fever, shortness of breath, and congestion, it is recommended to
              visit a general medicine doctor.{' '}
            </i>
          </p>
          <p className="text-md text-start font-light text-black">
            <i>
              • A persistent cough lasting for more than two weeks, along with
              fever, shortness of breath, and congestion, it is recommended to
              visit a general medicine doctor.
            </i>
          </p>
          <p className="text-md text-start font-light text-black">
            <i>
              • If you are experiencing a lack of energy or regular fatigue, it
              could be an indicator of underlying conditions like anemia or
              thyroid issues, and visiting a general medicine doctor can provide
              more insight.
            </i>
          </p>
          <p className="text-md text-start text-black">
            For more information, contact general medicine hospitals.
          </p>
        </div>

        <div className="flex flex-col gap-[1rem]">
          <p className="text-start text-lg font-bold text-black">
            What Services are offered by General Medicine Department?
          </p>
          <p className="text-md text-start text-black">
            General medicine department offers a range of healthcare services,
            including :
          </p>

          <div className="homepage_section-services-cards gap-[2rem]">
            {renderedServices}
          </div>
        </div>
      </div>
      <AboutDoctors />

      {/* <ServicesSideBarPage /> */}
    </div>
  );
}
