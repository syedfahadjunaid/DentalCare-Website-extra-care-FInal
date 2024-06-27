import React, { useState } from 'react';
import './changingComponent.css';
import Subheading from '../../../components/Subheading';
import Heading from '../../../components/heading';

//images
import image1 from '../../../assets/white-teeth.jpg';
import image2 from '../../../assets/woman-patient-dentist.jpg';
import image3 from '../../../assets/empty-modern-teethcare-stomatology-hospital-office-with-nobody-it-equipped-with-dental-intruments-ready-orthodontist-healthcare-treatment-tooth-radiography-images-display.jpg';

export default function ChangingComponent() {
  const [content1, setContent1] = useState(true);
  const [content2, setContent2] = useState(false);
  const [content3, setContent3] = useState(false);

  const handleClick = (value) => {
    if (value === 'first') {
      setContent1(true);
      setContent2(false);
      setContent3(false);
    } else if (value === 'second') {
      setContent1(false);
      setContent2(true);
      setContent3(false);
    } else if (value === 'third') {
      setContent1(false);
      setContent2(false);
      setContent3(true);
    }
  };

  let content;
  if (content1) {
    content = (
      <div className="changingcomponent-content flex flex-row items-center justify-center gap-[2rem] bg-gray-100 p-[4rem]">
        <div className="changingcomponent-img w-[50%]">
          <img
            className=""
            src={image1}
            alt="STATE-OF-THE-ART TECHNOLOGY-IMG"
          />
        </div>
        <div className="changingcomponent-text w-[50%]">
          <p className="text-justify text-xl text-black">
            Our commitment to providing exceptional dental care is elevated by
            utilizing cutting-edge technology. With the incorporation of highly
            precise techniques, you can trust that you are receiving top-notch
            general health and dental treatment, further reinforced by our team
            of multi-specialty dental professionals.
          </p>
          <p className="text-justify text-xl text-black">
            Our use of advanced dental and general health treatment technology
            includes state-of-the-art tools such as 3D CBCT scanning, allowing
            for improved diagnosis and treatment planning, as well as 3D guided
            dental implant placement, reducing treatment duration and recovery
            time. In addition, we utilize digital scanners instead of
            traditional impressions, endodontic microscopes for successful root
            canal therapy, drill-free dental fillings, laser gum therapy, and
            various other laser options for general health treatment.
          </p>
        </div>
      </div>
    );
  } else if (content2) {
    content = (
      <div className="changingcomponent-content flex flex-row items-center justify-center gap-[2rem] bg-gray-100 p-[4rem]">
        <div className="changingcomponent-text w-[50%]">
          <p className="text-justify text-xl text-black">
            Efficient and comfortable dental care is a priority for us, which is
            why we have streamlined our services to save you time. Our office is
            equipped to provide same-day general health and dental care,
            reducing the number of appointments needed. This option is ideal for
            those with busy schedules or who prefer to have all their treatments
            completed in a single appointment.
          </p>
          <p className="text-justify text-xl text-black">
            Our single-day dentistry and general healthcare services include
            custom-milled dental crowns made on-site using 3D CAD/CAM CEREC
            technology & general health consultations.
          </p>
        </div>
        <div className="changingcomponent-img w-[50%]">
          <img
            className=""
            src={image2}
            alt="EXPEDITED TREATMENT OPTIONS-IMG"
          />
        </div>
      </div>
    );
  } else if (content3) {
    content = (
      <div className="changingcomponent-content flex flex-row items-center justify-center gap-[2rem] bg-gray-100 p-[4rem]">
        <div className="changingcomponent-img w-[50%]">
          <img
            className=""
            src={image3}
            alt="FLEXIBLE PAYMENTS & INSURANCES-IMG"
          />
        </div>
        <div className="changingcomponent-text w-[50%]">
          <p className="text-justify text-xl text-black">
            At our dental clinics in Abu Dhabi, we accept multiple insurance
            plans and provide flexible payment options. This way, you can
            conveniently manage the cost of your necessary or elective
            treatments, from a simple procedure to complex full mouth
            rehabilitation. Our insurance options let you access smile makeover
            or general health treatment without delay.
          </p>
          <p className="text-justify text-xl text-black">
            To ensure transparency, each patient is presented with a detailed
            treatment plan outlining the available options and costs involved.
            We prioritize honesty when it comes to our services, giving you
            confidence in your choice of care.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="changingcomponent-section flex flex-col gap-[1rem]">
      <div className="changingcomponent-heading text-center">
        <Heading className="" text="Our Strategy to Patient Care!" />
      </div>
      <div className="changingcomponent-subheadings">
        <div
          onClick={() => handleClick('first')}
          className="changingcomponent-subheading w-full items-center justify-center text-center transition"
        >
          <Subheading
            className={
              content1
                ? `subheading pointer cursor-pointer border-b-4 border-solid border-[#159eec] bg-gray-200 p-[1rem] shadow-2xl transition`
                : `subheading cursor-pointer p-[1.5rem] transition hover:animate-pulse`
            }
            text="State-of-the-Art Technology"
          />
        </div>
        <div
          onClick={() => handleClick('second')}
          className="changingcomponent-subheading w-full items-center justify-center text-center transition"
        >
          <Subheading
            className={
              content2
                ? `subheading cursor-pointer border-b-4 border-solid border-[#159eec] bg-gray-200 p-[1rem] shadow-2xl`
                : `subheading cursor-pointer p-[1.5rem] hover:animate-pulse`
            }
            text="Expedited Treatment Options"
          />
        </div>
        <div
          onClick={() => handleClick('third')}
          className="changingcomponent-subheading w-full items-center justify-center text-center transition"
        >
          <Subheading
            className={
              content3
                ? `subheading cursor-pointer border-b-4 border-solid border-[#159eec] bg-gray-200 p-[1rem] shadow-2xl transition`
                : `subheading cursor-pointer p-[1.5rem] transition hover:animate-pulse`
            }
            text="Flexible Payments & Insurances"
          />
        </div>
      </div>
      {content}
    </div>
  );
}
