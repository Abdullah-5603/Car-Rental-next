"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowDown, FaArrowRight, FaBars } from 'react-icons/fa';
import { Dropdown } from 'antd';
import { dailyRentUrl, monthlyRentUrl, rentAVehicleUrl } from "./Dropdown";
import {usePathname, useRouter } from "next/navigation";
import NavLink from "./NavLink";
// import { getAllCars } from "@/services/car.service";

// const carData = getAllCars() 

const dailyRent = dailyRentUrl();
const monthlyRent = monthlyRentUrl();
const rentAVehicle = rentAVehicleUrl();

const Navbar = () => {
    const [show, setShow] = useState(false);
    const [showDailyDropdown, setShowDailyDropdown] = useState(false);
    const [showMonthlyDropdown, setShowMonthlyDropdown] = useState(false);
    const [showRentAVehicleDropdown, setShowRentAVehicleDropdown] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0);
    const [currentPath, setCurrentPath] = useState('')
    // const path = useRouter();
    const path = usePathname()
    console.log(path)

    //TODO: set path dynamically
    // let currentPath = '/';

    useEffect(() => {
        setCurrentPath(window.location.pathname)
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // console.log(scrollPosition);

    return (
        <>
            <div className="bg-[#232628] text-white p-5 md:p-10 flex justify-between md:justify-around items-center">
                <img className="w-1/3" src='https://i.ibb.co/9Wyz1g0/2-removebg-preview-1.png' alt="" />
                <p className="md:text-4xl hidden md:block">Rent and Run</p>
                <div className="relative">
                    <div className="md:hidden">
                        {
                            show ? <p onClick={() => setShow(!show)} className="cursor-pointer text-xl text-white mx-3">x</p> : <FaBars className="text-white mx-3" onClick={() => setShow(!show)} />
                        }
                    </div>
                </div>
            </div>
            <div>
                {
                    show && (
                        <ul className="text-base font-semibold bg-white text-black">
                            <li className="p-4 border hover:bg-gray-700 hover:text-white"><Link href='/'>Home</Link></li>
                            <li className="p-4 border hover:bg-gray-700 hover:text-white flex justify-between">
                                <Link className="w-full" href="/daily-rent">Daily Rent</Link>{showDailyDropdown ? <FaArrowDown className="cursor-pointer" onClick={() => setShowDailyDropdown(!showDailyDropdown)} /> : <FaArrowRight onClick={() => setShowDailyDropdown(!showDailyDropdown)} />}
                            </li>
                            {
                                showDailyDropdown && <ul>
                                    {
                                        dailyRent.map(item => <li key={item.key} className="py-2 px-6 hover:bg-gray-700 hover:text-white"><Link className="w-full" href={item.url}>{item.label}</Link></li>)
                                    }
                                </ul>
                            }
                            <li className="p-4 border hover:bg-gray-700 hover:text-white flex justify-between">
                                <Link className="w-full" href="/monthly-rent">Monthly Rent</Link>{showMonthlyDropdown ? <FaArrowDown className="cursor-pointer" onClick={() => setShowMonthlyDropdown(!showMonthlyDropdown)} /> : <FaArrowRight onClick={() => setShowMonthlyDropdown(!showMonthlyDropdown)} />}
                            </li>
                            {
                                showMonthlyDropdown && <ul>
                                    {
                                        monthlyRent.map(item => <li key={item.key} className="py-2 px-6 hover:bg-gray-700 hover:text-white"><Link className="w-full" href={item.url}>{item.label}</Link></li>)
                                    }
                                </ul>
                            }
                            <li className="p-4 border hover:bg-gray-700 hover:text-white flex justify-between">
                                <Link className="w-full" href="/monthly-rent">Rent A Vehicle</Link>{showRentAVehicleDropdown ? <FaArrowDown className="cursor-pointer" onClick={() => setShowRentAVehicleDropdown(!showRentAVehicleDropdown)} /> : <FaArrowRight onClick={() => setShowRentAVehicleDropdown(!showRentAVehicleDropdown)} />}
                            </li>
                            {
                                showRentAVehicleDropdown && <ul>
                                    {
                                        rentAVehicle.map(item => <li key={item.key} className="py-2 px-6 hover:bg-gray-700 hover:text-white"><Link className="w-full" href={item.url}>{item.label}</Link></li>)
                                    }
                                </ul>
                            }
                            <li className="p-4 border hover:bg-gray-700 hover:text-white"><Link href='/about'>About</Link></li>
                            <li className="p-4 border hover:bg-gray-700 hover:text-white"><Link href='/contact'>Contact</Link></li>
                        </ul>
                    )
                }
            </div>
            <nav className={`z-10 hidden bg-white px-10 w-full md:flex justify-center ${scrollPosition > 250 && 'fixed top-0'}`}>
                <div className="hidden lg:flex text-black">
                    <ul className="flex items-center">
                        <li><NavLink pathname={path} href='/' name='Home' /></li>
                        <li><Dropdown overlay={
                            <ul className="ant-dropdown-menu">
                                {dailyRent.map((item) => (
                                    <li className="text-base font-semibold p-3 hover:bg-gray-700" key={item.key}>
                                        <Link className="hover:text-white" href={item.url}>{item.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        } placement="bottom" arrow={true}>
                            <Link className='p-3.5 hover:bg-gray-700 flex items-center hover:text-white' href="/daily-rent">Daily Rent <FaArrowDown className="mx-2" /></Link>
                        </Dropdown>
                        </li>
                        <li><Dropdown overlay={
                            <ul className="ant-dropdown-menu">
                                {monthlyRent.map((item) => (
                                    <li className="text-base font-semibold p-3 hover:bg-gray-700" key={item.key}>
                                        <Link className="hover:text-white" href={item.url}>{item.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        } placement="bottom" arrow={true}>
                            <Link className='p-3.5 hover:bg-gray-700 flex items-center hover:text-white' href="/monthly-rent">Monthly Rent <FaArrowDown className="mx-2" /></Link>
                        </Dropdown>
                        </li>
                        <li><Dropdown overlay={
                            <ul className="ant-dropdown-menu">
                                {rentAVehicle.map((item) => (
                                    <li className="text-base font-semibold p-3 hover:bg-gray-700" key={item.key}>
                                        <Link className="hover:text-white" href={item.url}>{item.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        } placement="bottom" arrow={true}>
                            <Link className='p-3.5 hover:bg-gray-700 flex items-center hover:text-white' href="/monthly-rent">Rent A vehicle <FaArrowDown className="mx-2" /></Link>
                        </Dropdown>
                        </li>
                        <li><NavLink pathname={path} href='/about' name='About'/></li>
                        <li><Link className='p-4 hover:bg-gray-700 hover:text-white' href='/contact'>Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
