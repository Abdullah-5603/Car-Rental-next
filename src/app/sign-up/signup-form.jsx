"use client"
import React from 'react';

const SignUpForm = ({post}) => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        // const formData = new FormData()
        // console.log(formData);
        const form = event.target;
        const userName = form.UserName.value;
        const email = form.email.value;
        const password = form.password.value;
    
        const data = { userName: userName, email: email, password: password }
    
        console.log(data);
        try {
            await post(data)
            console.log('data posted successfully!');
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
        <div className='flex flex-col space-y-3'>
            <label htmlFor="UserName">User Name</label>
            <input type="text" name='UserName' placeholder='User Name' className='focus:outline-none p-2 border-2 border-gray-600 rounded-md' required />
        </div>
        <div className='flex flex-col space-y-3 mt-2'>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' placeholder='Email' className='focus:outline-none p-2 border-2 border-gray-600 rounded-md' required />
        </div>
        <div className='flex flex-col space-y-3 mt-2'>
            <label htmlFor="password">Password</label>
            <input type="text" name='password' placeholder='Password' className='focus:outline-none p-2 border-2 border-gray-600 rounded-md' required />
        </div>
        <button type='submit' className='bg-black p-3 rounded-lg mt-3 w-1/2 m-auto font-semibold text-white'>Submit</button>
        
    </form>
    );
};

export default SignUpForm;