import { getSingleCarDetails } from '@/services/car.service';
import React from 'react';
import CarDetails from './CarDetails';

export const metaData = {
    title : 'Rent and Run || Car Details'
}

const CarDetailsPage = async ({params : {id}}) => {
    // console.log(id);
    const car = await getSingleCarDetails(id);
    // const {_id, name, model, image, type, airConditioning, numberOfPassengers, availableForRental, condition, fuelType, dailyRentPrice, driverAllowance } = car;
    // console.log(bgImage);
    return (
        <CarDetails carData={car}/>
        // <div>
        //     <p>baal</p>
        //     <img src={bgImage} alt="" />
        // </div>
    );
};

export default CarDetailsPage;