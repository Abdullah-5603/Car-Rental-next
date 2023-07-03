import { getAllCars } from '@/services/car.service';
import SingleCar from './SingleCar';
// import { useEffect, useState } from 'react';

const AllCars = async () => {
    const cars = await getAllCars();
    // console.log(cars)
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5 md:w-3/4'>
            {cars.map((car, index) => (
                <SingleCar car={car} index={index}/>
            ))}
        </div>
    );
};

export default AllCars;
