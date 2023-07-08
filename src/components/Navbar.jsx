"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [show, setShow] = useState()
    //TODO: make active route
    // const currentPath = window.location.pathname;
    let currentPath = '/'
    // console.log(currentPath);
    const handleDropdown = () => {

    }

    return (
        <nav className="fixed top-0 z-10 bg-black bg-opacity-70 md:px-10 py-3 md:py-5 w-full flex justify-between">
            <div className="flex items-center">
                <div className="relative">
                    <div className="md:hidden">
                    {
                        show ? <p onClick={() => setShow(!show)} className="cursor-pointer text-xl text-white mx-3">x</p> : <FaBars className="text-white mx-3" onClick={() => setShow(!show)} />
                    }
                    </div>
                    <div>
                        {
                            show && (
                                <ul className="absolute mt-3 z-[1] p-2 shadow-2xl space-y-2 bg-white rounded-md text-black">
                                    <li><Link className={`text-xs ${currentPath == '/' && 'border-b-2 border-black'}`} href='/'>Home</Link></li>
                                    <li><Link className={`text-xs ${currentPath == '/about' && 'border-b-2 border-black'}`} href='/about'>About</Link></li>
                                    <li><Link className={`text-xs ${currentPath == '/contact' && 'border-b-2 border-black'}`} href='/contact'>Contact</Link></li>
                                </ul>
                            )
                        }
                    </div>
                </div>
                <p className="font-semibold md:text-2xl text-xl text-white">Rent and Run</p>
            </div>
            <div className="hidden lg:flex text-white inset-0">
                <ul className="px-1 flex space-x-8">
                    <li><Link className={`text-sm ${currentPath == '/' && 'border-b-2'}`} href='/'>Home</Link></li>
                    <li><Link className={`text-sm ${currentPath == '/about' && 'border-b-2'}`} href='/about'>About</Link></li>
                    <li><Link className={`text-sm ${currentPath == '/contact' && 'border-b-2'}`} href='/contact'>Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;