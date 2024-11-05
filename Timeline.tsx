import React from 'react';
import { Calendar, Heart, Video, School, MapPin, MessageCircle } from 'lucide-react';

const timelineEvents = [
  {
    date: "Childhood",
    title: "Where It All Began",
    description: "Friends since our early days, building memories together.",
    icon: Calendar
  },
  {
    date: "2020",
    title: "Lockdown Love",
    description: "Our bond grew stronger during the pandemic, bringing us closer than ever.",
    icon: Heart
  },
  {
    date: "March 13, 2021",
    title: "The Proposal",
    description: "On a beautiful evening, I finally gathered the courage to express my feelings.",
    icon: MessageCircle
  },
  {
    date: "2022",
    title: "Standing Together",
    description: "Through every challenge, our love only grew stronger.",
    icon: Heart
  },
  {
    date: "2023",
    title: "Long Distance",
    description: "Miles apart, but connected through calls and messages.",
    icon: Video
  }
];

function Timeline() {
  return (
    <div className="max-w-4xl mx-auto my-12 px-4">
      <div className="relative wrap overflow-hidden">
        <div className="absolute h-full border-2 border-pink-200 left-1/2 transform -translate-x-1/2"></div>
        {timelineEvents.map((event, index) => {
          const Icon = event.icon;
          return (
            <div key={index} className={`mb-8 flex justify-between items-center w-full ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            }`}>
              <div className="w-5/12 px-6 py-4 rounded-lg shadow-xl bg-white transform transition-all duration-500 hover:scale-105">
                <h3 className="font-bold text-pink-600 text-lg mb-1">{event.date}</h3>
                <h4 className="font-semibold text-gray-800 mb-2">{event.title}</h4>
                <p className="text-gray-600">{event.description}</p>
              </div>
              <div className="z-20 flex items-center bg-pink-500 shadow-xl w-12 h-12 rounded-full">
                <Icon className="w-6 h-6 text-white mx-auto" />
              </div>
              <div className="w-5/12"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Timeline;