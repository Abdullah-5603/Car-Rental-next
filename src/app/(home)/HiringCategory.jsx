"use client"
import React from 'react';

const HiringCategory = () => {

    return (
        <div className='bg-fixed pt-8 my-20 w-full flex flex-col items-center justify-center' style={{ backgroundImage: `url(https://www.kanlux.com/storage/inspiracje/16394_3.jpg)` }}>
            <div className='flex w-5/6 p-28 justify-between'>
                <div className='bg-yellow-400 bg-opacity-90 p-8 w-1/2 mx-10'>
                    <p className='text-black text-3xl font-bold mb-5'>Want to hire a economy car?</p>
                    <p className='text-white'>We are offering you a wide range of vehicle e.g. cars, micro bus, pick up, ambulance, truck, covered van and commercial vehicles for rent. Whether you are a traveler, moving home or planning a trip, zoom rent a car has the right vehicle choice for you.</p>
                </div>
                <div className='bg-red-600 bg-opacity-90 p-8 w-1/2 mx-10'>
                    <p className='text-black text-3xl font-bold mb-5'>Want to hire a luxurious car? </p>
                    <p className='text-white'>If you want to hire a luxurious car, micro bus or any other vehicle please make us call and schedule your appointment today! We will arrange your desirable vehicle with affordable price.</p>
                </div>
            </div>
        </div>
    );
};

export default HiringCategory;