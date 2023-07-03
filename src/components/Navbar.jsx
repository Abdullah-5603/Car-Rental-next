"use client";
import Link from "next/link";

const Navbar = () => {
    //TODO: make active route
    // const currentPath = window.location.pathname;
    let currentPath ='/'
    // console.log(currentPath);

    return (
        <div className="fixed top-0 z-10 navbar bg-black bg-opacity-70 md:px-10">
            <div className="navbar-start inset-0">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm font-bold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box">
                        <li><Link className={`${currentPath == '/' && 'border-b-2'}`} href='/'>Home</Link></li>
                        <li><Link className={`${currentPath == '/about' && 'border-b-2'}`} href='/about'>About</Link></li>
                        <li><Link className={`${currentPath == '/contact' && 'border-b-2'}`} href='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <p className="font-semibold md:text-2xl text-xl text-white">Car Rental</p>
            </div>
            <div className="navbar-end hidden lg:flex text-white inset-0">
                <ul className="menu menu-horizontal px-1 font-bold">
                    <li><Link className={`${currentPath == '/' && 'border-b-2'}`} href='/'>Home</Link></li>
                    <li><Link className={`${currentPath == '/about' && 'border-b-2'}`} href='/about'>About</Link></li>
                    <li><Link className={`${currentPath == '/contact' && 'border-b-2'}`} href='/contact'>Contact</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;