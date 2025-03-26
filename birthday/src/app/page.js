"use client";
import React, { useState,  useRef } from 'react';

export default function Page() {
  // Update with paths to your actual image files
  const photos = [
    { id: 1, src: "/anu1.jpg", alt: "Урлагын үзлэгээр 11-р анги" },
    { id: 2, src: "/anu2.jpg", alt: "Хэдэн цаг ярьдаг байлаа" },
    { id: 3, src: "/anu3.jpg", alt: "24 оны миний төрсөн өдрөөр zen restaurant" },
    { id: 4, src: "/picanu.jpg", alt: "Хүрээлэн орж танай ангийнхантай уулзсан нь" },
    { id: 5, src: "/anu5.jpg", alt: "Юу хийж явснаа санахгүй байна" },
    { id: 6, src: "/anu6.jpg", alt: "2023 оны өвөл" },
  ];

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playSpecificSegment = () => {
    if (audioRef.current) {
      try {
        // Set current time to 1:21 (81 seconds)
        audioRef.current.currentTime = 81;
        audioRef.current.play();
        
        // Create a timeout to stop at 1:40 (100 seconds)
        const stopTimeout = setTimeout(() => {
          audioRef.current.pause();
          setIsPlaying(false);
        }, 19000); // 19 seconds (1:40 - 1:21)

        setIsPlaying(true);

        // Clear timeout if component unmounts
        return () => clearTimeout(stopTimeout);
      } catch (error) {
        console.error("Error playing audio:", error);
        alert("Could not play audio. Please check the file.");
      }
    }
  };

  const stopPlayback = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="bg-pink-50 min-h-screen flex flex-col items-center py-8 px-4 sm:py-12">
      
      {/* Audio Element */}
      <audio 
        ref={audioRef} 
        src="/ginjin.mp3"
        onError={(e) => {
          console.error("Audio error:", e);
          alert("Could not load audio file. Please check the file path.");
        }}
      />

      {/* Audio Control Button */}
      <div className="mb-4">
        {!isPlaying ? (
          <button 
            onClick={playSpecificSegment}
            className="bg-pink-500 border-none text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
          >
            Дуу тоглуулах
          </button>
        ) : (
          <button 
            onClick={stopPlayback}
            className="bg-pink-300 border-none text-white px-4 py-2 rounded-lg hover:bg-pink-300 transition"
          >
           Дууг зогсоох
          </button>
        )}
      </div>
      
      {/* Rest of the previous component remains the same */}
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-center p-4 sm:p-6 rounded-xl bg-white shadow-xl mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-500 mb-4 sm:mb-6">Төрсөн өдрийн гал халуун мэндийг хүргэе Ану!</h1>
        
        {/* ... (rest of the previous cake and content code) ... */}
      </div>

      {/* Photo Album Section */}
      <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-5xl">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-pink-500 mb-4 text-center">Бидний дурсамж</h2>
        
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
          {photos.map((photo) => (
            <div key={photo.id} className="relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 h-40 sm:h-48 md:h-56 lg:h-64">
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-2 sm:p-3 md:p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm sm:text-base font-medium">{photo.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full text-center mt-8 sm:mt-12 mb-4 text-pink-400">
        <p className="text-sm sm:text-base">Үргэлж хамт байдагт баярлалаа. Сайн мууг туулж явсан 8 жилийг ардаа үджээ. Хамгийн сайн найз, зөвлөгч байсанд баярлалаа. Хамгаас нандин найздаа төрсөн өдрийн мэндийг хүргэе 2025</p>
      </div>
    </div>
  );
}