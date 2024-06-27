import React from 'react';

export default function Map() {
  return (
    <div className="section_margin">
      <iframe
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.9522009891643!2d54.37088721436326!3d24.48711296615109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e664397567d19%3A0xa11caccf27b1bf9c!2sNational%20Bank%20Of%20Oman%2C%20Abu%20Dhabi%20Branch!5e0!3m2!1sen!2sin!4v1680501679198!5m2!1sen!2sin"
        className="h-[450px] w-full rounded-[1rem] border-2 border-solid border-inherit shadow-lg"
        loading="lazy"
      ></iframe>
    </div>
  );
}
