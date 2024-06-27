import React from 'react';
import Subheading from '../../../../components/Subheading';
import Heading from '../../../../components/heading';
// import service_back_img from '../../../../assets/service_back.svg';
import Button from '../../../../components/Button';
import { BsWhatsapp } from 'react-icons/bs';
import Link from '../../../../components/Link';
import GumTreatments_image from '../../../../assets/gumTreatment.jpg';
import GumTreatments_image1 from '../../../../assets/Gumstreatments/one (1).jpg';
import GumTreatments_image2 from '../../../../assets/gum_treatments.jpg';
// import './cosmeticDentistry.css';
import '../dentalServicePageStyle.css';

import { LazyLoadImage } from 'react-lazy-load-image-component';

//Web Images
import image1 from '../../../../assets/dentists-treat-patients-teeth.jpg';
// import image2 from '../../../../assets/dentist-assisting-female-patient-wear-braces.jpg';
import image3 from '../../../../assets/gumTreatment.jpg';
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

export default function GumTreatments() {
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
            <Heading className=" text-black" text="Gum Treatments" />
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
              src={GumTreatments_image}
              alt="GumTreatments_image"
            />
          </div>
          <div className="service_section-left-cd mt-[1rem] flex w-[50%] flex-col gap-[1rem]">
            <Heading className="heading" text={'Gums Treatments'} />
            <Subheading
              className="text-gray-500"
              text={`"Stronger Teeth with Gum Protection!"`}
            />
            <p className="text-md text-start text-black">
              Gum disease is the primary reason for tooth loss globally.
              However, the most effective way to combat it is by taking
              preventive measures and seeking early treatment. Regular check-ups
              and cleanings can help prevent the need for extensive gum
              treatment.
            </p>
            <Subheading
              className="subheading"
              text={`Symptoms of Gum Diseases`}
            />
            <p className="text-md text-start text-black">
              <i>• Bleeding gums</i>
            </p>
            <p className="text-md text-start text-black">
              <i>• Bad breath</i>
            </p>
            <p className="text-md text-start text-black">
              <i>• Gum recession</i>
            </p>
            <p className="text-md text-start text-black">
              <i>• Heavy tartar build-up</i>
            </p>
            <p className="text-md text-start text-black">
              <i>• Sensitive gums</i>
            </p>
            <p className="text-md text-start text-black">
              <i>• Food trapped between teeth</i>
            </p>
            <p className="text-md text-start text-black">
              <i>• Tooth loss or mobility</i>
            </p>
            <p className="text-md text-start text-black">
              If you're encountering any of these abovementioned symptoms you
              may require gum disease treatment from a periodontist. To assess
              the condition, the dentist will perform a comprehensive
              examination and utilize X-rays and specialized tools to assess the
              level of attachment between the gum and bone tissues around each
              tooth. The severity of the gum condition can be categorized as
              healthy gums, gingivitis, or mild, moderate, or severe periodontal
              disease, depending on the amount of detachment or structural loss
              detected.
            </p>
          </div>
        </div>

        <div className="servicepage-section-content flex w-full flex-row items-center justify-center gap-[2rem] p-[4rem]">
          <div className="service_section-left-cd mt-[1rem] flex w-[50%] flex-col justify-center gap-[1rem]">
            {/* <Heading className="heading" text={'Cosmetic Dentistry'} /> */}
            <Subheading className="subheading" text={'Gingivitis Treatment'} />

            <p className="text-md text-start text-black">
              Gingivitis is the initial stage of gum disease, but it's entirely
              reversible if detected early. Common symptoms include minor
              irritation and redness. With proper oral hygiene practices and
              professional cleaning, gingivitis can be reversed within two weeks
              in most cases.
            </p>
            <Subheading className="subheading" text={'Periodontal Therapy'} />
            <p className="text-md text-start text-black">
              If left untreated, gingivitis can progress into periodontal
              disease. At this stage, the soft tissues surrounding the teeth
              become infected and separate from the root surfaces, leading to
              bone shrinkage. As a result, deep pockets develop between the gums
              and teeth where detachment has occurred. The deeper the
              periodontal pockets, the higher the risk of tooth loss.
            </p>
            <p className="text-md text-start text-black">
              Periodontists specialize in the health of the gums and bones and
              can assist in saving your smile before it's too late. Through
              various therapeutic options, gum infections can be treated, and
              bone integrity can be maintained to preserve teeth and bone.
            </p>
          </div>
          <div className="service_section-right w-[50%]">
            <LazyLoadImage
              className="h-fit w-fit border-2 border-solid border-inherit shadow-lg"
              src={GumTreatments_image1}
              alt="GumTreatments_image"
            />
          </div>
        </div>

        <div className="servicepage-section-content flex w-full flex-row items-center  gap-[2rem] bg-gray-200 p-[4rem]">
          <div className="service_section-right w-[50%]">
            <LazyLoadImage
              className="h-fit w-fit border-2 border-solid border-inherit shadow-lg"
              src={GumTreatments_image2}
              alt="GumTreatments_image"
            />
          </div>
          <div className="service_section-left-cd mt-[1rem] flex w-[50%] flex-col gap-[1rem]">
            {/* <Heading className="heading" text={'Cosmetic Dentistry'} /> */}
            <Subheading
              className="subheading"
              text={'Gum Treatment Options at ECMC'}
            />
            <p className="text-md text-start font-bold text-black">
              Deep Cleaning
            </p>
            <p className="text-md text-start text-black">
              Regular six-month cleanings are aimed at preventing gum disease.
              However, if heavy tartar buildup and gum pocketing are present, a
              series of deep cleanings are necessary to eliminate the bacteria
              causing the infection. To ensure optimal comfort, affected teeth
              are numbed during the procedure, which is usually done over two or
              more appointments.
            </p>
            <p className="text-md text-start font-bold text-black">
              Pinhole Gum Rejuvenation
            </p>
            <p className="text-md text-start text-black">
              The Pinhole gum surgery is a soft tissue therapy and cosmetic
              technique that targets gum recession. Unlike traditional grafting
              procedures, this method involves gently pulling the gum tissue
              surrounding the tooth to cover the exposed root surface.
            </p>
            <p className="text-md text-start font-bold text-black">
              Laser Dentistry for Gum Disease
            </p>
            <p className="text-md text-start text-black">
              In treating periodontal infections, incorporating laser dentistry,
              specifically for soft tissue therapy, can be a beneficial
              addition. By combining laser therapy with deep cleaning
              procedures, we can more effectively eliminate and decrease the
              number of infectious bacteria present beneath sensitive gum
              tissues.
            </p>
            <p className="text-md text-start font-bold text-black">
              Periodontal Maintenance
            </p>
            <p className="text-md text-start text-black">
              After achieving stability in your periodontal infection, it is
              advisable to schedule maintenance cleanings every 3-4 months to
              avoid relapse and minimize the risk of additional tooth or bone
              loss.
            </p>
            <p className="text-md text-start font-bold text-black">
              Bone Grafting
            </p>
            <p className="text-md text-start text-black">
              In cases where advanced periodontal disease has resulted in
              considerable bone loss, a bone graft may be required to strengthen
              the root of neighboring teeth.
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
// import GumTreatments_image from '../../../../assets/gumTreatment.jpg';
// import './gumTreatments.css';

// export default function GumTreatments() {
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
//         <Heading className="heading" text={'Gum Treatments'} />
//       </div>

//       <div className="service_section-content flex w-full flex-row gap-[2rem] p-[4rem]">
//         <div className="service_section-right w-[50%] items-center justify-center">
//           <img
//             className="h-full w-full border-2 border-solid border-inherit shadow-lg"
//             src={GumTreatments_image}
//             alt="gumTreatment"
//           />
//         </div>
//         <div className="service_section-left-gt flex w-[50%] flex-col items-center justify-center gap-[1rem] text-center">
//           <Subheading
//             className="text-gray-600"
//             text={'Gum Treatments at ECMC'}
//           />
//           <p className="text-justify text-black">
//             Gum disease is inflammation and decay of the gum tissue and jaw bone
//             caused by the accumulation of plaque and tartar (hardened plaque).
//             Similar to tooth decay, gum disease is caused by inadequate dental
//             hygiene. The same kind of germs and leftover food particles in the
//             mouth settle in “pockets” where the surface of the tooth and the gum
//             line meet. The plaque then accumulates in these areas, usually
//             progressing under the gum line. Gum disease starts off as
//             gingivitis. This mildest form of gum disease can be quickly halted
//             from progressing and can be easily reversed with improved oral
//             hygiene. If gingivitis isn’t treated, it progresses into periodontal
//             disease. It is this moderate to severe form of gum disease where
//             substantial damage to the gums and jaw bone supporting the teeth can
//             occur. In the worst case of periodontal disease, teeth get loose and
//             fall out. Patients with periodontal disease requires the
//             intervention and treatment done by a dental professional.
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
