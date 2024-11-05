import React from 'react';
import { Heart } from 'lucide-react';

function Letter() {
  return (
    <div className="max-w-2xl mx-auto my-16 p-8 bg-white rounded-lg shadow-xl transform hover:scale-102 transition-all">
      <div className="text-center mb-8">
        <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Dear Love</h2>
      </div>
      
      <div className="prose prose-pink mx-auto">
        <p className="text-gray-600 leading-relaxed mb-4">
          As your birthday approaches tomorrow, I find myself reflecting on our journey together. 
          Every moment we shared has been precious to me, from our childhood friendship to the 
          beautiful relationship we built.
        </p>
        
        <p className="text-gray-600 leading-relaxed mb-4">
          I miss the way we used to be - our video calls, our shy hugs, and the comfort of knowing 
          you were there. Even through the challenges of distance and your health struggles, 
          our bond remained strong.
        </p>
        
        <p className="text-gray-600 leading-relaxed mb-4">
          I've been trying to understand what changed on that November day. If there's anything 
          I could do differently, anything I could improve, I'm here to listen and learn.
        </p>
        
        <p className="text-gray-600 leading-relaxed">
          Our story isn't just a chapter in my life - it's a part of who I am. If you're willing, 
          I'd love to understand your perspective and perhaps find our way back to each other.
        </p>
      </div>
      
      <div className="text-center mt-8">
        <p className="text-pink-600 font-semibold">With love and hope,</p>
        <p className="text-gray-800 font-bold mt-2">Your Best Friend</p>
      </div>
    </div>
  );
}

export default Letter;