import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';

export default function Navbar() {
    const linkForm = 'https://docs.google.com/forms/d/e/1FAIpQLSfBvmCt_nRdqUsCNF-ESYDOENr7DORFtuKUuNrBAAh2IX-7iQ/viewform';

    const [nav, setNav] = useState(false);

    const handleNav = function () {
        setNav(!nav);
    };

    return (
        <div className='z-40 fixed w-full'>
            <div className='fixed w-full h-28 p-4 bg-[#fffdf1] lg:h-36 lg:p-8 lg:px-14'>
                <div className='border-b-[0.5px] w-full h-full flex items-start justify-between pb-4 lg:items-end lg:pb-6'>
                    <div className='h-full flex flex-col lg:flex-row lg:items-end'>
                        <h1 className='pb-1 lg:p-0'>
                            <Link href='/'>照見歲月</Link>
                        </h1>
                        <h3 className='lg:pl-1'>
                            照顧者生命故事攝影展
                        </h3>
                    </div>
                    <IoMenuOutline 
                        className='lg:hidden hover:cursor-pointer hover:text-[#5c5c5c86]' 
                        onClick={handleNav} 
                        size={40} 
                    />
                    <ul className='hidden lg:flex'>
                        <li>
                            <Link href='/origin'>策展緣起</Link>
                        </li>
                        <li>
                            <Link href='/info'>參觀資訊</Link>
                        </li>
                        <li>
                            <Link href='/about'>關於我們</Link>
                        </li>
                        <li>
                            <a href={linkForm} target="_blank" rel="noreferrer">意見回饋</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* MOBILE MENU */}
            <div className={nav 
                    ? 'fixed w-full h-screen bg-[#aaa9a3]' 
                    : 'hidden ease-in-out duration-300'}>
                <div className='fixed w-full h-28 p-4'>
                    <div className='border-b-[0.5px] w-full h-full flex items-start justify-between pb-4'>
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
                        <li onClick={handleNav}>
                            <Link href='/origin'>策展緣起</Link>
                        </li>
                        <li onClick={handleNav}>
                            <Link href='/info'>參觀資訊</Link>
                        </li>
                        <li onClick={handleNav}>
                            <Link href='/about'>關於我們</Link>
                        </li>
                        <li onClick={handleNav}>
                            <a href={linkForm} target="_blank" rel="noreferrer">意見回饋</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    );
}