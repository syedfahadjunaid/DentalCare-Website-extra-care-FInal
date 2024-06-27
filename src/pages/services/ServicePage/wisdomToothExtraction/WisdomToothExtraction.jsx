import React from 'react';
import Subheading from '../../../../components/Subheading';
import Heading from '../../../../components/heading';
// import service_back_img from '../../../../assets/service_back.svg';
import Button from '../../../../components/Button';
import { BsWhatsapp } from 'react-icons/bs';
import Link from '../../../../components/Link';
import pediatricDentalCare_image from '../../../../assets/Pediatric/image 11.jpg';
import pediatricDentalCare_image1 from '../../../../assets/Pediatric/image 12.jpg';
import pediatricDentalCare_image2 from '../../../../assets/Pediatric/image 10.jpg';
// import './cosmeticDentistry.css';
import '../dentalServicePageStyle.css';

import { LazyLoadImage } from 'react-lazy-load-image-component';

//Web Images
import image1 from '../../../../assets/Pediatric/image 9.jpg';
// import image2 from '../../../../assets/dentist-assisting-female-patient-wear-braces.jpg';
import image3 from '../../../../assets/Pediatric/image 7.jpg';
// import image4 from '../../../../assets/pexels-karolina-grabowska-4210611.jpg';

//Mob Images
import mobImage1 from '../../../../assets/female-patient-having-procedure-done-dentist.jpg';
// import mobImage2 from '../../../../assets/close-up-happy-client-dental-clinic.jpg';
import mobImage3 from '../../../../assets/Pediatric/image 8.jpg';
// import mobImage4 from '../../../../assets/pexels-anna-shvets-3786128.jpg';

//Awesome Slider
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import AboutDoctors from '../../../aboutus/about/AboutDoctors';

export default function PediatricDentalCare() {
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
            <Heading className=" text-black" text="Pediatric Dental Care" />
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
              src={pediatricDentalCare_image}
              alt="pediatricDentalCare_image"
            />
          </div>
          <div className="service_section-left-cd mt-[1rem] flex w-[50%] flex-col gap-[1rem]">
            <Heading className="heading" text={'Pediatric Dental Care!'} />
            <Subheading
              className="text-gray-500"
              text={`"Help your children achieve healthy and happy smiles!"`}
            />
            <p className="text-md text-start text-black">
              Your child's oral health can have a lasting impact on their smile.
              By fostering healthy habits, promoting good oral hygiene, and
              seeking early preventative care from a pediatric dentist, you can
              set your child on the path to optimal oral health.
            </p>
            <p className="text-md text-start text-black">
              Pedodontists are licensed pediatric dental specialists who undergo
              an additional three years of formal dental training following four
              years of dental school. These dental experts specialize in
              everything from behavior management to treating the anatomical
              differences found in a child's rapidly developing mouth.
            </p>
            <p className="text-md text-start text-black">
              At Extra Care Medical Center UAE, we have a team of pediatric
              dentists and other specialists, including orthodontists, who work
              together to provide comprehensive care for your child's dental
              needs.
            </p>
          </div>
        </div>

        <div className="servicepage-section-content flex w-full flex-row items-center justify-center gap-[2rem] p-[4rem]">
          <div className="service_section-left-cd mt-[1rem] flex w-[50%] flex-col justify-center gap-[1rem]">
            {/* <Heading className="heading" text={'Cosmetic Dentistry'} /> */}
            <Subheading
              className="subheading"
              text={'Pediatric Dentistry Treatments at ECMC'}
            />
            <p className="text-md text-start text-black">
              Proper care of your child's primary teeth is crucial as they act
              as guides for the permanent teeth. Maintaining their health and
              development will have an impact on your child's future smile and
              confidence. By keeping the baby teeth healthy for as long as
              possible, your child will experience fewer complications and
              speech issues.
            </p>
            <p className="text-md text-start text-black">
              We offer a variety of pediatric dentistry services, including:
            </p>
            <p className="text-md text-start text-black">
              • <u>Examination</u> -
              <i>
                Regular dental checkups help us track your child's oral growth
                and development, enabling us to identify potential issues and
                address them earlier effectively. It's recommended that children
                have at least two dental exams per year, starting from the age
                of one.
              </i>
            </p>
            <p className="text-md text-start text-black">
              • <u>Orthodontic Evaluations</u> -
              <i>
                We evaluate your child's dental growth, jaw structure, and tooth
                emergence to identify any potential problems that could lead to
                complications in the future.
              </i>
            </p>
            <p className="text-md text-start text-black">
              • <u>Dental Cleanings</u> -
              <i>
                Regular preventive cleanings every six months are essential to
                maintain your child's fresh and clean smile. Our hygienists will
                also educate your child on the best ways to care for their teeth
                and gums between visits.
              </i>
            </p>
            <p className="text-md text-start text-black">
              • <u>Fluoride Treatment</u> -
              <i>
                After your child's cleaning, a professional fluoride treatment
                aids in re-mineralizing weak enamel, which makes teeth more
                resilient to sensitivity and decay.
              </i>
            </p>
            <p className="text-md text-start text-black">
              • <u>Protective Sealants</u> -
              <i>
                To prevent cavity-causing bacteria from affecting the deep
                grooves of back teeth, dental sealants are applied as a
                preventive cover. These sealants only take a few minutes to
                apply and are recommended for all permanent molars that usually
                appear at around the ages of 6 and 12.
              </i>
            </p>
          </div>
          <div className="service_section-right w-[50%]">
            <LazyLoadImage
              className="h-fit w-fit border-2 border-solid border-inherit shadow-lg"
              src={pediatricDentalCare_image1}
              alt="pediatricDentalCare_image"
            />
          </div>
        </div>

        <div className="servicepage-section-content flex w-full flex-row items-center  gap-[2rem] bg-gray-200 p-[4rem]">
          <div className="service_section-right w-[50%]">
            <LazyLoadImage
              className="h-fit w-fit border-2 border-solid border-inherit shadow-lg"
              src={pediatricDentalCare_image2}
              alt="pediatricDentalCare_image"
            />
          </div>
          <div className="service_section-left-cd mt-[1rem] flex w-[50%] flex-col gap-[1rem]">
            {/* <Heading className="heading" text={'Cosmetic Dentistry'} /> */}
            <p className="text-md text-start text-black">
              • <u>Dental Fillings</u> -
              <i>
                Our clinic offers white fillings that are conservative and
                repair the damaged area caused by decay on primary teeth. These
                fillings help prevent the spread of infection and are
                attractive, as they are mercury-free.
              </i>
            </p>
            <p className="text-md text-start text-black">
              • <u>Crowns</u> -
              <i>
                We offer stainless steel crowns and tooth-colored Zirconia
                crowns to our pediatric patients as protective covers, also
                known as "caps," to preserve teeth that are compromised, broken,
                or badly decayed and to prevent premature tooth loss.
              </i>
            </p>
            <p className="text-md text-start text-black">
              • <u>Pulpotomies</u> -
              <i>
                Gentle pulpotomies, combined with crowns, can help to preserve
                your child's tooth until it is replaced with a permanent one.
                This is particularly important in cases of abscessed teeth,
                which can be very painful and pose a risk to your child's
                health.
              </i>
            </p>
            <p className="text-md text-start text-black">
              • <u>Extractions and Space Maintainers</u> -
              <i>
                When a tooth can’t be restored it can be extracted gently and
                replaced with a special appliance to avoid crowding or
                obstructing the underlying adult tooth.
              </i>
            </p>
            <p className="text-md text-start text-black">
              • <u>Early Intervention and Growth Modification</u> -
              <i>
                The use of specialized orthodontic techniques can foster healthy
                oral development, decreasing the likelihood of your child
                experiencing more complicated dental needs in the future.
              </i>
            </p>
            <p className="text-md text-start text-black">
              Our pedodontists and orthodontists recommend early intervention
              and suggest that children visit for dental exams by the age of 1
              or when their first tooth erupts, whichever comes first. During
              the first visit, our team will thoroughly evaluate your child's
              oral development and screen for any risk factors.
            </p>
            <p className="text-md text-start text-black">
              We will tailor the appointment to your child's comfort level and
              may complete a cleaning and take X-rays to evaluate tooth
              development if they are cooperative and comfortable. Older
              children may require a screening for issues such as tongue
              thrusting, thumb sucking, or atypical speech patterns.
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
// import pediatricDentalCare_image from '../../../../assets/cuteness-kid-1.jpg';
// import './pediatricDentalCare.css';

// export default function PediatricDentalCare() {
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
//         <Heading className="heading" text={'Pediatric Dental Care'} />
//       </div>

//       <div className="service_section-content flex w-full flex-row gap-[2rem] p-[4rem]">
//         <div className="service_section-right w-[50%] items-center justify-center">
//           <img
//             className="h-full w-full border-2 border-solid border-inherit shadow-lg"
//             src={pediatricDentalCare_image}
//             alt="pediatricDentalCare"
//           />
//         </div>
//         <div className="service_section-left-pdc flex w-[50%] flex-col items-center justify-center gap-[1rem] text-center">
//           <Subheading
//             className="text-gray-600"
//             text={'Pediatric Dental Care at ECMC'}
//           />
//           <p className="text-justify text-black">
//             Your child’s dental health, especially after they start teething,
//             should never be taken for granted. Pediatric dental care is a
//             guaranteed way of ensuring your child’s oral health and help in
//             preventing cases of dental diseases like tooth decay. Pediatric
//             dental care is necessary for children between the ages of 0 and 18.
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
