import React from 'react';
import Slider from './Slider';
import AllCars from './AllCars';
import HiringCategory from './HiringCategory';
import WhyChoose from './WhyChoose';
import LocalRent from './LocalRent';

export const metadata = {
    title: 'Car Rental || Home',
    description: 'Generated by Car Rental',
  }

const HomePage = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <Slider/>
            <AllCars/>
            <HiringCategory/>
            <WhyChoose/>
            <LocalRent/>
        </div>
    );
};

export default HomePage;