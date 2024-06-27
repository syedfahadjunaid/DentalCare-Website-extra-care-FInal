import React from 'react';
import './aboutus.css';
import Subheading from '../../../components/Subheading';
import Heading from '../../../components/heading';

import aboutusimage1 from '../../../assets/doctor-crossing-arms-while-holding-stethoscope-white-coat.jpg';
import aboutusimage2 from '../../../assets/top-view-stethoscope.jpg';

import whychooseusImage from '../../../assets/SL-051919-20420-21.jpg';

// import aboutus1 from '../../../assets/professional-dentist-tools-dental-office.jpg';
import ourMissionImage from '../../../assets/creative-background-with-rough-painted-texture.jpg';

import icon1 from '../../../assets/whychooseus/In-house-Dental-Lab.svg';
import icon2 from '../../../assets/whychooseus/40-Doctors.svg';
import icon3 from '../../../assets/whychooseus/Customized-Treatment-Plans.svg';
import icon4 from '../../../assets/whychooseus/Latest-Technologies.svg';
import icon5 from '../../../assets/whychooseus/Transparent-Cost.svg';

export default function Aboutus() {
  return (
    <div className="aboutus_section">
      <div
        className="aboutus_section-heading flex w-full flex-col items-center justify-center gap-[1rem] p-[4rem] text-center"
        style={{ backgroundColor: '#55C1DC' }}
      >
        {/* <Subheading className="subheading" text={''} /> */}
        <Heading className="heading animate-pulse" text={'About Us'} />
      </div>

      <div className="aboutus_section-content flex w-full flex-row justify-center gap-[2rem] bg-gray-200 p-[4rem]">
        <div className="aboutus_section-text-heading flex w-[50%] flex-col items-center justify-center gap-[1rem]  ">
          <Subheading
            className="subheading text-center text-xl font-semibold"
            text={'Brighten your smile, lead a healthier life!'}
          />
          <div className="aboutus_section-text flex flex-col gap-[1rem] text-start">
            <p className="text-justify text-xl text-black">
              Extra Care Medical Center is an innovative and patient-centric
              clinic situated right in the heart of Abu Dhabi, focused on
              offering best dental and general healthcare. We are equipped with
              highly trained, experienced and professional team of doctors who
              are dedicated in offering primary and preventive patient care.
              They aim to offer dental experiences that develop a lasting
              connection based on confidence, trust, quality of work and optimal
              patient care. These are some reasons why Extra Care Medical Center
              is reckoned as the leading dental and general medicine clinic in
              UAE.
            </p>
          </div>
        </div>

        <div className="aboutus_section-image w-[50%]">
          <img
            className="w-full"
            src={aboutusimage1}
            alt="professional-dentist-tools-dental-office"
          />
        </div>
      </div>

      <div className="aboutus_section-content flex w-full flex-row gap-[2rem] p-[4rem]">
        <div className="aboutus_section-image w-[50%]">
          <img
            className="w-full"
            src={aboutusimage2}
            alt="professional-dentist-tools-dental-office"
          />
        </div>
        <div className="aboutus_section-text-heading flex w-[50%] flex-col items-center justify-center gap-[1rem]">
          <div className="aboutus_section-text flex flex-col gap-[1rem] text-start">
            <p className="text-justify text-xl text-black">
              Being the leading dental and general medicine clinic, Extra Care
              Medical Center features the advanced and modern treatment facility
              including latest equipments and technology to offer excellent
              dental and general medicine care. The excellent service and
              successful treatment have turned our clinic into a leading dental
              and general medicine clinic in Abu Dhabi.
            </p>

            <p className="text-justify text-xl text-black">
              Patients and their health is our priority and we put all efforts
              in delivering satisfying services that is perfect for them. Our
              clinic also focuses on cleanliness and hygiene and takes all
              necessary steps to keep the clinic welcoming and safe for
              patients.
            </p>
          </div>
        </div>
      </div>

      <div className="our_vision flex flex-row gap-[1rem] p-[4rem]">
        <div className="aboutus_section-ourvision-left flex w-[70%] flex-col gap-[1rem] bg-gray-200 p-[3rem] text-start">
          <Heading className="heading" text={'Our Vision!'} />
          <div className="aboutus_section-ourvision-text flex flex-col gap-[1.4rem]">
            <p className="text-start text-black">
              • Excellence is not just our goal, but an attitude in everything
              we do. Our unwavering commitment to excellence is evident in our
              actions.
            </p>
            <p className="text-start text-black">
              • We value and respect each other both personally and
              professionally, recognizing that our collective success is
              dependent on effective teamwork. We prioritize collaboration over
              individualism.
            </p>
            <p className="text-start text-black">
              • At the heart of our organization lies integrity. We strive to
              always do what is right, upholding our values and keeping our
              promises to ourselves and others.
            </p>
            <p className="text-start text-black">
              • While we are proud of our accomplishments, we maintain a humble
              mindset. We acknowledge that our success is not solely due to our
              own efforts, but rather a result of the combined efforts of our
              team.
            </p>
          </div>
        </div>
        <div
          className="aboutus_section-ourvision-right flex w-[30%] flex-col items-center justify-center gap-[1rem] p-[1rem] text-center"
          style={{
            backgroundImage: `url('${ourMissionImage}')`,
            backgroundSize: 'cover',
          }}
        >
          <Heading className="text-[#159eec]" text={'Our Mission!'} />
          <div className="aboutus_section-text">
            <p className="text-center text-lg font-semibold text-white">
              "Our mission is to deliver a dental and general healthcare
              experience that surpasses each patient's expectations, all while
              establishing a relationship built on trust and exceptional
              customer service."
            </p>
          </div>
        </div>
      </div>

      <div className="whychooseus-section flex flex-col">
        <div className="whychooseus-section-text flex flex-col gap-[1rem] p-[4rem]">
          {/* <Heading className="text-center" text="Why Choose ECMC?" /> */}
          <h1 className="text-center text-[2.5rem]">Why Choose ECMC?</h1>
          <p className="text-justify text-black">
            The Extra Care Medical Center, UAE is a leading dental and general
            medicine establishment that caters to both local and international
            patients across various locations. It offers advanced cosmetic and
            restorative dental treatments and general medical care in a modern
            and welcoming facility. The clinic provides personalized care plans
            based on the patient's schedule and employs a team of experienced
            dentists and medical specialists, making it a convenient
            one-stop-shop for all your dental needs.
          </p>
          <p className="text-justify text-black">
            ECMC has been delivering top-notch healthcare services to patients
            since conception. The clinic offers a range of specialties,
            including Dental Care, General Medicine, and other services. The
            team is committed to providing exceptional patient-centered care
            with compassion and high-quality standards. They strive to offer
            real value to their patients through different promotions, packages,
            and collaborations with partners and insurance companies.
          </p>
          <p className="text-justify text-black">
            The clinic's core values are based on work integrity and trust, and
            they have earned full accreditation by Local Government for their
            exceptional practices.
          </p>
        </div>
        <div
          className="whychooseus-section2"
          style={{
            backgroundImage: `url('${whychooseusImage}')`,
            backgroundSize: 'cover',
          }}
        >
          <div className="whychooseus-icons-up">
            <div className="whychooseus-icons flex flex-col items-center justify-center">
              <img
                className="opacity-full flip-2-ver-right-1"
                style={{ width: '150px', height: '150px' }}
                src={icon1}
                alt=""
              />
              <p className="text-center text-lg text-white">
                In-house Dental Lab
              </p>
            </div>
            <div className="whychooseus-icons flex flex-col items-center justify-center">
              <img
                className="opacity-full flip-2-ver-right-1"
                style={{ width: '150px', height: '150px' }}
                src={icon2}
                alt=""
              />
              <p className="text-center text-lg text-white">
                Certified & experienced doctors
              </p>
            </div>
            <div className="whychooseus-icons flex flex-col items-center justify-center">
              <img
                className="opacity-full flip-2-ver-right-1"
                style={{ width: '150px', height: '150px' }}
                src={icon3}
                alt=""
              />
              <p className="text-center text-lg text-white">
                Custom treatment plans
              </p>
            </div>
          </div>
          <div className="whychooseus-icons-down">
            <div className="whychooseus-icons flex flex-col items-center justify-center">
              <img
                className="opacity-full flip-2-ver-right-1"
                style={{ width: '150px', height: '150px' }}
                src={icon4}
                alt=""
              />
              <p className="text-center text-lg text-white">
                Latest Technologies
              </p>
            </div>
            <div className="whychooseus-icons flex flex-col items-center justify-center">
              <img
                className="opacity-full flip-2-ver-right-1"
                style={{ width: '150px', height: '150px' }}
                src={icon5}
                alt=""
              />
              <p className="text-center text-lg text-white">
                Transparent cost with insurances
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="whoweare-section mb-[2rem] bg-gray-200">
        <div className="whychooseus-section-text flex flex-col gap-[1rem] p-[4rem]">
          <Heading className="text-center" text="Who We Are?" />
          <p className="text-justify text-black">
            Welcome to Extra Care Medical Center, where we provide comprehensive
            healthcare services to our patients. Our clinic is staffed with a
            team of experienced and compassionate professionals who are
            committed to providing high-quality care.
          </p>
          <p className="text-justify text-black">
            We specialize in a range of services, including dental care, general
            medicine, preventive care, and health screenings. Our dentists are
            skilled in restorative, cosmetic, and surgical dental procedures and
            our general medicine physicians are equipped to manage a wide range
            of health concerns.
          </p>
          <p className="text-justify text-black">
            At our clinic, we strive to create a comfortable and welcoming
            environment for our patients. We believe in patient-centered care,
            which means that we tailor our services to meet the unique needs and
            preferences of each individual.
          </p>
          <p className="text-justify text-black">
            Our team is dedicated to ongoing education and training to stay
            up-to-date with the latest advancements in healthcare. We are proud
            to be accredited by recognized healthcare authorities and to be
            affiliated with reputable medical organizations.
          </p>
          <p className="text-justify text-black">
            Thank you for choosing Extra Care Medical Center for your healthcare
            needs. We look forward to providing you and your family with
            exceptional care.
          </p>
        </div>
      </div>
    </div>
  );
}
