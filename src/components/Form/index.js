'use client'

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Form() {
  const [state, handleSubmit] = useForm("mnnajjjq");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">
            Name
        </label>
        <input 
            id="name"
            type="text"
            name="name"
            className="border"
        />
        <ValidationError 
            prefix="Name" 
            field="text"
            errors={state.errors}
        />
        <label htmlFor="company">
            Company
        </label>
        <input 
            id="company"
            type="text"
            name="company"
            className="border"
        />
        <ValidationError 
            prefix="Company" 
            field="text"
            errors={state.errors}
        />
        <label htmlFor="email">
            Email Address
        </label>
        <input
            id="email"
            type="email" 
            name="email"
            className='border'
        />
        <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
        />
        <textarea
        id="message"
        name="message"
        className='border'
        />
        <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
        />
        <button
            className='inline-block px-4 py-2 rounded w-auto border text-gray-700 transition duration-500 ease-in-out hover:shadow-xl hover:bg-gray-500 hover:text-white'  
            type="submit"
            disabled={state.submitting}
        >
        Submit
        </button>
    </form>
  );
}