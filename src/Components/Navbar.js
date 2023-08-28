import React from 'react'
import "../index.css";
import logo from "./logo.png"
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react'
const Navbar = () => {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

    let Links = [
        {name: "Home", link: "/"},
        {name: "About us", link: "/about"},
        {name: "Contact", link: "/contact"},
    ];

    let [open,setOpen]=useState(false);

  return (
    <div>
        
        <div className=''>
            <div className='headed  w-[82%]  items-center m-5 pl-[7px] pr-6 shadow-2xl md:w-[95%] h-[80px] rounded-[13px] fixed top-5 left-5 z-[1000]  md:flex bg-[#013F6A] py-1 md:px-5 px-4 flex justify-between'>
                <div className='cursor-pointer flex items-center'>
                    <img src={logo} className='h-[170px] w-[170px]'></img>
                </div>

                <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                <ion-icon name={open ? 'close':'menu'}></ion-icon>
                </div>

               

            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#013F6A    ] gap-10 -mt-[10px] justify-center items-center md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
                {
                Links.map((link)=>(
                    <li key={link.name} className='a md:ml-8 md:my-0 text-xl'>
                    <a href={link.link} className='text-white duration-500 txt'>{link.name}</a>
                    </li>   
                ))                
                }

                 <li>
            <div className='flex align-baseline items-baseline gap-8'>
          {isAuthenticated && (
                <div className='user flex  gap-3'>
                    
                        <img src={user.picture} className='h-[35px] rounded-[20%] mt-[7px]' alt={user.name} />
                        
                        <p className='user_detail text-[#fff131] text-2xl mt-[10px]'>{user.name}</p>  
                </div>
          )}

            {isAuthenticated ? (
              <button
                className='btnLogin  border-white p-1 pl-2 pr-2 rounded-md  text-xl hover:bg-yellow-300 hover:text-[#6523f4] transition-all duration-200 border-2 text-white '
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            ) : (
              <button
                className='btnLogin p-1 pl-2 pr-2 rounded-md text-xl text-white hover:bg-yellow-300 hover:text-[#6523f4] transition-all duration-200 border-2 border-[#ffffff]'
                onClick={() => loginWithRedirect()}
              >
                Log In
              </button>
            )}
              </div>
          
              </li>

            </ul>

            </div>
       
        </div>
      
    </div>
  )
}

export default Navbar
