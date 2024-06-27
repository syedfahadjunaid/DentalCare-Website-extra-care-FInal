import React from 'react';
import Subheading from '../../../../components/Subheading';
import Heading from '../../../../components/heading';
// import service_back_img from '../../../../assets/service_back.svg';
import Button from '../../../../components/Button';
import { BsWhatsapp } from 'react-icons/bs';
import Link from '../../../../components/Link';
import root_canal_image from '../../../../assets/root-canal-treatment-1902.jpg';
import root_canal_image1 from '../../../../assets/rootcanal/image 8.jpg';
import root_canal_image2 from '../../../../assets/rootcanal/image 13.jpg';
// import './cosmeticDentistry.css';
import '../dentalServicePageStyle.css';

import { LazyLoadImage } from 'react-lazy-load-image-component';

//Web Images
import image1 from '../../../../assets/rootcanal/image 12.jpg';
// import image2 from '../../../../assets/dentist-assisting-female-patient-wear-braces.jpg';
import image3 from '../../../../assets/rootcanal/image 9.jpg';
// import image4 from '../../../../assets/pexels-karolina-grabowska-4210611.jpg';

//Mob Images
import mobImage1 from '../../../../assets/rootcanal/image 11.jpg';
// import mobImage2 from '../../../../assets/close-up-happy-client-dental-clinic.jpg';
import mobImage3 from '../../../../assets/rootcanal/image 10.jpg';
// import mobImage4 from '../../../../assets/pexels-anna-shvets-3786128.jpg';

//Awesome Slider
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import AboutDoctors from '../../../aboutus/about/AboutDoctors';

export default function RootCanalTreatment() {
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
            <Heading className=" text-black" text="Root Canal Treatment" />
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
  return (
    <div className="section_margin">
      <AutoplaySlider
        className="slider h-screen w-fit items-center justify-center"
        play={true}
        cancelOnInteraction={false}
        interval={3000}
      >
        {renderedServicePageData}
      </AutoplaySlider>

      <div className="servicepage-content flex flex-col items-center justify-center gap-[1rem]">
        <div className="servicepage-section-content flex w-full flex-row items-center gap-[2rem] bg-gray-200 p-[4rem]">
          <div className="service_section-right w-[50%]">
            <LazyLoadImage
              className="h-fit w-fit border-2 border-solid border-inherit shadow-lg"
              src={root_canal_image}
              alt="root_canal_image"
            />
          </div>
          <div className="service_section-left-cd mt-[1rem] flex w-[50%] flex-col gap-[1rem]">
            <Heading className="heading" text={'Root Canal Treatment'} />
            <Subheading
              className="text-gray-500"
              text={`"Painless single session root canal treatment!"`}
            />
            <p className="text-md text-start text-black">
              When you have a decayed tooth or an infected dental nerve that is
              deteriorating, the best way to save your tooth is by undergoing
              endodontic therapy, commonly known as root canal treatment.
            </p>
            <p className="text-md text-start text-black">
              Instead of removing the tooth and replacing it, this treatment
              allows you to maintain the functionality of your tooth by
              restoring it from the inside. Essentially, it is like a filling
              that goes deeper into the tooth to fill the empty nerve chambers
              along the root, unlike a filling for a decayed opening.
            </p>
          </div>
        </div>

        <div className="servicepage-section-content flex w-full flex-row items-center justify-center gap-[2rem] p-[4rem]">
          <div className="service_section-left-cd mt-[1rem] flex w-[50%] flex-col justify-center gap-[1rem]">
            {/* <Heading className="heading" text={'Cosmetic Dentistry'} /> */}
            <Subheading
              className="subheading"
              text={'Specialists in Root Canal Treatment'}
            />
            <p className="text-md text-start text-black">
              Endodontists are dentists who have received an additional three
              years of specialized education in the area of root canal therapy.
              These specialists in root canal treatment are highly skilled and
              can provide top-notch care, even for teeth that may be more
              complex to treat.
            </p>
            <p className="text-md text-start text-black">
              At our clinics, we have a team of specialists in endodontics who
              are available to offer expert root canal treatment whenever
              necessary. An endodontist focuses on root canal treatment for
              teeth that have curved or twisted roots, narrow canals, previous
              endodontic treatment, or are more difficult to access (such as
              upper back molars.)
            </p>
            <p className="text-md text-start text-black">
              When an expert endodontist performs our root canal procedure, you
              can be confident that you will receive the most gentle and
              effective care possible.
            </p>
          </div>
          <div className="service_section-right w-[50%]">
            <LazyLoadImage
              className="h-fit w-fit border-2 border-solid border-inherit shadow-lg"
              src={root_canal_image1}
              alt="root_canal_image"
            />
          </div>
        </div>

        <div className="servicepage-section-content flex w-full flex-row items-center  gap-[2rem] bg-gray-200 p-[4rem]">
          <div className="service_section-right w-[50%]">
            <LazyLoadImage
              className="h-fit w-fit border-2 border-solid border-inherit shadow-lg"
              src={root_canal_image2}
              alt="root_canal_image"
            />
          </div>
          <div className="service_section-left-cd mt-[1rem] flex w-[50%] flex-col gap-[1rem]">
            {/* <Heading className="heading" text={'Cosmetic Dentistry'} /> */}
            <Subheading
              className="subheading"
              text={'Advanced Endodontic Treatment'}
            />
            <p className="text-md text-start text-black">
              Our endodontists in UAE offer highly efficient and comfortable
              root canal treatment, thanks to our utilization of
              state-of-the-art dental microscopes. These microscopes provide
              precise and detailed imaging of the internal surfaces of your
              tooth roots, which leads to a more effective and successful
              endodontic treatment compared to procedures performed without a
              microscope.
            </p>
            <p className="text-md text-start text-black">
              By incorporating a root canal microscope, we can ensure that there
              is no remaining infection, address any secondary canals, and
              thoroughly clean the tooth before placing the root canal filling.
              These surfaces are not visible to the naked eye, so the use of a
              dental microscope elevates the level of care provided and makes
              the procedure more predictable.
            </p>
            <Subheading
              className="subheading"
              text={'The Procedure for Root Canal Treatment'}
            />
            <p className="text-md text-start text-black">
              To ensure that you do not experience any pain or discomfort during
              your endodontic therapy appointment, we will gently administer
              anesthesia to your tooth. Once your tooth is numb, we will access
              the nerve chambers and remove the tissues inside them. Our dental
              microscope allows us to closely observe the cleaning process
              inside each canal to ensure its thoroughness. Once the cleaning
              process is complete, we fill the tooth to prevent any new
              bacterial growth.
            </p>
          </div>
        </div>
        <div className="service_btn m-[2rem] flex flex-row gap-[2rem]">
          <a
            href="https://wa.me/+971585855829"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              className="w-fit border-2 text-center hover:border-green-500 hover:bg-white hover:text-green-500"
              success
            >
              <BsWhatsapp />
              &nbsp; WhatsApp
            </Button>
          </a>

          <Button
            primary
            className="border-2 border-solid border-blue-500 hover:bg-white hover:text-blue-500"
          >
            <Link to="/appointment">Appointment</Link>
          </Button>

          <Button
            secondary
            className="service_section-back-btn w-fit border-2 border-solid border-black hover:bg-white hover:text-black"
          >
            <Link to="/services/dental">Go Back</Link>
          </Button>
        </div>
        <AboutDoctors />
      </div>
    </div>
  );
}

// import React from 'react';
// import Subheading from '../../../../components/Subheading';
// import Heading from '../../../../components/heading';
// import service_back_img from '../../../../assets/service_back.svg';
// import Button from '../../../../components/Button';
// import { BsWhatsapp } from 'react-icons/bs';
// import Link from '../../../../components/Link';
// import root_canal_image from '../../../../assets/root-canal-treatment-1902.jpg';
// import './rootCanalTreatment.css';

// export default function RootCanalTreatment() {
//   return (
//     <div className="section_margin">
//       <div
//         className="service_section-heading items-center justify-center p-[4rem] text-center"
//         style={{
//           backgroundImage: `url('${service_back_img}')`,
//           backgroundSize: '100%',
//           backgroundRepeat: 'no-repeat',
//         }}
//       >
//         <Subheading className="subheading" text={'Service/Dental'} />
//         <Heading className="heading" text={'Root Canal Treatment'} />
//       </div>

//       <div className="service_section-content flex w-full flex-row gap-[2rem] p-[4rem]">
//         <div className="service_section-right w-[50%] items-center justify-center">
//           <img
//             className="h-full w-full border-2 border-solid border-inherit shadow-lg"
//             src={root_canal_image}
//             alt="rootCanalTreatment"
//           />
//         </div>
//         <div className="service_section-left-rct flex w-[50%] flex-col items-center justify-center gap-[1rem] text-center">
//           <Subheading
//             className="text-gray-600"
//             text={'Root Canal Treatment at ECMC'}
//           />
//           <p className="text-justify text-black">
//             To understand what a root canal is and why you need it, you must
//             first understand the anatomy of the tooth. The hard outside layer of
//             the tooth is known as the enamel. Below the enamel is the layer
//             known as the dentin, followed by the pulp of the tooth, which
//             contains the nerve and blood vessels. When the tooth is cracked or
//             damaged to the point where the pulp is disturbed or exposed, the
//             tooth becomes extremely sensitive to hot and cold, as it no longer
//             has the protection of the other layers. This can be extremely
//             painful. In order to correct this and ensure that the patient is no
//             longer in pain, a root canal will be performed.
//           </p>
//           <div className="service_btn flex flex-row gap-[2rem]">
//             <a
//               href="https://wa.me/+971585855829"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <Button
//                 className="w-fit border-2 text-center hover:border-green-500 hover:bg-white hover:text-green-500"
//                 success
//               >
//                 <BsWhatsapp />
//                 &nbsp; WhatsApp
//               </Button>
//             </a>

//             <Button
//               primary
//               className="border-2 border-solid border-blue-500 hover:bg-white hover:text-blue-500"
//             >
//               <Link to="/appointment">Appointment</Link>
//             </Button>

//             <Button
//               secondary
//               className="service_section-back-btn w-fit border-2 border-solid border-black hover:bg-white hover:text-black"
//             >
//               <Link to="/services/dental">Go Back</Link>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
