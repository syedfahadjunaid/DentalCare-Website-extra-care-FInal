import React from 'react';
import Subheading from '../../components/Subheading';
import Heading from '../../components/heading';
// import DropdownPage from '../comps/DropdownPage';
import Button from '../../components/Button';
import './appointment.css';
// import classNames from 'classnames';
import { BsWhatsapp } from 'react-icons/bs';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

// import { number } from 'prop-types';
import emailjs from 'emailjs-com';

//email Valid Check
const isValidEmail = (email) =>
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

function Appointment({ ...rest }) {
  const [messageResult, setMessageResult] = useState(false);
  // const [errorMsg, setErrorMsg] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [contactValue, setContactValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };
  const handleContactChange = (event) => {
    // if (typeof contactValue === 'number') {
    //   setContactValue(Number(event.target.value));
    // }
    setContactValue(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessageValue(event.target.value);
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

    console.log('Submit');

    emailjs
      .sendForm(
        'service_k8rf36q',
        'template_8cuuxz8',
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
    setNameValue('');
    setEmailValue('');
    setContactValue('');
    setMessageValue('');
    // event.target.reset();
  };

  return (
    <div {...rest} className="appointment_section section_margin">
      <div className="homepage_section-apointment flex w-full flex-row items-center justify-center gap-[2rem] p-[2rem] text-center">
        <div className="homepage_appoint-section-left flex w-[50%] flex-col items-center justify-center gap-[1rem]">
          <Subheading className="subheading" text={'ECMC'} />
          <Heading className="heading" text={'book an appointment'} />
          <p className="text-gray-600">
            Thank you for using the online request form for an appointment at
            Extra Care Medical Center
          </p>
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
              &nbsp; Get An Appointment
            </Button>
          </a>
        </div>

        <div className="homepage_appoint-section-right w-[50%]">
          <div className="appointment_form rounded-[1rem] transition border-2 border-solid border-inherit p-[1.2rem] shadow-lg hover:shadow-2xl">
            <form
              onSubmit={handleSubmit(sendEmail)}
              ref={form}
              className="flex flex-col gap-[8px]"
            >
              <input
                {...register('name', {
                  required: true,
                  maxLength: 30,
                  pattern: /^[A-Za-z]+$/i,
                })}
                name="name"
                onChange={handleNameChange}
                value={nameValue}
                placeholder="Name"
                type="text"
                className="form_elements rounded-[10px] border-2 border-solid border-inherit p-[8px] hover:border-gray-300"
                style={{ outline: 'none' }}
              />
              {errors.name && (
                <span>
                  * This field is required with max length 30 and "A-Z a-z"
                </span>
              )}

              <input
                {...register('email', {
                  required: true,
                  validate: handleEmailValidation,
                })}
                name="email"
                value={emailValue}
                onChange={handleEmailChange}
                placeholder="Email"
                type="email"
                className="form_elements rounded-[10px] border-2 border-solid border-inherit p-[8px] hover:border-gray-300"
                style={{ outline: 'none' }}
              />
              {errors.email && (
                <span>* This field is required with valid email address</span>
              )}

              <input
                {...register('contact', {
                  required: true,
                  maxLength: 13,
                  pattern: {
                    value: /^(0|[1-9]\d*)(\.\d+)?$/,
                  },
                })}
                name="contact"
                value={contactValue}
                onChange={handleContactChange}
                placeholder="Contact Number"
                type="text"
                className="form_elements rounded-[10px] border-2 border-solid border-inherit p-[8px] hover:border-gray-300"
                style={{ outline: 'none' }}
              />
              {errors.contact && (
                <span>* This field is required with number "0-9"</span>
              )}

              <textarea
                {...register('message', { required: true })}
                className="form_elements rounded-[10px] border-2 border-solid border-inherit p-[8px] hover:border-gray-300"
                name="message"
                onChange={handleMessageChange}
                value={messageValue}
                placeholder="Message"
                rows="7"
                style={{ resize: 'none', outline: 'none' }}
              />
              {errors.message && <span>* This field is required.</span>}
              <div className="flex flex-row items-center gap-[2rem]">
                <Button
                  onClick={handleSubmit(sendEmail)}
                  type="submit"
                  className="w-fit hover:border-transparent hover:bg-blue-300"
                  warning
                >
                  Submit
                </Button>
                <div className="">
                  {messageResult && (
                    <p className="flex flex-row gap-[8px] text-start text-black">
                      <BsFillCheckCircleFill className="mt-1 text-green-600" />
                      Message Sent Succesfully
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
