"use client"
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'antd';
import { Carousel } from 'react-responsive-carousel';
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

const Slider = () => {
    return (
        <Carousel autoPlay infiniteLoop interval={4000}>
            <div>
                <img src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" />
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1600320254374-ce2d293c324e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1577215802116-c632a8ef0848?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
            </div>
        </Carousel> 
    );
};

export default Slider;