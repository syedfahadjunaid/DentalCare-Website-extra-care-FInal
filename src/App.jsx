import Header from './components/header/Header';
import HomePage from './components/home/HomePage';
import Route from './components/Route';
import Appointment from './pages/appointment/Appointment';
import Footer from './components/footer/Footer';
import DentalServices from './pages/services/DentalServices';
import AboutUsPage from './pages/aboutus/AboutusPage';
import ContactUs from './pages/contactUs/ContactUs';
import Aboutus from './pages/aboutus/about/Aboutus';

//Dental Service Pages
import CosmeticDentistry from './pages/services/ServicePage/cosmeticdentistry/CosmeticDentistry';
import CrownnBridges from './pages/services/ServicePage/crown&bridges/Crown&Bridges';
import RootCanalTreatment from './pages/services/ServicePage/rootcanaltreatments/RootCanalTreatment';
import Orthodontics from './pages/services/ServicePage/orthodontics/Orthodontics';
import TeethWhitening from './pages/services/ServicePage/teethwhitening/TeethWhitening';
import DentalImplants from './pages/services/ServicePage/dentalimplants/DentalImplants';
import GumTreatments from './pages/services/ServicePage/gumtreatments/GumTreatments';
import PediatricDentalCare from './pages/services/ServicePage/pediatricdentalcare/PediatricDentalCare';
import PreventiveDentistry from './pages/services/ServicePage/preventiveDentistry/PreventiveDentistry';
import GeneralDentistry from './pages/services/ServicePage/generalDentistry/GeneralDentistry';
import ModernCosmeticDentistry from './pages/services/ServicePage/modernCosmeticDentistry/ModernCosmeticDentistry';
import Endodontics from './pages/services/ServicePage/endodontics/Endodontics';
import Prosthodontics from './pages/services/ServicePage/prosthodontics/Prosthodontics';
import FixedandRemovableDentures from './pages/services/ServicePage/fixedandRemovableDentures/FixedandRemovableDentures';
import Invisalign from './pages/services/ServicePage/invisalign/Invisalign';
import MetalandCeramicBraces from './pages/services/ServicePage/metalandCeramicBraces/MetalandCeramicBraces';
import Veneers from './pages/services/ServicePage/veneers/Veneers';
import GumDepigmentation from './pages/services/ServicePage/gumDe_pigmentation/GumDe_pigmentation';
import AestheticGumCorrection from './pages/services/ServicePage/aestheticGumCorrection/AestheticGumCorrection';
import DentalRestorations from './pages/services/ServicePage/dentalRestorations/DentalRestorations';
import WisdomToothExtraction from './pages/services/ServicePage/wisdomToothExtraction/WisdomToothExtraction';
import RoutineDentalCheckup from './pages/services/ServicePage/routineDentalCheckup/RoutineDentalCheckup';

//General Medicine Page
import GM1 from './pages/services/GeneralMedicineServicesPage/GMService1/GM1';

//Company Profile
import CompanyProfile from './pages/company_profile/CompanyProfile';

import Map from './components/Map';
import GoToTop from './components/GoToTop';

import './App.css';
import GeneralHealthCareServices from './pages/services/GeneralHealthCareServices';
import ServicesPage from './pages/services/ServicesPage';
import { useEffect } from 'react';

import { useContext } from 'react';
import NavigationContext from './context/navigation';

import Careers from './pages/careers/Careers';

function App() {
  const { currentPath } = useContext(NavigationContext);

  useEffect(() => {
    window.scroll(0, 0);

    return () => {
      return null;
    };
  }, [currentPath]);

  return (
    <div className="App">
      <GoToTop />
      <Header />

      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/about">
        <AboutUsPage />
      </Route>
      <Route path="/about/aboutus">
        <Aboutus />
      </Route>
      <Route path="/careers">
        <Careers />
      </Route>
      <Route path="/services">
        <ServicesPage />
      </Route>
      <Route path="/services/dental">
        <DentalServices />
      </Route>
      <Route path="/services/generalmedicines">
        <GeneralHealthCareServices />
      </Route>
      <Route path="/contactus">
        <ContactUs />
      </Route>
      <Route path="/appointment">
        <Appointment />
      </Route>
      <Route path="/services/dental/cosmeticdentistry">
        <CosmeticDentistry />
      </Route>
      <Route path="/services/dental/crown&bridges">
        <CrownnBridges />
      </Route>
      <Route path="/services/dental/rootcanaltreatments">
        <RootCanalTreatment />
      </Route>
      <Route path="/services/dental/orthodontics">
        <Orthodontics />
      </Route>
      <Route path="/services/dental/teethwhitening">
        <TeethWhitening />
      </Route>
      <Route path="/services/dental/dentalimplants">
        <DentalImplants />
      </Route>
      <Route path="/services/dental/gumtreatments">
        <GumTreatments />
      </Route>
      <Route path="/services/dental/pediatricdentalcare">
        <PediatricDentalCare />
      </Route>
      <Route path="/services/dental/preventivedentistry">
        <PreventiveDentistry />
      </Route>
      <Route path="/services/dental/generaldentistry">
        <GeneralDentistry />
      </Route>
      <Route path="/services/dental/moderncosmeticdentistry">
        <ModernCosmeticDentistry />
      </Route>
      <Route path="/services/dental/endodontics">
        <Endodontics />
      </Route>
      <Route path="/services/dental/prosthodontics">
        <Prosthodontics />
      </Route>
      <Route path="/services/dental/fixedandremovabledentures">
        <FixedandRemovableDentures />
      </Route>
      <Route path="/services/dental/invisalign">
        <Invisalign />
      </Route>
      <Route path="/services/dental/metalandceramicbraces">
        <MetalandCeramicBraces />
      </Route>
      <Route path="/services/dental/veneers(hollywoodsmile)">
        <Veneers />
      </Route>
      <Route path="/services/dental/gumde-pigmentation">
        <GumDepigmentation />
      </Route>
      <Route path="/services/dental/aestheticgumcorrection">
        <AestheticGumCorrection />
      </Route>
      <Route path="/services/dental/dentalrestorations">
        <DentalRestorations />
      </Route>
      <Route path="/services/dental/wisdomtoothextraction">
        <WisdomToothExtraction />
      </Route>
      <Route path="/services/dental/routinedentalcheckup">
        <RoutineDentalCheckup />
      </Route>

      <Route path="/location">
        <Map />
      </Route>

      <Route path="/services/generalmedicines/generalmedicine1">
        <GM1 />
      </Route>

      <Route path="/companyprofile">
        <CompanyProfile />
      </Route>

      <Footer />
    </div>
  );
}

export default App;
