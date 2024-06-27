import './dentalServices.css';
import Heading from '../../components/heading';
import Subheading from '../../components/Subheading';
// import placeholder_square from '../../assets/placeholder1.jpg';
import LearnmoreBtn from '../../components/learnmoreBtn';

//Images
import cosmetic_dentistry from '../../assets/cosmetic_dentistry.jpg';
import crownnbridges from '../../assets/dental-crown-1070x981-1920w.webp';
import rootcanaltreatment from '../../assets/rootcanaltreatment.jpg';
import orthodontics from '../../assets/orthodontics.jpg';
import teeth_whitening from '../../assets/teeth_whitening.jpg';
import dental_implant from '../../assets/dental-implants.jpg';
import gum_treatments from '../../assets/gum_treatments.jpg';
import pediatric_dental_treatments from '../../assets/little-beautiful-girl-dentist-smiling.jpg';

import services_back_image from '../../assets/dentist-dental-office-dentistry.jpg';

export default function DentalServices() {
  // For Services Section
  const services = [
    {
      name: 'Cosmetic Dentistry',
      img: cosmetic_dentistry,
      text: `We understand that a beautiful smile is not just about healthy teeth and gums, but also about confidence and self-esteem. That's why we offer a range of cosmetic dentistry services designed to help you achieve the smile you've always wanted.`,
    },
    {
      name: 'Crown & Bridges',
      img: crownnbridges,
      text: `If you have missing, damaged, or decayed teeth, our crown and bridge treatments can help restore your smile and improve your oral health. Crowns and bridges are fixed prosthetic devices that are cemented onto your existing teeth or implants.`,
    },
    {
      name: 'Root Canal Treatments',
      img: rootcanaltreatment,
      text: `If you're experiencing severe tooth pain, sensitivity, or swelling, you may have an infected or inflamed pulp in your tooth. Our root canal treatment can help alleviate your pain and save your natural tooth from extraction. Root canal treatment involves removing the infected or inflamed pulp from your tooth and cleaning and sealing the root canals.`,
    },
    {
      name: 'Orthodontics',
      img: orthodontics,
      text: `We understand that having misaligned teeth or a bite issue can affect your confidence and oral health. That's why we offer a range of orthodontic treatments to help you achieve a straighter, healthier, and more beautiful smile.`,
    },
    {
      name: 'Teeth Whitening',
      img: teeth_whitening,
      text: `If you're looking to brighten your smile and boost your confidence, our professional teeth whitening treatments can help you achieve a whiter and brighter smile. Teeth whitening are a safe and effective way to remove stains and discoloration caused by aging, smoking, drinking coffee, tea, or wine, and other factors.`,
    },
    {
      name: 'Dental Implants',
      img: dental_implant,
      text: `If you're missing one or more teeth, dental implants can help restore your smile's appearance, function, and health. Our dental implant service provides a permanent and natural-looking solution for replacing missing teeth. Dental implants are small, titanium posts that are surgically inserted into your jawbone to serve as artificial tooth roots.`,
    },
    {
      name: 'Gum Treatments',
      img: gum_treatments,
      text: `Gum disease is a common dental problem that affects many people. It is caused by a buildup of plaque and bacteria on your teeth and gums, which can lead to inflammation, bleeding, and ultimately, gum recession and tooth loss. Our gum treatment service offers effective solutions for treating gum disease and restoring your oral health.`,
    },
    {
      name: 'Pediatric Dental Care',
      img: pediatric_dental_treatments,
      text: `We believe that every child deserves a healthy and beautiful smile, and our team is committed to providing the highest quality dental care in a friendly and welcoming environment. Our pediatric dentistry care service is designed to meet the unique dental needs of children from infancy through adolescence.`,
    },
    {
      name: 'Preventive Dentistry',
      img: pediatric_dental_treatments,
      text: `We believe that every child deserves a healthy and beautiful smile, and our team is committed to providing the highest quality dental care in a friendly and welcoming environment. Our pediatric dentistry care service is designed to meet the unique dental needs of children from infancy through adolescence.`,
    },
    {
      name: 'General Dentistry',
      img: pediatric_dental_treatments,
      text: `We believe that every child deserves a healthy and beautiful smile, and our team is committed to providing the highest quality dental care in a friendly and welcoming environment. Our pediatric dentistry care service is designed to meet the unique dental needs of children from infancy through adolescence.`,
    },
    {
      name: 'Modern Cosmetic Dentistry',
      img: pediatric_dental_treatments,
      text: `We believe that every child deserves a healthy and beautiful smile, and our team is committed to providing the highest quality dental care in a friendly and welcoming environment. Our pediatric dentistry care service is designed to meet the unique dental needs of children from infancy through adolescence.`,
    },
    {
      name: 'Endodontics',
      img: pediatric_dental_treatments,
      text: `We believe that every child deserves a healthy and beautiful smile, and our team is committed to providing the highest quality dental care in a friendly and welcoming environment. Our pediatric dentistry care service is designed to meet the unique dental needs of children from infancy through adolescence.`,
    },
    {
      name: 'Prosthodontics',
      img: pediatric_dental_treatments,
      text: `We believe that every child deserves a healthy and beautiful smile, and our team is committed to providing the highest quality dental care in a friendly and welcoming environment. Our pediatric dentistry care service is designed to meet the unique dental needs of children from infancy through adolescence.`,
    },
    {
      name: 'Fixed and Removable Dentures',
      img: pediatric_dental_treatments,
      text: `We believe that every child deserves a healthy and beautiful smile, and our team is committed to providing the highest quality dental care in a friendly and welcoming environment. Our pediatric dentistry care service is designed to meet the unique dental needs of children from infancy through adolescence.`,
    },
    {
      name: 'Invisalign',
      img: pediatric_dental_treatments,
      text: `We believe that every child deserves a healthy and beautiful smile, and our team is committed to providing the highest quality dental care in a friendly and welcoming environment. Our pediatric dentistry care service is designed to meet the unique dental needs of children from infancy through adolescence.`,
    },
    {
      name: 'Metal and Ceramic Braces',
      img: pediatric_dental_treatments,
      text: `We believe that every child deserves a healthy and beautiful smile, and our team is committed to providing the highest quality dental care in a friendly and welcoming environment. Our pediatric dentistry care service is designed to meet the unique dental needs of children from infancy through adolescence.`,
    },
    {
      name: 'Veneers (Hollywood smile)',
      img: pediatric_dental_treatments,
      text: `We believe that every child deserves a healthy and beautiful smile, and our team is committed to providing the highest quality dental care in a friendly and welcoming environment. Our pediatric dentistry care service is designed to meet the unique dental needs of children from infancy through adolescence.`,
    },
    {
      name: 'Gum De-pigmentation',
      img: pediatric_dental_treatments,
      text: `We believe that every child deserves a healthy and beautiful smile, and our team is committed to providing the highest quality dental care in a friendly and welcoming environment. Our pediatric dentistry care service is designed to meet the unique dental needs of children from infancy through adolescence.`,
    },
    {
      name: 'Aesthetic Gum Correction',
      img: pediatric_dental_treatments,
      text: `We believe that every child deserves a healthy and beautiful smile, and our team is committed to providing the highest quality dental care in a friendly and welcoming environment. Our pediatric dentistry care service is designed to meet the unique dental needs of children from infancy through adolescence.`,
    },
    {
      name: 'Dental Restorations',
      img: pediatric_dental_treatments,
      text: `We believe that every child deserves a healthy and beautiful smile, and our team is committed to providing the highest quality dental care in a friendly and welcoming environment. Our pediatric dentistry care service is designed to meet the unique dental needs of children from infancy through adolescence.`,
    },
    {
      name: 'Wisdom Tooth Extraction',
      img: pediatric_dental_treatments,
      text: `We believe that every child deserves a healthy and beautiful smile, and our team is committed to providing the highest quality dental care in a friendly and welcoming environment. Our pediatric dentistry care service is designed to meet the unique dental needs of children from infancy through adolescence.`,
    },
    {
      name: 'Routine Dental Checkup',
      img: pediatric_dental_treatments,
      text: `We believe that every child deserves a healthy and beautiful smile, and our team is committed to providing the highest quality dental care in a friendly and welcoming environment. Our pediatric dentistry care service is designed to meet the unique dental needs of children from infancy through adolescence.`,
    },
  ];

  // const handleLearnMoreBtn = (linkValue, pageChangeBooleanValue) => {

  // };

  const renderedServices = services.map((service, index) => {
    return (
      <div
        key={`${service.name}_${index}`}
        className="services-card flex flex-col items-center gap-[8px] rounded-[1rem] border-2 border-solid border-inherit bg-gray-200 p-[2rem] shadow-md transition hover:shadow-2xl"
      >
        <div className="services-card-image h-[250px] w-full border-2 border-solid border-inherit">
          <img className="h-full w-fit" src={service.img} alt="service img" />
        </div>
        <Subheading className="text-gray-600" text={service.name} />
        <p className="font-md dental-card-text text-justify text-black">
          {service.text}
        </p>
        <div
          className="w-fit items-center"
          // onClick={() =>
          //   handleLearnMoreBtn(
          //     `/services/${service.name.split(' ').join('')}`,
          //     true
          //   )
          // }
        >
          <LearnmoreBtn
            className="w-full"
            linkValue={`/services/dental/${service.name
              .split(' ')
              .join('')
              .toLowerCase()}`}
          />
        </div>
      </div>
    );
  });

  return (
    <div className="services_section section_margin">
      {/* Our Services Section */}
      <div className="services_section-image">
        <img
          className="absolute h-screen w-full"
          src={services_back_image}
          alt="Services_back"
        />
      </div>
      <div className="homepage_section-three w-full gap-[1rem] p-[4rem]">
        <div className="services_section-content relative flex flex-col items-center justify-center gap-[1rem] text-center">
          <Subheading
            className="subheading"
            text={'Make your smile brighter with our'}
          />
          <Heading className="heading" text={'Dental Services'} />
          <p className="homepage_section-three-p w-[75%] text-center text-lg text-gray-600">
            Our dentistry services include everything you need to keep your
            teeth and gums healthy. We offer regular checkups, cleanings,
            fillings, and other treatments to help prevent and treat dental
            problems. Our team of skilled professionals provides personalized
            care to meet your individual needs.
          </p>
          <div className="homepage_section-services-cards gap-[2rem]">
            {renderedServices}
          </div>
        </div>
      </div>
      {/* <ServicesSideBarPage /> */}
    </div>
  );
}
