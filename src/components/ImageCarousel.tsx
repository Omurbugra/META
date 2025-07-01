import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

interface ImageCarouselProps {
    images: string[];
    altText?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, altText = 'Image' }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [loadedIndexes, setLoadedIndexes] = useState<number[]>([]);

    const handleImageLoad = (index: number) => {
        setLoadedIndexes((prev) => [...new Set([...prev, index])]);
    };

    const scrollTo = useCallback(
        (index: number) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    );

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on('select', onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {images.map((src, index) => {
                        const isLoaded = loadedIndexes.includes(index);
                        return (
                            <div className="min-w-0 flex-[0_0_100%] px-2 relative" key={index}>
                                <img
                                    src={src}
                                    alt={`${altText} ${index + 1}`}
                                    className={`w-full h-auto max-h-[70vh] object-contain transition-opacity duration-700 ${
                                        isLoaded ? 'opacity-100' : 'opacity-0'
                                    }`}
                                    onLoad={() => handleImageLoad(index)}
                                />
                                {!isLoaded && (
                                    <div className="absolute inset-0 flex items-center justify-center min-h-[400px]">
                                        <div className="w-12 h-12 border-2 border-gray-300 border-t-gray-900 dark:border-gray-700 dark:border-t-gray-100 rounded-full animate-spin"></div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Dot Navigation */}
            <div className="flex justify-center mt-6 space-x-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                            index === selectedIndex
                                ? 'bg-gray-900 dark:bg-gray-100'
                                : 'bg-gray-300 dark:bg-gray-700'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;
