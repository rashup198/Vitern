import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TeamCard from './TeamCard';
import ujjwal from "../ujjwal.png"
import abhay from "../abhay.jpg"
import abhisekh from "../abhisekh.jpg"
import Utkarsh from "../uv.jpg"
import priyanshu from "../priyanshu.jpg"

const Team = () => {
  const isMobileOrTablet = window.innerWidth <= 1024;
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const dataTeam = [
    
    {
      id: 1,
      image: ujjwal,
      name: 'Ujjwal Singh',
      url: '/',
      designation: 'App Developer',
    },
    {
      id: 2,
      image: abhay,
      name: 'Abhay Negi',
      url: '/',
      designation: 'UI/UX Designer',
    },
    {
      id: 3,
      image: abhisekh,
      name: 'Abhisekh Jaishwal',
      url: '/',
      designation: 'Database Developer',
    },
    {
      id: 4,
      image: Utkarsh,
      name: 'Utkarsh Vyas',
      url: '/',
      designation: 'API Developer',
      
    },
    
    {
      id: 4,
      image: priyanshu,
      name: 'Priyanshu Pandey',
      url: 'https://www.linkedin.com/in/priyanshu-pandey-8889r/',
      designation: 'Full Stack Developer',

    }
    
  ];

  const data = dataTeam.map((item) => (
    <TeamCard
      key={item.id}
      image={item.image}
      name={item.name}
      url={item.url}
      designation={item.designation}
      exp={item.exp}
    />
  ));

  return (
    <>
    {isMobileOrTablet ? (  
    <div className='' >
      <Carousel responsive={responsive}>{data}</Carousel>
    </div>
    ) : ( 
    <div className='rounded-xl  flex flex-row justify-center items-center flex-wrap gap-[80px]'>
    {window.innerWidth > 768 && (
      <div className=' flex flex-row justify-center items-center flex-wrap gap-[130px]'>
        {data}
      </div>
    )}

    </div>
    )}
    </>
  );
};

export default Team;
