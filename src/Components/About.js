import React from 'react';
import aboutimg from './aboutImg.png';
import Card from './Card';

const About = (porps) => {
  return (
    <div>
      <div className=''>
        <img
          src={aboutimg}
          className='h-[70vh]  w-full brightness-[0.30]'
          alt="About"
        />
        <h1 className='z-[1000] text-[100px] font-bold brightness-[0.7] absolute top-[150px] left-[35%]  text-white'>About Us</h1>
      </div>
        <h1 className=' text-center text-[60px] font-bold underline underline-offset-8 bg-gray-300 pb-[100px]' >Meet Our Team</h1>
      
      <div className='cardContainer w-[100%] h-[70vh] bg-gray-300'>
        <Card></Card>
      </div>
    </div>
  );
}

export default About;
