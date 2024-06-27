import React from 'react';
import Subheading from '../../../../components/Subheading';
import Heading from '../../../../components/heading';
// import service_back_img from '../../../../assets/service_back.svg';
import Button from '../../../../components/Button';
import { BsWhatsapp } from 'react-icons/bs';
import Link from '../../../../components/Link';
import DentalImplants_image from '../../../../assets/dental-implants.jpg';
import DentalImplants_image1 from '../../../../assets/Dentalimplants/image 7 (Medium).jpg';
import DentalImplants_image2 from '../../../../assets/Dentalimplants/image 10 (Medium).jpg';
// import './cosmeticDentistry.css';
import '../dentalServicePageStyle.css';

import { LazyLoadImage } from 'react-lazy-load-image-component';

//Web Images
import image1 from '../../../../assets/Dentalimplants/image 9 (Medium).jpg';
// import image2 from '../../../../assets/dentist-assisting-female-patient-wear-braces.jpg';
import image3 from '../../../../assets/Dentalimplants/image 8 (Medium).jpg';
// import image4 from '../../../../assets/pexels-karolina-grabowska-4210611.jpg';

//Mob Images
import mobImage1 from '../../../../assets/female-patient-having-procedure-done-dentist.jpg';
// import mobImage2 from '../../../../assets/close-up-happy-client-dental-clinic.jpg';
import mobImage3 from '../../../../assets/pexels-anna-shvets-3683099.jpg';
// import mobImage4 from '../../../../assets/pexels-anna-shvets-3786128.jpg';

//Awesome Slider
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import AboutDoctors from '../../../aboutus/about/AboutDoctors';

export default function DentalImplants() {
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
            <Heading className=" text-black" text="Dental Implants" />
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
        interval={30000}
      >
        {renderedServicePageData}
      </AutoplaySlider>

      <div className="servicepage-content flex flex-col items-center justify-center gap-[1rem]">
        <div className="servicepage-section-content flex w-full flex-row items-center gap-[2rem] bg-gray-200 p-[4rem]">
          <div className="service_section-right w-[50%]">
            <LazyLoadImage
              className="h-fit w-fit border-2 border-solid border-inherit shadow-lg"
              src={DentalImplants_image}
              alt="cosmeticDentistry"
            />
          </div>
          <div className="service_section-left-cd mt-[1rem] flex w-[50%] flex-col gap-[1rem]">
            <Heading className="heading" text={'Dental Implants'} />
            <Subheading
              className="text-gray-500"
              text={`"Restore Your Smile with Confidence!"`}
            />
            <p className="text-md text-start text-black">
              Dental implants are considered the best option for replacing
              missing teeth in today's dentistry. By integrating with your
              jawbone, implants become a permanent part of your dental
              structure. Additionally, dental implants can be used to support
              one or more teeth, making them an excellent alternative to natural
              teeth.
            </p>
            <Subheading
              className="subheading"
              text={'Dental Implant at ECMC'}
            />
            <p className="text-md text-start text-black">
              At Extra Care Medical Center, we use advanced 3D dental imaging to
              plan the placement of your dental implants before the procedure.
              This cutting-edge technology helps to make the treatment process
              more efficient, reduces the need for bone grafting in areas of
              bone loss, and accelerates your recovery time. By using CBCT
              scanning, we can virtually place your implant in advance and
              create a surgical guide to show the exact location and position
              for installation on the day of your appointment.
            </p>
          </div>
        </div>

        <div className="servicepage-section-content flex w-full flex-row items-center justify-center gap-[2rem] p-[4rem]">
          <div className="service_section-left-cd mt-[1rem] flex w-[50%] flex-col justify-center gap-[1rem]">
            {/* <Heading className="heading" text={'Cosmetic Dentistry'} /> */}
            <Subheading
              className="subheading"
              text={'3D Guided Implant Surgery'}
            />
            <p className="text-md text-start text-black">
              Replacing missing teeth with dental implants is a minimally
              invasive procedure, as the implants are placed inside the bone and
              do not affect surrounding teeth. Our clinic utilizes advanced CBCT
              and 3D imaging technology to plan and execute implant treatment
              with accuracy and predictability. This approach ensures a precise
              and comfortable experience for our patients.
            </p>
            <Subheading
              className="subheading"
              text={'Same-Day Dental Implants'}
            />
            <p className="text-md text-start text-black">
              Replacing missing teeth with dental implants is a minimally
              invasive procedure, as the implants are placed inside the bone and
              do not affect surrounding teeth. Our clinic utilizes advanced CBCT
              and 3D imaging technology to plan and execute implant treatment
              with accuracy and predictability. This approach ensures a precise
              and comfortable experience for our patients.
            </p>
          </div>
          <div className="service_section-right w-[50%]">
            <LazyLoadImage
              className="h-fit w-fit border-2 border-solid border-inherit shadow-lg"
              src={DentalImplants_image1}
              alt="cosmeticDentistry"
            />
          </div>
        </div>

        <div className="servicepage-section-content flex w-full flex-row items-center  gap-[2rem] bg-gray-200 p-[4rem]">
          <div className="service_section-right w-[50%]">
            <LazyLoadImage
              className="h-fit w-fit border-2 border-solid border-inherit shadow-lg"
              src={DentalImplants_image2}
              alt="cosmeticDentistry"
            />
          </div>
          <div className="service_section-left-cd mt-[1rem] flex w-[50%] flex-col gap-[1rem]">
            {/* <Heading className="heading" text={'Cosmetic Dentistry'} /> */}
            <Subheading
              className="subheading"
              text={'All-on-6 Dental Implants'}
            />
            <p className="text-md text-start text-black">
              All-on-Six dental implants refer to a dental restoration procedure
              that involves placing six implants to support a full arch
              prosthesis, providing a permanent solution for extensive tooth
              loss. This treatment is often recommended for patients who are
              unhappy with their appearance due to missing teeth and require a
              more extensive tooth restoration option.
            </p>
            <Subheading
              className="subheading"
              text={'All-on-4 Dental Implants'}
            />
            <p className="text-md text-start text-black">
              All-on-Four dental implants use four implants to support a full
              arch prosthesis, which is a permanent tooth replacement option.
              This treatment is commonly recommended for patients who have had
              all their teeth extracted and is dissatisfied with their full
              dentures, especially the lower ones.
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
// import DentalImplants_image from '../../../../assets/dental_implant.jpg';
// import './dentalImplants.css';

// export default function DentalImplants() {
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
//         <Heading className="heading" text={'Dental Implants'} />
//       </div>

//       <div className="service_section-content flex w-full flex-row gap-[2rem] p-[4rem]">
//         <div className="service_section-right w-[50%] items-center justify-center">
//           <img
//             className="h-full w-full border-2 border-solid border-inherit shadow-lg"
//             src={DentalImplants_image}
//             alt="dental_implant"
//           />
//         </div>
//         <div className="service_section-left-di flex w-[50%] flex-col items-center justify-center gap-[1rem] text-center">
//           <Subheading
//             className="text-gray-600"
//             text={'Dental Implants at ECMC'}
//           />
//           <p className="text-justify text-black">
//             Technically, a dental implant is an artificial tooth root that’s
//             placed into your jaw to hold a prosthetic tooth or bridge. However,
//             when most people use the term “dental implants,” they’re talking
//             about the combination of the implant (the artificial tooth root) and
//             the prosthetic tooth. Dental implants may be an option for people
//             who have lost one or more teeth due to periodontal disease, an
//             injury, or some other reason and who prefer not to wear dentures.
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
