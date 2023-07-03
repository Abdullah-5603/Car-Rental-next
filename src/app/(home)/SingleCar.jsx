import React from 'react';

const SingleCar = ({ car, index }) => {
    return (
        <div key={index} className="card md:w-72 w-80 glass group shadow-2xl">
            <figure><img className=' md:w-72 w-80 group-hover:scale-110 h-[200px]' src={car.image} alt="car!" /></figure>
            <div className="card-body">
                <p className="text-lg font-bold">{car.name}</p>
                <button className="btn btn-sm md:btn-md btn-neutral mt-3">Book Now</button>
            </div>
        </div>
    );
};

export default SingleCar;