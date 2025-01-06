import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IoMdLogOut } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { AiOutlinePartition } from "react-icons/ai";
import { TbPasswordUser } from "react-icons/tb";
const Menu = ({ hide }) => {
    const email = localStorage.getItem('email')
    const [img, setImg] = useState(null);
    const [allResult, setAllResult] = useState(null);

    const handlePicture = async (e) => {
        const image = e.target.files[0];
        setImg(image)
    };


    const handleLogout = async () => {
       localStorage.removeItem('email')
       alert('Logout')
       setTimeout(() => {
        window.location.href='/login'
       }, 500);
    };

    return (
        <div
            className=''
        //     className={`transform transition-transform duration-300 ease-in-out z-50 
        // ${hide ? 'translate-x-0 ' : '-translate-x-full'} 
        // md:translate-x-0 shadow-md  h-[92vh] w-56 shadow-black px-4 bg-gray-100`}
        >

            <div className="pt-16">
                <div className="w-28 h-28 mx-auto transition-transform hover:scale-105 hover: relative rounded-full shadow-md shadow-[#76ABAE] border-2 border-[#76ABAE] overflow-hidden ">
                    <img
                        src={img?URL.createObjectURL(img):''}
                        alt="Upload Preview"
                        className="w-full h-full object-cover"
                    />
                    <form>
                        <label>
                            <div className={` ${(img) ? 'hidden' : 'block'} absolute text-center bottom-0 text-xs bg-white pb-3 pt-1 w-full bg-opacity-80 cursor-pointer`}>
                                Upload Photo
                            </div>
                            <input
                                type="file"
                                className="hidden"
                                name="image"
                                accept="image/*"
                                onChange={handlePicture}
                            />
                        </label>
                    </form>
                </div>
            </div>
            <div className='mt-5'>
                <p className='text-white text-center lavishly '>{email}</p>
            </div>

            <div className="mt-8 flex flex-col gap-4">
                <Link
                   onClick={()=>{
                    window.location.href='/dashboard'
                   }}
                    className="text-[#76ABAE] text-lg px-3 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-3 hover:text-blue-500 transition-all"
                >
                    <ImProfile /> Dashboard

                </Link>
                <Link
                    to="/dashboard/todo-page"
                    className="text-[#76ABAE] text-lg px-3 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-3 hover:text-blue-500 transition-all"
                >
                    <ImProfile /> Create Todo

                </Link>

                <Link onClick={handleLogout} className="flex items-center gap-3 text-red-500 text-lg px-3 py-2 rounded-lg transition-all absolute bottom-5 border-t w-full">
                    <IoMdLogOut size={20} />
                    Logout
                </Link>
            </div>

        </div>
    );
};

export default Menu;