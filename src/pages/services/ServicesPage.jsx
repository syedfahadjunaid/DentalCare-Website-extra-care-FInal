import React from 'react';
// import Services from './Services';
import GetInTouch from '../contactUs/GetInTouch';
import ServicesType from './ServicesType';

export default function ServicesPage() {
  return (
    <div className="section_margin services_section">
      <div className="servicestype-section">
        <ServicesType />
      </div>
      <div className="p-[4rem]">
        <div className="getintouch_section ">
          <GetInTouch />
        </div>
      </div>
      {/* <div className="services_section">
        <Services />
      </div>
      <div className="p-[4rem]">
        <div className="getintouch_section ">
          <GetInTouch />
        </div>
      </div> */}
    </div>
  );
}
