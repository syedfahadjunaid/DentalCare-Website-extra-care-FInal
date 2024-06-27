import React from 'react';
import Subheading from '../../../../components/Subheading';
import Heading from '../../../../components/heading';
// import service_back_img from '../../../../assets/service_back.svg';
import Button from '../../../../components/Button';
import { BsWhatsapp } from 'react-icons/bs';
import Link from '../../../../components/Link';
import teeth_whitening_image from '../../../../assets/happy-girl-pointing-fingers-white-perfect-smile-straight-whitened-teeth-standing-hoodie-against-white-background.jpg';
import teeth_whitening_image1 from '../../../../assets/tw/image-1 (1).jpg';
import teeth_whitening_image2 from '../../../../assets/tw/image-1 (2).jpg';
// import './cosmeticDentistry.css';
import '../dentalServicePageStyle.css';

import { LazyLoadImage } from 'react-lazy-load-image-component';

//Web Images
import image1 from '../../../../assets/tw/image-1 (3).jpg';
// import image2 from '../../../../assets/dentist-assisting-female-patient-wear-braces.jpg';
import image3 from '../../../../assets/tw/image-1 (2).jpg';
// import image4 from '../../../../assets/pexels-karolina-grabowska-4210611.jpg';

//Mob Images
import mobImage1 from '../../../../assets/tw/image-1 (5).jpg';
// import mobImage2 from '../../../../assets/close-up-happy-client-dental-clinic.jpg';
import mobImage3 from '../../../../assets/tw/image-1 (4).jpg';
// import mobImage4 from '../../../../assets/pexels-anna-shvets-3786128.jpg';

//Awesome Slider
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import AboutDoctors from '../../../aboutus/about/AboutDoctors';

export default function TeethWhitening() {
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
            <Heading className=" text-black" text="Teeth Whitening" />
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
              src={teeth_whitening_image}
              alt="cosmeticDentistry"
            />
          </div>
          <div className="service_section-left-cd mt-[1rem] flex w-[50%] flex-col gap-[1rem]">
            <Heading className="heading" text={'Teeth Whitening! '} />
            <Subheading
              className="text-gray-500"
              text={`"Achieve the Bright White Smile Your Always Deserved!"`}
            />
            <p className="text-md text-start text-black">
              Having a confident smile is invaluable. However, if your teeth are
              dark and discolored, it can negatively impact your self-esteem. A
              professional teeth whitening treatment can enhance your smile and
              provide a youthful and healthy appearance.
            </p>
            <p className="text-md text-start text-black">
              When considering a smile makeover, we often suggest teeth
              whitening as a starting point. It is an effective standalone
              aesthetic service and can also help jumpstart the makeover
              process. This enables our cosmetic dentists in UAE to match
              updated dental work against a brighter and more radiant smile.
            </p>
          </div>
        </div>

        <div className="servicepage-section-content flex w-full flex-row items-center justify-center gap-[2rem] p-[4rem]">
          <div className="service_section-left-cd mt-[1rem] flex w-[50%] flex-col justify-center gap-[1rem]">
            {/* <Heading className="heading" text={'Cosmetic Dentistry'} /> */}
            <Subheading
              className="subheading"
              text={'Teeth Whitening Treatment at ECMC!'}
            />
            <p className="text-md text-start text-black">
              Teeth whitening methods can differ significantly from one another.
              When you schedule your first consultation with our cosmetic
              dentists in UAE, they will assess your smile's needs and discuss
              the advantages of each method. Based on your preferences and
              requirements, they may recommend a particular option, such as a
              quick in-office whitening treatment or a specific method to
              address a tooth that doesn't respond well to whitening gel.
              Additionally, we offer home teeth whitening kits that are
              user-friendly and can help maintain a bright and beautiful smile
              for an extended period.
            </p>
          </div>
          <div className="service_section-right w-[50%]">
            <LazyLoadImage
              className="h-fit w-fit border-2 border-solid border-inherit shadow-lg"
              src={teeth_whitening_image1}
              alt="cosmeticDentistry"
            />
          </div>
        </div>

        <div className="servicepage-section-content flex w-full flex-row items-center  gap-[2rem] bg-gray-200 p-[4rem]">
          <div className="service_section-right w-[50%]">
            <LazyLoadImage
              className="h-fit w-fit border-2 border-solid border-inherit shadow-lg"
              src={teeth_whitening_image2}
              alt="cosmeticDentistry"
            />
          </div>
          <div className="service_section-left-cd mt-[1rem] flex w-[50%] flex-col gap-[1rem]">
            {/* <Heading className="heading" text={'Cosmetic Dentistry'} /> */}
            <Subheading
              className="subheading"
              text={'Professional Take-Home Whitening Kit'}
            />
            <p className="text-md text-start text-black">
              We offer custom whitening kits that consist of customized trays
              and high-quality whitening gel. By using these trays once a day or
              while sleeping you will observe visible improvements in just a few
              applications, and full results will emerge within 10-14 days. You
              can keep your trays handy to do touch-ups anytime and ensure your
              smile stays bright for an extended period.
            </p>
            <Subheading
              className="subheading"
              text={'Same-Day Teeth Whitening'}
            />
            <p className="text-md text-start text-black">
              If you're looking for a fast teeth whitening solution and don't
              want to go through the trouble of wearing trays at home, then
              same-day teeth whitening may be the ideal option for you. This
              procedure can brighten your teeth by several shades in just a
              single appointment, which typically lasts around an hour and a
              half. You will experience results similar to those achieved from a
              professional take-home whitening kit, with the only significant
              distinction being the amount of time saved.
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
// import teeth_whitening_image from '../../../../assets/happy-girl-pointing-fingers-white-perfect-smile-straight-whitened-teeth-standing-hoodie-against-white-background.jpg';
// import './teethWhitening.css';

// export default function TeethWhitening() {
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
//         <Heading className="heading" text={'Teeth Whitening'} />
//       </div>

//       <div className="service_section-content flex w-full flex-row gap-[2rem] p-[4rem]">
//         <div className="service_section-right w-[50%] items-center justify-center">
//           <img
//             className="h-full w-full border-2 border-solid border-inherit shadow-lg"
//             src={teeth_whitening_image}
//             alt="teethWhitening"
//           />
//         </div>
//         <div className="service_section-left-tw flex w-[50%] flex-col items-center justify-center gap-[1rem] text-center">
//           <Subheading
//             className="text-gray-600"
//             text={'Teeth Whitening at ECMC'}
//           />
//           <p className="text-justify text-black">
//             Many of us dream of achieving the perfect “Hollywood” white smile,
//             but the reality is that the average diet can stain the teeth and
//             make it hard to achieve a pure white smile. Coffee, wine, and
//             tobacco use are all common factors that can cause staining or
//             discoloration in the teeth. If your whitening toothpaste is just not
//             achieving the white smile of your dreams, it may be time to discuss
//             professional teeth whitening with your dentist or dental hygienist.
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
