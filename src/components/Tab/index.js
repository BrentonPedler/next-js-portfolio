'use client'

import { useState } from 'react';

const Tabs = ( { tabs } ) => {
  const [ activeTab, setActiveTab ] = useState( 0 );

  return (
    <div className="w-full mx-auto mt-10">
      <div className="flex justify-between space-x-2 border-b">
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
      <div className="mt-4">
        <h2 className="text-2xl font-bold">{tabs[activeTab].title}</h2>
        <p className="mt-2">{tabs[activeTab].description}</p>
        <div className="mt-4">
          <img src={tabs[activeTab].imageUrl} alt={tabs[activeTab].imageAlt} />
        </div>
        <a className="mt-4 px-4 py-2 bg-blue-500 text-white rounded inline-block" href={tabs[activeTab].liveSiteHref}>
          {tabs[activeTab].liveSite}
        </a>
        <a className="mt-4 ml-2 px-4 py-2 bg-blue-500 text-white rounded inline-block" href={tabs[activeTab].githubRepoHref}>
          {tabs[activeTab].githubRepo}
        </a>
        <div className="mt-4">{tabs[activeTab].timelineContent}</div>
      </div>
    </div>
  );
};

export default Tabs;
