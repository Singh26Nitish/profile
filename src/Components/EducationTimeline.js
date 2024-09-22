import React from 'react';
import data from './data.json';

  const TimelineItem = ({ title, date, description, description1, description2, description3 }) => (
    <div className="relative mb-8">
      <div className="ml-4">
        <div className="text-font p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold">{title}</h3>
          <span className="block text-sm text-yellow-400 mb-2">{date}</span>
          <p className="text-gray-300">{description}</p>
          <p className="text-gray-300">{description1}</p>
          <p className="text-gray-300">{description2}</p>
          <p className="text-gray-300">{description3}</p>
        </div>
      </div>
    </div>
  );
  
  const TimelineEdu = () => (
    <div className="relative border-l-2 border-gray-600 ml-2 pl-2">
      {data.education.map((item, index) => (
        <TimelineItem 
          key={index} 
          title={item.title} 
          date={item.date} 
          description={item.description} 
        />
      ))}
    </div>
  );

  const TimelineExp = () => (
    <div className="relative border-l-2 border-gray-600 ml-2 pl-2">
      {data.experience.map((item, index) => (
        <TimelineItem 
          key={index} 
          title={item.title} 
          date={item.date} 
          description1={item.description1} 
          description2={item.description2} 
          description3={item.description3} 
        />
      ))}
    </div>
  );
  
  export default function EducationTimeline() {
    return (
      <div className="text-font ml-2">
        <h1 className="text-3xl font-bold mb-6">Education</h1>
        <TimelineEdu />
        <h1 className="text-3xl font-bold mb-6">Experience</h1>
        <TimelineExp />
      </div>
    );
  }
