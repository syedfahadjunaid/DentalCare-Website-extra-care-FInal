import React from 'react';
import '../generalMedicineStyle.css';
import Subheading from '../../../../components/Subheading';
import Heading from '../../../../components/heading';
import service_back_img from '../../../../assets/service_back.svg';
import Button from '../../../../components/Button';
import { BsWhatsapp } from 'react-icons/bs';
import Link from '../../../../components/Link';
import generalmedicines_image from '../../../../assets/shade-guide-min-925x425.jpg';

import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function GM1() {
  return (
    <div className="section_margin">
      <div
        className="service_section-heading items-center justify-center p-[4rem] text-center"
        style={{
          backgroundImage: `url('${service_back_img}')`,
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Subheading className="subheading" text={'General Medicines'} />
        <Heading className="heading" text={'General Medicine 1'} />
      </div>

      <div className="service_section-content flex w-full flex-row gap-[2rem] p-[4rem]">
        <div className="service_section-right w-[50%] items-center justify-center">
          <LazyLoadImage
            className="h-full w-full border-2 border-solid border-inherit shadow-lg"
            src={generalmedicines_image}
            alt="GeneralMedicine1"
          />
        </div>
        <div className="service_section-left flex w-[50%] flex-col items-center justify-center gap-[1rem] text-center">
          <Subheading
            className="text-gray-600"
            text={'General Medicine 1 at ECMC'}
          />
          <p className="text-justify text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio amet
            velit tenetur nostrum esse illo iste nihil repudiandae ex modi.
            Itaque nisi optio necessitatibus sunt eveniet. Error repellendus
            minus nihil.
          </p>
          <div className="service_btn flex flex-row gap-[2rem]">
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
              <Link to="/services/generalmedicines">Go Back</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
