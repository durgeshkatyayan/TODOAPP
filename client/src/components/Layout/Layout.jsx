import React, { useState } from 'react';
import Header from '../Header';
import Menu from '../Menu';


const Layout = (props) => {
    const [hide, setHide] = useState(false);

    const onToggle = async () => {
        setHide((prev) => !prev);
    };

    return (
        <div>
            <div>
                <Header className='' onToggle={onToggle} />
            </div>
            <main className='h-[92vh] bg-white flex gap-1 relative'>
                <div
                    className={`transform transition-transform duration-300 ease-in-out z-50 
                    ${hide ? 'translate-x-0' : '-translate-x-full'} 
                    md:translate-x-0 shadow-md h-[92vh] w-56 shadow-black  bg-[#222831]  absolute md:relative`}
                >
                    <Menu hide={hide} />
                </div>
                <div className='flex-1 w-full absolute sm:relative'>
                    {props.children}
                </div>
            </main>
        </div>
    );
};

export default Layout;