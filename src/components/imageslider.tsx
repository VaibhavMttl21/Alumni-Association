import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Define the props type for the component
interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Automatically change the image every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000); // 15000 ms = 15 seconds

    return () => clearInterval(interval); 
  }, [currentIndex]);

  if (!images || images.length === 0) {
    return <div className="text-center py-8">No images to display</div>;
  }

  return (
    <div className="relative w-full  max-w-full m-auto py-8 px-4">
      <div className="relative w-full h-full overflow-hidden">
        <div
          className="flex transition-transform ease-in-out duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${images.length * 50.3}%` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div
          className="absolute top-[50%] -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          onClick={prevSlide}
        >
          <ChevronLeft size={30} />
        </div>
        <div
          className="absolute top-[50%] -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          onClick={nextSlide}
        >
          <ChevronRight size={30} />
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-3 w-3 rounded-full ${
                currentIndex === index ? 'bg-black' : 'bg-black/50'
              } cursor-pointer`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
