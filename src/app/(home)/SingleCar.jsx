"use client"
import Link from 'next/link';
import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

const SingleCar = ({ car, index }) => {
    return (
        <Card key={index}
            // hoverable
            style={{
                width: 240,
            }}
            cover={<img className='h-[150px]' alt={car.name} src={car.image} />}
        >
            <Meta className='text-xl' title={car.name} />
            <Link href={`/car-details/${car._id}`}><button className="bg-black text-white text-base rounded-md font-semibold uppercase py-2 w-full mt-3">Book Now</button></Link>
        </Card>
        // <div key={index} className="card md:w-72 w-80 glass group shadow-2xl">
        //     <figure><img className=' md:w-72 w-80 group-hover:scale-110 h-[200px]' src={car.image} alt="car!" /></figure>
        //     <div className="card-body">
        //         <p className="text-lg font-bold">{car.name}</p>
        //         <Link href={`/${car._id}`}><button className="btn btn-sm md:btn-md btn-neutral mt-3">Book Now</button></Link>
        //     </div>
        // </div>
    );
};

export default SingleCar;