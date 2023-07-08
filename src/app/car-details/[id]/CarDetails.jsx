// "use client"
import React from 'react';
import bgImage from '../../../../public/title-box-default-bg.jpg'

const CarDetails = ({carData}) => {
    const {_id, name, model, image, type, airConditioning, numberOfPassengers, availableForRental, condition, fuelType, dailyRentPrice, driverAllowance } = carData;
    return (
        <div>
            <img src='https://i.ibb.co/q9Wc0vH/title-box-default-bg.jpg' alt="" />
            <img src={image} alt="" />
            <p>{name}</p>
            <p>baal</p>
        </div>
    );
};

export default CarDetails;