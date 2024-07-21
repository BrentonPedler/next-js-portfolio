'use client'

import { useState } from 'react';
import Image from 'next/image';
import NavButton from '../NavButton';

const Tabs = ( { tabs } ) => {
  const [ activeTab, setActiveTab ] = useState( 0 );

  return (
    <div className="w-full mx-auto mt-10">
      <div className="flex justify-center md:justify-between space-x-2 border-b flex-wrap">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 focus:outline-none ${
              activeTab === index ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="my-10">
        <div className="relative w-full h-72 mt-4">
          <Image
            src={tabs[activeTab].imageUrl}
            alt={tabs[activeTab].imageAlt}
            layout="fill"
            objectFit="cover"
            className="rounded-2xl shadow-xl"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-10 py-10 border-y">
          <div className='flex-1'>
            <h2 className="text-2xl text-left font-bold mb-4">{tabs[activeTab].title}</h2>
            <div className="flex gap-6">
              <NavButton 
                href={tabs[activeTab].liveSiteHref} 
                label={tabs[activeTab].liveSite} 
                variant="outline" 
                target="_blank" 
              />
              <NavButton 
                href={tabs[activeTab].githubRepoHref} 
                label={tabs[activeTab].githubRepo} 
                variant="outline" 
                target="_blank"
              />
            </div>
          </div>
          <div className='flex-1 pr-0 pt-10 md:pt-0 md:pr-6'>
            <p className="mt-2 text-left">{tabs[activeTab].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
