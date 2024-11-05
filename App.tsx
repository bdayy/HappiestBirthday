import React, { useState } from 'react';
import Timeline from './components/Timeline';
import Letter from './components/Letter';
import Quiz from './components/Quiz';
import { Music2, Music4 } from 'lucide-react';

function App() {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      <button 
        onClick={() => setIsMuted(!isMuted)} 
        className="fixed top-4 right-4 p-2 rounded-full bg-white shadow-lg hover:bg-pink-50 transition-all"
      >
        {isMuted ? <Music2 className="w-6 h-6 text-pink-500" /> : <Music4 className="w-6 h-6 text-pink-500" />}
      </button>

      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-4 animate-fade-in">
            Our Story
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">A journey of love, friendship, and memories</p>
        </header>

        <Timeline />
        <Letter />
        <Quiz />

        <audio 
          src="https://www.chosic.com/wp-content/uploads/2021/04/Beautiful-Piano-Music.mp3" 
          autoPlay 
          loop 
          muted={isMuted}
        />
      </div>
    </div>
  );
}

export default App;