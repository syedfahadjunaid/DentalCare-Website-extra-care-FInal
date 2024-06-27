import './footer.css';
import Logo from '../../assets/extracare-logo.png';
import Link from '../Link';
import Subheading from '../Subheading';
import {
  FaFacebookSquare,
  FaLocationArrow,
  FaLinkedin,
  FaInstagramSquare,
  FaWhatsappSquare,
} from 'react-icons/fa';
import { TbDeviceLandlinePhone } from 'react-icons/tb';
import { MdEmail } from 'react-icons/md';
// import { HiLocationMarker } from 'react-icons/hi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import Button from '../Button';
import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';

import emailjs from 'emailjs-com';
import { BsFillCheckCircleFill } from 'react-icons/bs';

import { LazyLoadImage } from 'react-lazy-load-image-component';

//email Valid Check
const isValidEmail = (email) =>
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [messageResult, setMessageResult] = useState(false);

  const [emailValue, setEmailValue] = useState('');

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const form = useRef();

  //Email Validation
  const handleEmailValidation = (email) => {
    // console.log('ValidateEmail was called with', email);

    const isValid = isValidEmail(email);

    // const validityChanged =
    //   (errors.email && isValid) || (!errors.email && !isValid);
    // if (validityChanged) {
    //   console.log('Fire tracker with', isValid ? 'Valid' : 'Invalid');
    // }

    return isValid;
  };

  const sendEmail = (event) => {
    // event.preventDefault();

    emailjs
      .sendForm(
        'service_k8rf36q',
        'template_c2hf5ch',
        form.current,
        '8jlPvLzlTjEs4pn7n'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setMessageResult(true);
    setEmailValue('');

    // event.target.reset();
  };
  return (
    <div className="footer_section flex flex-col items-center justify-center border-t-4 border-solid border-white">
      <div className="footer_section-first flex w-full flex-row gap-[2rem] p-[3rem]">
        <div className="footer_section-logo w-[31%]">
          <div className="footer_section-logo-img">
            <Link to="/">
              <LazyLoadImage className="w-full" src={Logo} alt="footer logo" />
            </Link>
          </div>

          {/* <Subheading
            className="footer_subheading"
            text={'EXTRACARE Medical Center LLC'}
          /> */}
        </div>

        <div className="footer_section-links flex w-[23%] flex-col gap-[1rem]">
          <Subheading className="footer_subheading" text={'Important Links'} />
          <div className="footer_section-link flex flex-col gap-[10px]">
            <p>
              <Link to="/">Home</Link>
            </p>
            <p>
              <Link to="/about">About</Link>
            </p>
            <p>
              <Link to="/services">Services</Link>
            </p>
            <p>
              <Link to="/contactus">Contact</Link>
            </p>
            <p>
              <Link to="/companyprofile">Company Profile</Link>
            </p>
            <p>
              <Link to="/careers">Careers</Link>
            </p>
          </div>
        </div>

        <div className="footer_section-contact flex w-[23%] flex-col gap-[1rem]">
          <Subheading className="footer_subheading" text={'Contact Us'} />
          <div className="flex flex-col gap-[1rem] text-justify">
            <div className="flex flex-row gap-[1rem] ">
              <FaLocationArrow className="mt-0 text-[2rem] text-white" />
              <p className="text-start">
                Nahel Tower, (NBO - National Bank of Oman Building), Al Najda
                Street, Abu Dhabi, United Arab Emirates
                <br />
                -PO Box 72599
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

            {/* <div className="flex flex-row gap-[1rem] text-start">
              <FaFacebookSquare className="mt-1 text-[1rem] text-white" />
              <p>
                <a
                  href="https://www.facebook.com/extracaremedicalcenter?mibextid=ZbWKwL
                  "
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-green-500"
                >
                  ECMC Facebook Page
                </a>
              </p>
            </div> */}

            <div className="flex flex-row gap-[1rem]">
              <MdEmail className="mt-1 text-[1rem] text-white" />
              <p>
                <a
                  href="mailto:info@extracareuae.com"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-green-500"
                >
                  info@extracareuae.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer_section-newsletter flex w-[23%] flex-col gap-[1rem]">
          <Subheading className="footer_subheading" text={'News Letter'} />
          <div className="footer_section-newsletter-input">
            <form
              className="flex flex-col gap-[1rem]"
              onSubmit={handleSubmit(sendEmail)}
              ref={form}
            >
              <input
                {...register('email', {
                  required: true,
                  validate: handleEmailValidation,
                })}
                className="w-full p-[1rem]"
                name="email"
                type="email"
                value={emailValue}
                onChange={handleEmailChange}
                placeholder="Enter your email..."
                style={{ outline: 'none' }}
                required
              />
              {errors.email && (
                <span>This field is required with valid email address</span>
              )}

              <div className="flex flex-row items-center gap-[1rem]">
                <Button
                  onClick={handleSubmit(sendEmail)}
                  primary
                  type="submit"
                  className="w-fit hover:bg-white hover:text-blue-400"
                >
                  Subscribe
                </Button>
                {messageResult && (
                  <p className="flex flex-row text-white">
                    <BsFillCheckCircleFill className="mt-1 text-green-500" />
                    &nbsp; Subscribed
                  </p>
                )}
              </div>
            </form>
            {/* {messageResult && (
              <p className="flex flex-row text-white">
                <BsFillCheckCircleFill className="mt-1" />
                &nbsp; Subscribed
              </p>
            )} */}
            <div className="footer_section-socialicons mt-[3rem] flex flex-row items-center justify-center gap-[1rem]">
              <a
                href="https://www.facebook.com/extracareuae?mibextid=ZbWKwL"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-green-500"
              >
                <FaFacebookSquare className="text-[2rem] text-white transition hover:text-[#46B649]" />
              </a>

              <a
                href="https://instagram.com/extracareuae?igshid=ZDdkNTZiNTM="
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-green-500"
              >
                <FaInstagramSquare className="text-[2rem] text-white transition hover:text-[#46B649]" />
              </a>

              <a
                href="https://wa.me/+971585855829"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-green-500"
              >
                <FaWhatsappSquare className="text-[2rem] text-white transition hover:text-[#46B649]" />
              </a>

              <a
                href="https://www.linkedin.com/company/extracaremedialcenter/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-green-500"
              >
                <FaLinkedin className="text-[2rem] text-white transition hover:text-[#46B649]" />
              </a>
            </div>
          </div>
          {/* <div className="footer_section-newsletter-button">
            
          </div> */}
          {/* <div className="footer_section-socials flex flex-col text-white">
            <div className="flex flex-row">
              <FaWhatsappSquare className="text-[2rem]" />
              <p>0586640164</p>
            </div>
          </div> */}
        </div>
      </div>

      <div className="footer_section-second mb-[2rem] flex flex-row">
        <div className="footer_section-second-copyright">
          <p>&copy;EXTRACARE Medical Center LLC</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
