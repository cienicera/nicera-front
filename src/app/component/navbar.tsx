"use client";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { useRouter } from 'next/router';
import Link from "next/link";

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const scrollPos = window.scrollY || document.documentElement.scrollTop;
            setIsScrolled(scrollPos > 0 ? true : false);
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <nav className={`fixed top-0 mx-2 pt-4 pl-8 pb-4  flex justify-between items-center w-full px-8 z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'backdrop-blur-sm rounded-xl' : ''}`}>
            <Link href='/' > <Image src='/NICERA 4x.png' alt="Nicera" width={50} height={50} />  </Link>
            <div className='flex gap-4 px-4 text-white font-light '>
                <Link href="/cie"><button className='flex flex-grow  p-4 rounded-xl w-32 justify-center hover-effect hover:font-bold'>Compagnie</button></Link>
                <Link href="/creations"><button className='flex flex-grow  p-4 rounded-xl  w-32 justify-center hover-effect hover:font-bold'>Creations</button></Link>
                <Link href="/"><button className='flex flex-grow  p-4 rounded-xl  w-32 justify-center hover-effect hover:font-bold'>Actualite</button></Link>
            </div>
        </nav>
    );
}