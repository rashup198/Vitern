import React from 'react';
import { useState } from 'react';
import { BiSolidRightArrowCircle, BiSolidLeftArrowCircle } from 'react-icons/bi';
import { BsGithub, BsInstagram } from 'react-icons/bs';

const Card = (props) => {
    const reviews=[
        {
            id:1,
            name:'Priyanshu Kumar Pandey',
            job:"Web Developer",
            image:"../priyanshu.jpg",
            discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            social: "https://github.com/rashup198"
        },
        {
            id:2,
            name:'Abhay Negi',
            job:"UI/UX Designer",
            image:"../abhay.jpg",
            discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            social:"https://github.com/rashup198"
        },  
        {   
            id:3,
            name:'Ujjwal Singh',
            job:"App Developer",
            image:"../ujjwal.jpg",
            discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            social:"https://github.com/rashup198"
        },
        {
            id:4,
            name:'Utkarsh Vyas',
            job:"App Developer",
            image:"../uv.jpg",
            discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",  
            social:"https://github.com/rashup198" 
        },  
    
        {   
            id:5,
            name:'Abhisekh Jaishwal',
            job:"Part time Intern",
            image:"../abhisekh.jpg",
            discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            social:"https://github.com/rashup198"
        }
    ]
    

  const [index, setIndex] = useState(0);

  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightShiftHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <div className='flex flex-col md:flex-row justify-between mx-4 md:mx-8 lg:mx-20 bg-white rounded-lg p-4 md:p-8'>
      <button onClick={leftShiftHandler} className=' text-black text-[50px] m-[10px]'>
        <BiSolidLeftArrowCircle />
      </button>
      <div className='mb-4 md:mb-0'>
        <img
          src={reviews[index].image}
          alt={reviews[index].name}
          className='h-48 md:h-72 lg:h-96 rounded-md shadow-2xl mx-auto md:mx-0'
        />
      </div>
      <div className='text-center md:text-left md:flex-grow md:ml-4 lg:ml-8'>
        <p className='text-black text-xl md:text-2xl font-bold mb-2'>{reviews[index].name}</p>
        <p className='text-black text-lg md:text-xl mb-2'>{reviews[index].job}</p>
        <p className='mb-4'>{reviews[index].discription}</p>
        <div className='flex gap-5'>
          <a href={reviews[index].social} target='_blank' rel='noopener noreferrer'>
            <BsGithub className='text-black text-xl' />
          </a>
          <a href={reviews[index].social} target='_blank' rel='noopener noreferrer'>
            <BsInstagram className='text-black text-xl' />
          </a>
        </div>
      </div>
      <button onClick={rightShiftHandler} className='text-black text-[50px] m-[10px]'>
        <BiSolidRightArrowCircle />
      </button>
    </div>
  );
};

export default Card;






