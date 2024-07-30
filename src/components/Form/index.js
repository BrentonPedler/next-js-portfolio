'use client'

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Form() {
  const [state, handleSubmit] = useForm("mnnajjjq");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form 
        className='w-full'
        onSubmit={handleSubmit}
    >
        <div className="flex mt-4">
            <label htmlFor="name" className="block m-auto w-40">
                Name:
            </label>
            <input 
                id="name"
                type="text"
                name="name"
                className="border w-full"
            />
            <ValidationError 
                prefix="Name" 
                field="text"
                errors={state.errors}
            />
        </div>
        <div className="flex mt-4">
            <label htmlFor="company" className="block m-auto w-40">
                Company:
            </label>
            <input 
                id="company"
                type="text"
                name="company"
                className="border w-full"
            />
            <ValidationError 
                prefix="Company" 
                field="text"
                errors={state.errors}
            />
        </div>
        <div className="flex mt-4">
            <label htmlFor="email" className="block m-auto w-40">
                Email Address:
            </label>
            <input
                id="email"
                type="email" 
                name="email"
                className='border w-full'
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
        </div>
        <div className="flex mt-4">
        <label htmlFor="message" className="block w-40">
            Message:
        </label>
            <textarea
                id="message"
                name="message"
                className='border w-full'
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
        </div>
        <button
            className='inline-block px-4 py-2 rounded w-auto border text-gray-700 transition duration-500 ease-in-out hover:shadow-xl hover:bg-gray-500 hover:text-white mt-4'  
            type="submit"
            disabled={state.submitting}
        >
            Submit
        </button>
    </form>
  );
}