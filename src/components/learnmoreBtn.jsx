import React from 'react';
import Link from './Link';
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function learnmoreBtn({ linkValue }) {
  return (
    <div>
      <Link to={linkValue}>
        <p className="homepage-section-two-learnmore flex animate-pulse flex-row hover:animate-bounce">
          Learn More
          <AiOutlineArrowRight className="ml-[2px] mt-[5px]" />
        </p>
      </Link>
    </div>
  );
}
