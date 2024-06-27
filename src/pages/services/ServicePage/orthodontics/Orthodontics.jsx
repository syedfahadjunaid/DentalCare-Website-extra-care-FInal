import React from 'react';
import Subheading from '../../../../components/Subheading';
import Heading from '../../../../components/heading';
// import service_back_img from '../../../../assets/service_back.svg';
import Button from '../../../../components/Button';
import { BsWhatsapp } from 'react-icons/bs';
import Link from '../../../../components/Link';

import orthodontics_image1 from '../../../../assets/Orthodontic2.jpg';
import orthodontics_image from '../../../../assets/ortho/image 11.jpg';
import orthodontics_image2 from '../../../../assets/ortho/image 10.jpg';

// import './cosmeticDentistry.css';
import '../dentalServicePageStyle.css';

import { LazyLoadImage } from 'react-lazy-load-image-component';

//Web Images
import image1 from '../../../../assets/ortho/image 12.jpg';
// import image2 from '../../../../assets/dentist-assisting-female-patient-wear-braces.jpg';
import image3 from '../../../../assets/Orthodontic2.jpg';
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

export default function Orthodontics() {
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
            <Heading className=" text-black" text="Orthodontics" />
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
              src={orthodontics_image}
              alt="orthodontics_image"
            />
          </div>
          <div className="service_section-left-cd mt-[1rem] flex w-[50%] flex-col gap-[1rem]">
            <Heading className="heading" text={'Orthodontics '} />
            <Subheading
              className="text-gray-500"
              text={`"Correcting your Smile with Orthodontic Braces!"`}
            />
            <p className="text-md text-start text-black">
              Properly aligned teeth are less prone to tooth decay, enamel
              erosion, and other dental problems. Unfortunately, not everyone is
              born with naturally straight teeth. That's where our range of
              orthodontic braces comes in - they can improve both the function
              and appearance of your smile, turning it into one of your most
              cherished assets.
            </p>
            <p className="text-md text-start text-black">
              There are several types of braces to choose from depending on your
              age, personal preferences, and the extent of your tooth
              misalignment. Our orthodontists in UAE will guide you through the
              available options, including Invisalign, traditional metal braces,
              and other options, to help you choose the best one for your
              lifestyle and needs.
            </p>
          </div>
        </div>

        <div className="servicepage-section-content flex w-full flex-row items-center justify-center gap-[2rem] p-[4rem]">
          <div className="service_section-left-cd mt-[1rem] flex w-[50%] flex-col justify-center gap-[1rem]">
            {/* <Heading className="heading" text={'Cosmetic Dentistry'} /> */}
            <Subheading
              className="subheading"
              text={'Different Orthodontic Braces Options at ECMC!'}
            />
            <p className="text-md text-start font-bold text-black">
              Invisalign
            </p>
            <p className="text-md text-start text-black">
              Among the various orthodontic braces available, Invisalign is a
              popular choice among adults. These clear, removable aligners offer
              a discreet way to straighten teeth without the use of fixed
              brackets and wires. By changing the aligners as directed and
              wearing them as prescribed, you can enjoy comfortable trays that
              effectively move your teeth from every angle. Additionally,
              Invisalign is convenient and easy to incorporate into your busy
              schedule.
            </p>
            <p className="text-md text-start font-bold text-black">
              Metal & Ceramic Braces
            </p>
            <p className="text-md text-start text-black">
              In UAE, we offer traditional orthodontics as one of the most
              commonly used types of braces. These braces are available in
              hypoallergenic stainless steel or tooth-colored ceramic, providing
              you with a choice that is most suitable for your age and
              lifestyle. Traditional braces are effective in straightening teeth
              that have minor to severe misalignment issues, such as crowding,
              gaps, and other problems.
            </p>
          </div>
          <div className="service_section-right w-[50%]">
            <LazyLoadImage
              className="h-fit w-fit border-2 border-solid border-inherit shadow-lg"
              src={orthodontics_image1}
              alt="orthodontics_image"
            />
          </div>
        </div>

        <div className="servicepage-section-content flex w-full flex-row items-center  gap-[2rem] bg-gray-200 p-[4rem]">
          <div className="service_section-right w-[50%]">
            <LazyLoadImage
              className="h-fit w-fit border-2 border-solid border-inherit shadow-lg"
              src={orthodontics_image2}
              alt="orthodontics_image"
            />
          </div>
          <div className="service_section-left-cd mt-[1rem] flex w-[50%] flex-col gap-[1rem]">
            {/* <Heading className="heading" text={'Cosmetic Dentistry'} /> */}
            <p className="text-md text-start font-bold text-black">
              Invisible Lingual Braces
            </p>
            <p className="text-md text-start text-black">
              Invisible braces are a type of orthodontic treatment similar to
              traditional metal braces, but with the added benefit of being
              hidden behind your teeth on the lingual surfaces. This makes them
              practically "invisible" to those around you. Lingual braces are an
              effective solution for various types of tooth misalignment, but
              they may require some adjustment time. Each bracket is
              custom-fitted to your teeth to ensure optimal comfort and
              efficiency during the treatment process.
            </p>
            <p className="text-md text-start font-bold text-black">
              Damon Braces
            </p>
            <p className="text-md text-start text-black">
              Self-ligating braces function similarly to metal and ceramic
              braces, but with less friction and tension. These braces feature a
              unique trap-door design that enables the orthodontic arch wire to
              move smoothly between the teeth, reducing pressure on specific
              areas of your mouth. This feature makes the overall treatment
              process more comfortable for some patients. Tooth-colored ceramic
              is a popular choice for self-ligating braces
            </p>
            <p className="text-md text-start font-bold text-black">Myobrace</p>
            <p className="text-md text-start text-black">
              Early intervention orthodontics and growth modification can
              decrease the complexity of your child's future orthodontic
              treatment needs by addressing issues such as crowding, jaw shape,
              and tooth misalignment during their development. By intervening at
              an early stage, while their mouths are still growing and maturing,
              serious jaw or tooth complications can be prevented. This approach
              encourages a healthier growth pattern for your child's mouth and
              can lead to a more straightforward orthodontic treatment in the
              future.
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
// import orthodontics_image from '../../../../assets/Orthodontic2.jpg';
// import './orthodontics.css';

// export default function Orthodontics() {
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
//         <Heading className="heading" text={'Orthodontics'} />
//       </div>

//       <div className="service_section-content flex w-full flex-row gap-[2rem] p-[4rem]">
//         <div className="service_section-right w-[50%] items-center justify-center">
//           <img
//             className="h-full w-full border-2 border-solid border-inherit shadow-lg"
//             src={orthodontics_image}
//             alt="Orthodontics"
//           />
//         </div>
//         <div className="service_section-left-o flex w-[50%] flex-col items-center justify-center gap-[1rem] text-center">
//           <Subheading className="text-gray-600" text={'Orthodontics at ECMC'} />
//           <p className="text-justify text-black">
//             Making the best of your teeth is the aim of orthodontics therapy.
//             Treatments are carried out by an Orthodontist to deal with
//             correcting and developing the teeth and jaws which are not
//             positioned properly is the orthodontics meaning. The first step in
//             developing a treatment plan is the completion of a thorough visual
//             examination of a patient’s smile. After completing this, your care
//             provider creates diagnostic records which include panoramic x-rays,
//             bite impressions, and additional imaging of the jaw joints in some
//             cases. If treatment is needed to realign the teeth, this is
//             discussed extensively. Examining diagnostic records allows for the
//             development of a predictable treatment plan. Your dental
//             professional can also work with an oral surgeon if the symmetry of
//             the face needs to be altered. In the case of an overcrowded mouth,
//             one or several teeth may need to be extracted to prepare for the
//             realignment process. Once the diagnosis and preparation phases are
//             complete, a fixed or removable orthodontic appliance is used to move
//             the teeth and jaw arches into ideal alignment.
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
