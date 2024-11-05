import React from 'react';
import { Camera } from 'lucide-react';

const memories = [
  {
    title: "First Day Together",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&auto=format&fit=crop",
    description: "Where our story began"
  },
  {
    title: "Peaceful Moments",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&auto=format&fit=crop",
    description: "Simple times, pure happiness"
  },
  {
    title: "Video Call Memories",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop",
    description: "Distance couldn't separate us"
  }
];

function MemoryGallery() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg my-8">
      <div className="flex items-center justify-center mb-8">
        <Camera className="w-6 h-6 text-pink-500 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800">Our Memories</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {memories.map((memory, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg transform transition-all duration-300 hover:scale-105">
            <img
              src={memory.image}
              alt={memory.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="text-lg font-semibold">{memory.title}</h3>
                <p className="text-sm">{memory.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MemoryGallery;