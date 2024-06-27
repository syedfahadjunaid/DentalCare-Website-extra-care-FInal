import React from 'react';
import './getInTouch.css';
import Subheading from '../../components/Subheading';
import Heading from '../../components/heading';
import { FiPhoneCall, FiMail } from 'react-icons/fi';
import { MdOutlineLocationOn } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';
// import { FaWhatsapp } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { TbDeviceLandlinePhone } from 'react-icons/tb';
import Link from '../../components/Link';

export default function GetInTouch() {
  return (
    <div className="">
      <div className="getintouch_section items_center flex flex-col justify-center gap-[3rem]">
        <div className="getintouch_heading">
          <Subheading
            className="subheading text-center"
            text={'get in touch'}
          />
          <Heading className="heading text-center" text={'contact'} />
        </div>

        <div className="contact_cards flex w-full flex-row gap-[2rem]">
          <div className=" contact_card flex w-[25%] flex-col gap-[5px] rounded-[1rem] border-2 border-solid border-inherit bg-blue-300 p-[2rem] shadow-lg hover:bg-[#136EB3] hover:text-white hover:shadow-2xl">
            <FiPhoneCall className="text-2xl " />
            <Subheading className="subheading" text={'emergency'} />
            <div className="flex flex-row gap-[1rem]">
              <TbDeviceLandlinePhone className=" mt-1 text-[1rem] text-white" />

              <p>
                <a
                  href="tel:+971585855829"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-green-500"
                >
                  +971 585855829
                </a>
              </p>
            </div>
            <div className="flex flex-row gap-[1rem]">
              <BsFillTelephoneFill className="mt-1 text-[1rem] text-white" />
              <p>
                <a
                  href="tel:+97126344922"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-green-500"
                >
                  +971 26344922
                </a>
              </p>
            </div>
          </div>
          <div className="contact_card flex w-[25%] flex-col gap-[5px] rounded-[1rem] border-2 border-solid border-inherit bg-blue-300 p-[2rem] shadow-lg hover:bg-[#136EB3] hover:text-white hover:shadow-2xl">
            <MdOutlineLocationOn className="text-2xl " />
            <Subheading className="subheading" text={'location'} />
            <p className=" transition hover:text-green-500">
              <Link to="/location">
                Nahel Tower, (NBO - National Bank of Oman Building), Al Najda
                Street, Abu Dhabi, United Arab Emirates
                <br />
                -PO Box 72599
              </Link>
            </p>
          </div>
          <div className="contact_card flex w-[25%] flex-col gap-[5px] rounded-[1rem] border-2 border-solid border-inherit bg-blue-300 p-[2rem] shadow-lg hover:bg-[#136EB3] hover:text-white hover:shadow-2xl">
            <FiMail className="text-2xl " />
            <Subheading className="subheading" text={'email'} />

            <p>
              <a
                href="mailto:info@extracareuae.com"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-green-500"
              >
                info@extracareuae.com
              </a>{' '}
            </p>
          </div>
          <div className="contact_card flex w-[25%] flex-col gap-[5px] rounded-[1rem] border-2 border-solid border-inherit bg-blue-300 p-[2rem] shadow-lg hover:bg-[#136EB3] hover:text-white hover:shadow-2xl">
            <BiTimeFive className="text-2xl " />
            <Subheading className="subheading" text={'working hours'} />
            <p>Monday-Sunday</p>
            <p>09:00-21:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
