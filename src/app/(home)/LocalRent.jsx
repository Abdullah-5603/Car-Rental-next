"use client"
import { useEffect, useState } from 'react';

const LocalRent = () => {
  const [localPlace, setLocalPlace] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  function successCallback(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Make a request to a reverse geocoding API
    fetch(`https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const placeName = data.address.city;
        setLocalPlace(placeName);
      })
      .catch(error => {
        console.log("Error:", error);
      });
  }

  function errorCallback(error) {
    console.log("Error occurred while retrieving location:", error.message);
  }

  return (
    <div className='bg-fixed py-10 my-10 w-full' style={{ backgroundImage: `url(https://i.ibb.co/Dps9SK7/local-bg.jpg)` }}>
      <div className='px-10 py-16 md:p-24 md:w-6/12'>
        <div className='bg-yellow-400 bg-opacity-80 p-10 hover:bg-opacity-100'>
          <p className='text-3xl md:text-5xl font-bold mb-5'>
            <span className='text-black uppercase'>Welcome to the </span>
            <span className='text-white'> Car Rental in {localPlace}</span>
          </p>
          <p className='text-white'>
            Zoom rent a car is popular in Bangladesh for quality service. We are offering a wide range of vehicle e.g. cars, micro bus, pick up, ambulance, truck, covered van and commercial vehicles for rent.
            Whether you are a traveler, moving home or planning a trip, zoom rent a car has the right vehicle choice for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocalRent;
