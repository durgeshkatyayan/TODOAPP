import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
const Header = ({onToggle}) => {

    const email = localStorage.getItem('email')
   
    return (
        <header 
        className='bg-[#222831]'
        // gradient-to-tl from-black via-stone-950 to-zinc-800
        >
            <div className='min-h-16  px-5 flex items-center gap-16'>
              
                <div className='md:hidden block' onClick={onToggle} >
                    <FaBars className='text-2xl' />
                </div>
                <div className='w-full flex items-center justify-around'>
                    <div className='flex items-center gap-2 text-white'>
                        <h2 className=" text-xl font-semibold">Email :</h2>
                        <p className="">{email}</p>
                    </div>

                    <div className='sm:flex items-center gap-2 hidden text-white'>
                        {/* <h2 className=" text-xl font-semibold">IP Address :</h2> */}
                        {/* <p className="">{normalizedIp && normalizedIp}</p> */}
                    </div>
                </div>

            </div>
        </header>
    ) 
}

export default Header