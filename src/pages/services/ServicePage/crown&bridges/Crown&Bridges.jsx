import React from 'react';
import Subheading from '../../../../components/Subheading';
import Heading from '../../../../components/heading';
// import service_back_img from '../../../../assets/service_back.svg';
import Button from '../../../../components/Button';
import { BsWhatsapp } from 'react-icons/bs';
import Link from '../../../../components/Link';
import crown_and_bridges_image from '../../../../assets/dental-bridge.jpg';
import crown_and_bridges_image1 from '../../../../assets/crown/image 8.jpg';
import crown_and_bridges_image2 from '../../../../assets/crown/image 11.jpg';
// import './cosmeticDentistry.css';
import '../dentalServicePageStyle.css';

import { LazyLoadImage } from 'react-lazy-load-image-component';

//Web Images
import image1 from '../../../../assets/dentist-examining-patient-s-teeth.jpg';
// import image2 from '../../../../assets/dentist-assisting-female-patient-wear-braces.jpg';
import image3 from '../../../../assets/crown/image 12.jpg';
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

export default function CrownnBridges() {
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
            <Heading className=" text-black" text="Crown & Bridges Procedure" />
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
              src={crown_and_bridges_image}
              alt="cosmeticDentistry"
            />
          </div>
          <div className="service_section-left-cd mt-[1rem] flex w-[50%] flex-col gap-[1rem]">
            <Heading className="heading" text={'Crown & Bridges'} />
            <Subheading
              className="text-gray-500"
              text={`"Refurbish your Smile with Dental Crowns & Bridges!"`}
            />
            <p className="text-md text-start text-black">
              Extra Care Medical Center produces top-of-the-line custom dental
              bridges and dental crowns in UAE, using premium materials that are
              both functional and visually appealing. Our ceramic dental crowns
              and bridges are designed to match your natural teeth seamlessly,
              ensuring a natural-looking and functional appearance. Similarly,
              if you require teeth replacement, we offer a variety of design
              options for dental bridges that are equivalent to those of dental
              crowns.
            </p>
            <Subheading
              className="subheading"
              text={'Is a Dental Crown Necessary?'}
            />
            <p className="text-md text-start text-black">
              A dental crown is a protective dental restoration that covers the
              entire visible part of a tooth above the gum line. As it resembles
              a hat or a helmet that fits over the tooth, some people call it a
              "cap."
            </p>
            <p className="text-md text-start text-black">
              Dental crowns are typically advised when a tooth is unable to
              withstand regular daily use due to structural damage.
            </p>
          </div>
        </div>

        <div className="servicepage-section-content flex w-full flex-row items-center justify-center gap-[2rem] p-[4rem]">
          <div className="service_section-left-cd mt-[1rem] flex w-[50%] flex-col justify-center gap-[1rem]">
            {/* <Heading className="heading" text={'Cosmetic Dentistry'} /> */}
            <Subheading
              className="subheading"
              text={'Digital Scanner Available Onsite'}
            />
            <p className="text-md text-start text-black">
              Our state-of-the-art digital scanning technology allows us to
              produce a computer-generated image of your teeth, without the need
              for uncomfortable traditional impressions. This technique not only
              enhances patient comfort but also increases the precision of
              restorations. Furthermore, we can directly transfer the digital
              impression to our onsite milling equipment to provide you with
              same-day restorations.
            </p>
            <Subheading
              className="subheading"
              text={'Categories of Dental Crowns'}
            />
            <p className="text-md text-start text-black">
              Most of our dental crowns are metal-free, fully ceramic. They are
              more aesthetically pleasing and have a more natural appearance.
            </p>
            <p className="text-md text-start text-black">
              To ensure that your ceramic dental crown matches your natural
              tooth enamel's precise color and shade, we employ special shade
              guides during the design process. This ensures that the permanent
              crown blends in with the surrounding teeth, resulting in a
              beautiful and natural-looking smile. Our UAE-based dentists offer
              a warranty on each of our ceramic dental crowns.
            </p>
          </div>
          <div className="service_section-right w-[50%]">
            <LazyLoadImage
              className="h-fit w-fit border-2 border-solid border-inherit shadow-lg"
              src={crown_and_bridges_image1}
              alt="cosmeticDentistry"
            />
          </div>
        </div>

        <div className="servicepage-section-content flex w-full flex-row items-center  gap-[2rem] bg-gray-200 p-[4rem]">
          <div className="service_section-right w-[50%]">
            <LazyLoadImage
              className="h-fit w-fit border-2 border-solid border-inherit shadow-lg"
              src={crown_and_bridges_image2}
              alt="cosmeticDentistry"
            />
          </div>
          <div className="service_section-left-cd mt-[1rem] flex w-[50%] flex-col gap-[1rem]">
            {/* <Heading className="heading" text={'Cosmetic Dentistry'} /> */}
            <Subheading
              className="subheading"
              text={'CAD/CAM (Same-Day) Dental Crowns using 3D Technology'}
            />
            <p className="text-md text-start text-black">
              At Extra Care Medical Center, we have an in-house dental
              laboratory that utilizes the latest 3D technology to provide
              same-day crowns, in addition to handcrafted ceramic dental crowns.
              The type of dental crown that will be suitable for you will depend
              on your schedule, whether you reside locally or are traveling from
              another country, and the overall aesthetic design you desire.
            </p>
            <Subheading
              className="subheading"
              text={'Ceramic Dental Bridges for Missing Tooth'}
            />
            <p className="text-md text-start text-black">
              The purpose of a ceramic dental bridge is to replace a missing
              tooth and fill in the gap it creates. This type of fixed dental
              bridge resembles 3-4 crowns in a row, with the end ones fitting
              over a tooth or dental implant. The pontic crowns in between serve
              to span the length of the gap and restore the appearance and
              function of the teeth.
            </p>
            <p className="text-md text-start text-black">
              Generally, bridges require natural teeth on either end to support
              them, but if several teeth are missing, a pair of dental implants
              can also provide the necessary support for the ceramic bridge.
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
// import crown_and_bridges_image from '../../../../assets/dental-bridge.jpg';
// import './crown&Bridges.css';

// import { LazyLoadImage } from 'react-lazy-load-image-component';

// export default function CrownnBridges() {
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
//         <Heading className="heading" text={'Crown & Bridges'} />
//       </div>

//       <div className="service_section-content flex w-full flex-row gap-[2rem] p-[4rem]">
//         <div className="service_section-right w-[50%] items-center justify-center">
//           <LazyLoadImage
//             className="h-full w-full border-2 border-solid border-inherit shadow-lg"
//             src={crown_and_bridges_image}
//             alt="crown&Bridges"
//           />
//         </div>
//         <div className="service_section-left-cb flex w-[50%] flex-col items-center justify-center gap-[1rem] text-center">
//           <Subheading
//             className="text-gray-600"
//             text={'Crown & Bridges Procedure at ECMC'}
//           />
//           <p className="text-justify text-black">
//             A crown is commonly referred to as a “cap”. This cap is placed over
//             the tooth in order to protect it from acquiring damage or to
//             preserve dental work that has been done, such as a root canal or
//             large filling. In the past, crowns were fabricated out of metal,
//             silver, or gold, but they are now usually made up of a combination
//             of porcelain and metal. A bridge is just a three(or more)-unit crown
//             that is designed to be placed over two anchor teeth in order to fill
//             the empty space between them.
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
