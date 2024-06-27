import React from 'react';
import './companyProfile.css';
import Heading from '../../components/heading';
//import Subheading from '../../components/Subheading';
import aboutusimageLG from '../../assets/doctor-crossing-arms-while-holding-stethoscope-white-coat.jpg';
import aboutusimageSM from '../../assets/portraitdental.jpg';
import denImg from '../../assets/little-beautiful-girl-dentist-smiling.jpg';
import genImg from '../../assets/general/image6.png';

export default function CompanyProfile() {
  return (
    <div className="company_profile_history_section">
      <div className="company_profile_history_section-images">
        <div className="company-page-img">
          <img
            className="lg-company-img absolute h-screen w-full opacity-80"
            src={aboutusimageLG}
            alt="companyimg"
          />
          <img
            className="sm-company-img absolute h-screen w-full opacity-80"
            src={aboutusimageSM}
            alt="companyimg"
          />
        </div>
        <div className="relative">
          <div className="company_profile_section-img-content-text flex h-screen w-full flex-col items-center justify-center gap-[1rem] p-[4rem] text-center">
            {/* <Subheading className="subheading" text={'lorem ipsum'} /> */}
            <Heading
              className="heading bg-white p-[8px] text-[60px]"
              text={'Company Profile and History'}
            />
          </div>
        </div>
      </div>
      <div
        className="aboutus_section-heading flex w-full flex-col items-center justify-center gap-[1rem] p-[4rem] text-center"
        style={{ backgroundColor: '#55C1DC' }}
      >
        {/* <Subheading className="subheading" text={''} /> */}
        <Heading className="heading animate-pulse" text={'Company Profile'} />
      </div>
      <div className="company_profile_history_section-content flex w-full flex-row gap-[2rem] bg-[#f6f6f6] p-[4rem]">
        <div className="company_profile_history_section-text-heading flex flex-col items-center justify-center gap-[2rem]">
          <div className="company_profile_history_section-text flex flex-col items-center justify-center gap-[1.3rem] text-start">
            <p className="text-justify text-black">
              Extra Care Medical Center is dedicated to providing top-quality
              healthcare services to patients of all ages. We believe that
              preventive care is essential to maintaining optimal health, and we
              strive to help our patients achieve their health goals through
              personalized treatment plans.
            </p>
            <p className="text-justify text-black">
              Dental care services at ECMC include everything from routine
              cleanings and checkups to more advanced procedures such as teeth
              whitening, dental implants, and root canals. Our skilled and
              experienced dentists use the latest technology and techniques to
              ensure that every patient receives the best possible care in:
            </p>

            <div className="company_profile_history_section-points flex flex-row items-center justify-center gap-[2rem] rounded-[5px] bg-white p-[2rem]">
              <div className="company_profile_history_section-points-text w-[50%] gap-[1rem]">
                <p className="text-start text-black">• Preventive Dentistry.</p>
                <p className="text-start text-black">• General Dentistry.</p>
                <p className="text-start text-black">
                  • Pediatric Dentistry (Kids Dentistry) .
                </p>
                <p className="text-start text-black">
                  • Modern Cosmetic Dentistry.
                </p>
                <p className="text-start text-black">• Endodontics.</p>
                <p className="text-start text-black">• Prosthodontics.</p>
                <p className="text-start text-black">• Orthodontics.</p>
                <p className="text-start text-black">
                  • Root canal Treatments.
                </p>
                <p className="text-start text-black">
                  • Fixed and Removable Dentures.
                </p>
                <p className="text-start text-black">• Invisalign.</p>
                <p className="text-start text-black">
                  • Metal and Ceramic Braces.
                </p>
                <p className="text-start text-black">
                  • Veneers (Hollywood smile).
                </p>
                <p className="text-start text-black">• Dental implants.</p>
                <p className="text-start text-black">
                  • Dental bridge and Crowns.
                </p>
                <p className="text-start text-black">• Teeth Whitening.</p>
                <p className="text-start text-black">
                  • Gum Disease Treatment.
                </p>
                <p className="text-start text-black">• Gum De-pigmentation.</p>
                <p className="text-start text-black">
                  • Aesthetic Gum Correction.
                </p>
                <p className="text-start text-black">• Dental Restorations.</p>
                <p className="text-start text-black">
                  • Wisdom Tooth Extraction.
                </p>
                <p className="text-start text-black">
                  • Routine Dental Checkup.
                </p>
              </div>
              <div className="company_profile-image w-[50%]">
                <img className="w-fit" src={denImg} alt="" />
              </div>
            </div>
            <p className="text-justify text-black">
              In addition to dental services, ECMC also offers a wide range of
              general medicine services to address our patients' overall health
              needs. Our team of medical professionals includes primary care
              physicians, specialists, and nurses who are dedicated to providing
              compassionate and comprehensive care.
            </p>
            <p className="text-justify text-black">
              Our general medicine services include everything from routine
              physicals and screenings to specialized treatments for chronic
              conditions such as diabetes, hypertension, and heart disease. We
              also offer a range of diagnostic tests and imaging services to
              help diagnose and treat a wide range of medical conditions.
            </p>
            <p className="text-justify text-black">
              Our general medicine services include everything from routine
              physicals and screenings to specialized treatments for chronic
              conditions such as diabetes, hypertension, and heart disease. We
              also offer a range of diagnostic tests and imaging services to
              help diagnose and treat a wide range of medical conditions.
            </p>
            <p className="text-justify text-black">
              At our practice, we pride ourselves on providing a welcoming and
              comfortable environment where patients can feel at ease. Extra
              Care Medical Center believes that building strong relationships
              with our patients is essential to providing effective care, and we
              strive to create a supportive and collaborative atmosphere in
              which our patients can feel empowered to take charge of their
              health. The department of general medicine specializes in:
            </p>
            <div className="company_profile_history_section-points flex flex-row items-center justify-center gap-[2rem] rounded-[5px] bg-white p-[2rem]">
              <div className="company_profile_history_section-points-text2 flex flex-col gap-[8px] gap-[1rem]">
                <p className="text-start text-black">
                  • Treatment and follow-up on all medical, surgical and general
                  disorders.
                </p>
                <p className="text-start text-black">
                  • Follow up on Diabetes Mellitus complications of adults,
                  Hypertension and skin problems.
                </p>
                <p className="text-start text-black">
                  • Diagnose and treat all diseases related to Blood,
                  Respiratory system, Endocrine system, Diabetes, Allergies,
                  Renal problems and Hypertension.
                </p>
                <p className="text-start text-black">
                  • Wellness and regular health checkups.
                </p>
                <p className="text-start text-black">
                  • Referral to the appropriate specialist based on medical
                  condition.
                </p>
                <p className="text-start text-black">
                  • Evaluation of any medical history.
                </p>
                <p className="text-start text-black">
                  • Management and treatment of minor injuries.
                </p>
                <p className="text-start text-black">
                  • Management of chronic health conditions.
                </p>
                <p className="text-start text-black">• Vaccination visits.</p>
                <p className="text-start text-black">
                  • General consultations for adults, children, and seniors.
                </p>
              </div>
              <div className="company_profile-image">
                <img src={genImg} alt="" />
              </div>
            </div>
            <p className="text-justify text-black">
              Whether you're in need of dental care or general medicine
              services, ECMC is here to help. Contact us today to schedule an
              appointment and experience the highest level of care available.
            </p>
          </div>
        </div>
      </div>

      <div
        className="company_profile_history_section-heading flex w-full flex-col items-center justify-center gap-[1rem] p-[4rem] text-center"
        style={{ backgroundColor: '#55C1DC' }}
      >
        {/* <Subheading className="subheading" text={''} /> */}
        <Heading className="heading animate-pulse" text={'Company History'} />
      </div>
      <div className="company_profile_history_section-content flex w-full flex-row gap-[2rem] bg-[#f6f6f6] p-[4rem]">
        <div className="company_profile_section-text-heading flex flex-col items-center justify-center gap-[2rem]">
          <div className="company_profile_history_section-text flex flex-col gap-[1.3rem] text-start">
            <p className="text-justify text-black">
              Extra Care Medical Center has been providing top-quality
              healthcare services to patients for over decades. Our practice was
              founded by a highly respected medical professional with a passion
              for providing comprehensive and personalized care to patients of
              all ages.
            </p>
            <p className="text-justify text-black">
              In the early years of our practice, we focused primarily on
              providing dental services, including routine cleanings, checkups,
              and restorative procedures. As our practice grew, we recognized
              the need to expand our services to address our patients' broader
              healthcare needs.
            </p>
            <p className="text-justify text-black">
              In the early years of our practice, we focused primarily on
              providing dental services, including routine cleanings, checkups,
              and restorative procedures. As our practice grew, we recognized
              the need to expand our services to address our patients' broader
              healthcare needs.
            </p>
            <p className="text-justify text-black">
              Throughout our history, we have remained committed to providing
              the highest level of care to our patients. We believe that
              building strong relationships with our patients is essential to
              providing effective care, and we strive to create a welcoming and
              supportive environment where patients can feel at ease.
            </p>
            <p className="text-justify text-black">
              We are proud to have been a part of our community for over
              decades, and we remain committed to serving our patients with the
              same dedication and passion that inspired our founder to initiate
              the practice. Whether you're in need of dental care, primary care,
              or specialized medical services, we're here to help. Contact us
              today to schedule an appointment and experience the highest level
              of care available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
