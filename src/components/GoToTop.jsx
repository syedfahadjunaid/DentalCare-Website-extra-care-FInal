import React from 'react';
import TapImg from '../assets/top.png';

export default function GoToTop() {
  const handleClick = () => {
    window.scroll(0, 0);
  };

  return (
    <div className="gototop ">
      <img
        onClick={handleClick}
        className=" fixed bottom-[2rem] right-[2rem] z-10 w-[60px] animate-pulse cursor-pointer hover:animate-bounce"
        src={TapImg}
        alt="Go To Top"
        style={{ scrollBehavior: 'smooth' }}
      />
    </div>
  );
}
