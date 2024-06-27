import React from 'react';
import './news.css';
import Subheading from '../../components/Subheading';
import Heading from '../../components/heading';
import placeholder_square_image from '../../assets/placeholder1.jpg';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

export default function News() {
  const newsData = [
    {
      image: placeholder_square_image,
      title: 'Example Title',
      information:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa incidunt neque excepturi possimus illum quae? Unde nemo quam eligendi laboriosam nisi placeat rerum, animi iure dolores praesentium. Atque, dolore a!',
    },
    {
      image: placeholder_square_image,
      title: 'Example Title',
      information:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa incidunt neque excepturi possimus illum quae? Unde nemo quam eligendi laboriosam nisi placeat rerum, animi iure dolores praesentium. Atque, dolore a!',
    },
    {
      image: placeholder_square_image,
      title: 'Example Title',
      information:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa incidunt neque excepturi possimus illum quae? Unde nemo quam eligendi laboriosam nisi placeat rerum, animi iure dolores praesentium. Atque, dolore a!',
    },
    {
      image: placeholder_square_image,
      title: 'Example Title',
      information:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa incidunt neque excepturi possimus illum quae? Unde nemo quam eligendi laboriosam nisi placeat rerum, animi iure dolores praesentium. Atque, dolore a!',
    },
    {
      image: placeholder_square_image,
      title: 'Example Title',
      information:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa incidunt neque excepturi possimus illum quae? Unde nemo quam eligendi laboriosam nisi placeat rerum, animi iure dolores praesentium. Atque, dolore a!',
    },
    {
      image: placeholder_square_image,
      title: 'Example Title',
      information:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa incidunt neque excepturi possimus illum quae? Unde nemo quam eligendi laboriosam nisi placeat rerum, animi iure dolores praesentium. Atque, dolore a!',
    },
  ];

  const renderedNews = newsData.map((news, index) => {
    return (
      <div
        key={`${news.title}_${index}`}
        className="news_card flex h-full w-full flex-col items-center justify-center gap-[14px] border-2 border-solid border-inherit bg-white bg-gray-200 p-[2rem]"
      >
        <div className="news_card-image">
          <img
            className="border-2px h-full w-full border-solid border-inherit shadow-lg"
            src={news.image}
            alt={`${news.title}_img`}
          />
        </div>
        <div className="news_card-content flex flex-col items-center text-center">
          <Subheading
            className="subheading news_card-title text-justify"
            text={news.title}
          />
          <p className="news_card-information text-center text-gray-500">
            {news.information}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className="">
      <div className="news_section-heading">
        <Subheading
          className="subheading text-center"
          text={'Better information, better health'}
        />
        <Heading className="heading text-center" text="News" />
      </div>

      <div className="news_card-content p-[4rem]">
        <AwesomeSlider
          animation="cubeAnimation"
          className="h-full w-full items-center justify-center"
        >
          {renderedNews}
        </AwesomeSlider>
      </div>
    </div>
  );
}
