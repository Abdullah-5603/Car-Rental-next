"use client"
import React from 'react';

const WhyChoose = () => {
    return (
        <div className='flex flex-col justify-center items-center mb-10'>
            <div className='w-full flex flex-col items-center mb-7'>
            <p className='text-3xl md:text-4xl uppercase font-bold text-center mb-3'>why choose us</p>
            <div className='w-2/12 border-b-4 border-[#cc6119]'></div>
            </div>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-8 w-5/6 mb-8'>
                <div>
                    <p className='font-bold text-lg mb-2 uppercase'>We offer affordable price</p>
                    <p className='text-sm'>If you hire a car from zoom rent a car which would be affordable for you because there is no hidden charges. We are open to our clients.</p>
                </div>
                <div>
                    <p className='font-bold text-lg mb-2 uppercase'>Wide Range of Services & Brands </p>
                    <p className='text-sm'>In our fleet we have 100 premium cars, micro bus, pick up, ambulance as well as truck, covered van and commercial vehicles.</p>
                </div>
                <div>
                    <p className='font-bold text-lg mb-2 uppercase'>Dedicated Support </p>
                    <p className='text-sm'>Zoom rent a car driver will provide you the faithful support. They always have been committed to you. You can use the driver as you need.</p>
                </div>
                <div>
                    <p className='font-bold text-lg mb-2 uppercase'>Ensure Security </p>
                    <p className='text-sm'>Zoom rent a car always try to ensure top security for the passengers. For ensuring security zoom car rental always track the vehicle by using devices across the country.</p>
                </div>
            </div>
            <button className='font-bold text-lg py-3 px-5 uppercase text-white bg-black rounded-md'>learn more</button>
        </div>
    );
};

export default WhyChoose;