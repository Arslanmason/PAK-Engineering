import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  altText: string;
}

export default function ImageCarousel({ images, altText }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<boolean[]>(new Array(images.length).fill(false));

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Auto-advance carousel
  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-full overflow-hidden group/carousel bg-gray-200">
      {images.map((img, index) => {
        const isUnsplash = img.includes('unsplash.com');
        const baseUrl = isUnsplash ? img.split('&w=')[0] : img;
        const srcSet = isUnsplash 
          ? `${baseUrl}&w=640&q=80 640w, ${baseUrl}&w=1024&q=80 1024w, ${img} 1200w`
          : undefined;
        
        const isCurrent = index === currentIndex;
        const isLoaded = loadedImages[index];

        return (
          <div key={index} className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
            {/* Skeleton Loader */}
            {!isLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                <Loader2 className="text-gray-400 animate-spin" size={24} />
              </div>
            )}
            
            <img
              src={img}
              srcSet={srcSet}
              sizes={isUnsplash ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" : undefined}
              alt={`${altText} - image ${index + 1}`}
              className={`w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              onLoad={() => handleImageLoad(index)}
              referrerPolicy="no-referrer"
            />
          </div>
        );
      })}

      {/* Navigation Controls */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-1 rounded-full z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-1 rounded-full z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-pak-gold w-4' : 'bg-white/60 hover:bg-white'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
