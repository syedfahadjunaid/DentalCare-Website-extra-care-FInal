import React from 'react';
import Subheading from '../../../../components/Subheading';
import Heading from '../../../../components/heading';
// import service_back_img from '../../../../assets/service_back.svg';
import Button from '../../../../components/Button';
import { BsWhatsapp } from 'react-icons/bs';
import Link from '../../../../components/Link';
import CosmeticDentistry_image from '../../../../assets/shade-guide-min-925x425.jpg';
import CosmeticDentistry_image1 from '../../../../assets/cosmetic/image 20.png';
import CosmeticDentistry_image2 from '../../../../assets/cosmetic/image 17.png';
// import './cosmeticDentistry.css';
import '../dentalServicePageStyle.css';

import { LazyLoadImage } from 'react-lazy-load-image-component';

//Web Images
import image1 from '../../../../assets/cosmetic/image 15.png';
// import image2 from '../../../../assets/dentist-assisting-female-patient-wear-braces.jpg';
import image3 from '../../../../assets/cosmetic/image 19.png';
// import image4 from '../../../../assets/pexels-karolina-grabowska-4210611.jpg';

//Mob Images
import mobImage1 from '../../../../assets/cosmetic/image 15.png';
// import mobImage2 from '../../../../assets/close-up-happy-client-dental-clinic.jpg';
import mobImage3 from '../../../../assets/cosmetic/image 19.png';
// import mobImage4 from '../../../../assets/pexels-anna-shvets-3786128.jpg';

//Awesome Slider
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import AboutDoctors from '../../../aboutus/about/AboutDoctors';

export default function CosmeticDentistry() {
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
            <Heading className=" text-black" text="Cosmetic Dentistry" />
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
              src={CosmeticDentistry_image}
              alt="cosmeticDentistry"
            />
          </div>
          <div className="service_section-left-cd mt-[1rem] flex w-[50%] flex-col gap-[1rem]">
            <Heading className="heading" text={'Cosmetic Dentistry'} />
            <Subheading
              className="text-gray-600"
              text={`"Enhancing Dental Aesthetics through Cosmetic Dentistry!"`}
            />
            <p className="text-md text-start text-black">
              Our team of cosmetic dentistry specialists in Dubai provides a
              range of personalized cosmetic smile enhancement options that can
              give you a completely new look. By using aesthetic dentistry
              techniques, you can turn your smile into a valuable asset. Whether
              you require basic dental bonding or dazzling porcelain veneers,
              achieving a Hollywood smile can significantly transform your life
              in ways you may not have thought possible.
            </p>
            <p className="text-md text-start text-black">
              At our cutting-edge facility, we offer a Digital Smile Design
              experience that allows you to visualize how cosmetic dentistry
              treatments such as Porcelain Veneers or professional teeth
              whitening can enhance your appearance. Using just a few
              photographs and scans of your smile, you can easily preview the
              potential outcome of your virtual makeover. This can be likened to
              a digital cosmetic smile preview or makeover before the actual
              treatment commences.
            </p>
            <p className="text-md text-start text-black">
              Your digital smile design enables you to compare and contrast
              various types of aesthetic dental treatments. You may even choose
              to share the digital photos with your friends or family to get
              their feedback. With this process, you can feel fully assured
              about your decision to invest in cosmetic dentistry.
            </p>
          </div>
        </div>

        <div className="servicepage-section-content flex w-full flex-row items-center justify-center gap-[2rem] p-[4rem]">
          <div className="service_section-left-cd mt-[1rem] flex w-[50%] flex-col justify-center gap-[1rem]">
            {/* <Heading className="heading" text={'Cosmetic Dentistry'} /> */}
            <Subheading className="subheading" text={'Catering to All Needs'} />
            <p className="text-md text-start text-black">
              Each journey towards a smile makeover is individualized. Whether
              you require restoration of worn-down or missing teeth or suffer
              from tooth discoloration that impacts the appearance and health of
              your smile, our top-rated cosmetic dentists in UAE will customize
              a plan according to your specific needs.
            </p>
            <p className="text-md text-start text-black">
              It's quite usual for clients seeking cosmetic dentistry to ask for
              procedures such as:
            </p>
            <p className="text-md text-start text-black">
              <i>• Teeth whitening</i>
            </p>
            <p className="text-md text-start text-black">
              <i>• Porcelain veneers</i>
            </p>
            <p className="text-md text-start text-black">
              <i>• Dental implants</i>
            </p>
            <p className="text-md text-start text-black">
              <i>• Porcelain crowns and bridges</i>
            </p>
            <p className="text-md text-start text-black">
              <i>• Aesthetic gum correction</i>
            </p>
            <p className="text-md text-start text-black">
              <i>• Gum de-pigmentation </i>
            </p>
            <p className="text-md text-start text-black">
              <i>• Invisalign or other orthodontics</i>
            </p>
          </div>
          <div className="service_section-right w-[50%]">
            <LazyLoadImage
              className="h-fit w-fit border-2 border-solid border-inherit shadow-lg"
              src={CosmeticDentistry_image1}
              alt="cosmeticDentistry"
            />
          </div>
        </div>

        <div className="servicepage-section-content flex w-full flex-row items-center  gap-[2rem] bg-gray-200 p-[4rem]">
          <div className="service_section-right w-[50%]">
            <LazyLoadImage
              className="h-fit w-fit border-2 border-solid border-inherit shadow-lg"
              src={CosmeticDentistry_image2}
              alt="cosmeticDentistry"
            />
          </div>
          <div className="service_section-left-cd mt-[1rem] flex w-[50%] flex-col gap-[1rem]">
            {/* <Heading className="heading" text={'Cosmetic Dentistry'} /> */}
            <Subheading
              className="subheading"
              text={'Why Invest in Cosmetic Dentistry?'}
            />
            <p className="text-md text-start text-black">
              Having healthy and attractive teeth is indicative of one's overall
              well-being and character. If you feel uncomfortable about our
              smile's appearance, you tend to avoid displaying it in front of
              others, which can cause you to appear unsociable, unhappy, or
              unapproachable.
            </p>
            <p className="text-md text-start text-black">
              Having healthy and attractive teeth is indicative of one's overall
              well-being and character. If you feel uncomfortable about our
              smile's appearance, you tend to avoid displaying it in front of
              others, which can cause you to appear unsociable, unhappy, or
              unapproachable.
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

// export default function CosmeticDentistry() {
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
//         <Heading className="heading" text={'Cosmetic Dentistry'} />
//       </div>

//       <div className="service_section-content flex w-full flex-row gap-[2rem] p-[4rem]">
//         <div className="service_section-right w-[50%] items-center justify-center">
//           <LazyLoadImage
//             className="h-full w-full border-2 border-solid border-inherit shadow-lg"
//             src={CosmeticDentistry_image}
//             alt="cosmeticDentistry"
//           />
//         </div>
//         <div className="service_section-left-cd flex w-[50%] flex-col items-center justify-center gap-[1rem] text-center">
//           <Subheading
//             className="text-gray-600"
//             text={'Cosmetic Dentistry at ECMC'}
//           />
//           <p className="text-justify text-black">
//             Cosmetic dentistry is all about the search for beauty, usually in
//             the classical sense not the impressionistic or abstract sense like
//             Monet or Picasso. Cosmetic dentistry focuses on improving the
//             appearance and aesthetics of your smile. Common cosmetic dental
//             procedures include teeth whitening, dental bonding and veneers. As
//             long as you have healthy teeth and gums, you can pursue cosmetic
//             dental treatments. But if you have extensive cavities or gum
//             disease, your dentist will want to address those conditions first.
//             Once your smile is healthy again, you can decide which cosmetic
//             treatments you want to explore. Cosmetic dentistry aims to create a
//             more balanced, symmetrical and aesthetically pleasing smile. Common
//             cosmetic dental services include teeth whitening, dental bonding,
//             veneers, and tooth and gum contouring.
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
