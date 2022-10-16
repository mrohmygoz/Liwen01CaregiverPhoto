import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';

export default function Navbar() {
    const [nav, setNav] = useState(false);

    const handleNav = function () {
        setNav(!nav);
    };

    return (
        <div className='z-40 fixed w-full'>
            <div className='fixed w-full h-28 p-4 bg-[#fffdf1] md:h-40 md:p-8 md:px-14'>
                <div className='border-b-[0.5px] w-full h-full flex items-start md:items-end justify-between pb-4 md:pb-6'>
                    <div className='h-full flex flex-col md:flex-row md:items-end'>
                        <h1 className='pb-1 md:p-0'>
                            <Link href='/'>照見歲月</Link>
                        </h1>
                        <h3 className='md:pl-1'>
                            照顧者生命故事攝影展
                        </h3>
                    </div>
                    <IoMenuOutline 
                        className='md:hidden hover:cursor-pointer hover:text-[#5c5c5c86]' 
                        onClick={handleNav} 
                        size={40} 
                    />
                    <ul className='hidden md:flex'>
                        <li>
                            策展緣起
                        </li>
                        <li>
                            參觀資訊
                        </li>
                        <li>
                            關於我們
                        </li>
                    </ul>
                </div>
            </div>

            {/* MOBILE MENU */}
            <div className={nav 
                    ? 'fixed w-full h-screen bg-[#aaa9a3]' 
                    : 'hidden ease-in-out duration-300'}>
                <div className='fixed w-full h-28 p-4'>
                    <div className='border-b-[0.5px] w-full flex items-start justify-between pb-4'>
                        <div className='h-full flex flex-col'>
                            <h1 className='pb-1'>
                                照見歲月
                            </h1>
                            <h3>
                                照顧者生命故事攝影展
                            </h3>
                        </div>
                        <IoCloseOutline onClick={handleNav} size={40} className='hover:cursor-pointer hover:text-[#fffdf1]' />
                    </div>
                </div>
                <div className='w-full h-screen flex flex-col justify-center items-center'>
                    <ul>
                        <li>
                            策展緣起
                        </li>
                        <li>
                            參觀資訊
                        </li>
                        <li>
                            關於我們
                        </li>
                        <li onClick={handleNav}>
                            <Link href='/'>更多故事</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    );
}