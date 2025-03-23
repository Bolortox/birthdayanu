export default function Page() {
  // Update with paths to your actual image files
  // Example: If your images are in /public/images/birthday/ folder
  const photos = [
    { id: 1, src: "/anu1.jpg", alt: "Урлагын үзлэгээр 11-р анги" },
    { id: 2, src: "/anu2.jpg", alt: "Хэдэн цаг ярьдаг байлаа" },
    { id: 3, src: "/anu3.jpg", alt: "24 оны миний төрсөн өдрөөр zen restaurant" },
    { id: 4, src: "/picanu.jpg", alt: "Хүрээлэн орж танай ангийнхантай уулзсан нь" },
    { id: 5, src: "/anu5.jpg", alt: "Юу хийж явснаа санахгүй байна" },
    { id: 6, src: "/anu6.jpg", alt: "2023 оны өвөл" },
  ];

  return (
    <div className="bg-pink-50 min-h-screen flex flex-col items-center py-8 px-4 sm:py-12">
      {/* Birthday Card - Responsive */}
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-center p-4 sm:p-6 rounded-xl bg-white shadow-xl mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-500 mb-4 sm:mb-6">Төрсөн өдрийн гал халуун мэндийг хүргэе Ану!</h1>
        
        {/* Birthday Cake - Made Responsive */}
        <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mb-6">
          {/* Cake base layers */}
          <div className="absolute bottom-0 w-full h-1/4 bg-pink-300 rounded-t-lg"></div>
          <div className="absolute bottom-0 w-full h-8 bg-pink-400 rounded-b-lg"></div>
          
          {/* Cake top */}
          <div className="absolute bottom-1/4 w-full h-10 bg-pink-200 rounded-t-lg"></div>
          
          {/* Decorations - Position relative to container size */}
          <div className="absolute bottom-12 left-1/6 w-3 h-3 sm:w-4 sm:h-4 bg-yellow-200 rounded-full"></div>
          <div className="absolute bottom-16 left-1/3 w-3 h-3 sm:w-4 sm:h-4 bg-purple-200 rounded-full"></div>
          <div className="absolute bottom-12 left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-blue-200 rounded-full"></div>
          <div className="absolute bottom-16 left-2/3 w-3 h-3 sm:w-4 sm:h-4 bg-green-200 rounded-full"></div>
          
          {/* Candles - Responsive spacing */}
          <div className="absolute bottom-28 w-full flex justify-center items-end space-x-4 sm:space-x-6 md:space-x-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="relative">
                <div className="w-1.5 sm:w-2 h-12 sm:h-16 bg-yellow-300 rounded"></div>
                <div className="absolute -top-6 sm:-top-8 -left-1.5 sm:-left-2 w-4 sm:w-6 h-6 sm:h-8 bg-orange-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
        
        <p className="text-lg sm:text-xl text-pink-600 mb-4 sm:mb-6">
          🎉✨
        </p>
      </div>

      {/* Photo Album Section - Responsive */}
      <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-5xl">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-pink-500 mb-4 text-center">Бидний дурсамж</h2>
        
        {/* Photo Grid - Fully Responsive */}
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