import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

interface ImageCarouselProps {
    images: string[];
    altText?: string;
}

const ImageCarouselZoomable: React.FC<ImageCarouselProps> = ({ images, altText = 'Image' }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [loadedIndexes, setLoadedIndexes] = useState<number[]>([]);
    const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);

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
        <>
            <div className="w-full max-w-6xl mx-auto">
                <div className="overflow-hidden rounded-lg" ref={emblaRef}>
                    <div className="flex">
                        {images.map((src, index) => {
                            const isLoaded = loadedIndexes.includes(index);
                            return (
                                <div className="min-w-0 flex-[0_0_100%] px-2 relative" key={index}>
                                    <div className="absolute top-4 right-4 z-20">
                                        <button
                                            onClick={() => setFullscreenIndex(index)}
                                            className="bg-white dark:bg-gray-800 text-black dark:text-white px-3 py-1 rounded shadow hover:bg-gray-200 dark:hover:bg-gray-700"
                                        >
                                            Fullscreen
                                        </button>
                                    </div>
                                    <TransformWrapper
                                        limitToBounds={false}
                                        centerOnInit
                                        velocityDisabled
                                    >
                                        <TransformComponent wrapperStyle={{ width: '100%', height: 'auto' }}>
                                            <img
                                                src={src}
                                                alt={`${altText} ${index + 1}`}
                                                className={`w-full h-auto max-h-[75vh] object-contain transition-opacity duration-700 ${
                                                    isLoaded ? 'opacity-100' : 'opacity-0'
                                                }`}
                                                onLoad={() => handleImageLoad(index)}
                                                draggable={false}
                                            />
                                        </TransformComponent>
                                    </TransformWrapper>
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

            {fullscreenIndex !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-[9999] flex items-center justify-center p-8">
                    <button
                        onClick={() => setFullscreenIndex(null)}
                        className="absolute top-4 right-4 bg-white text-black dark:bg-gray-800 dark:text-white px-4 py-2 rounded shadow z-50"
                    >
                        Close
                    </button>
                    <div className="w-full h-full max-w-[95vw] max-h-[95vh]">
                        <TransformWrapper
                            limitToBounds={false}
                            centerOnInit
                            velocityDisabled
                            wheel={{ step: 0.2 }}
                            doubleClick={{ disabled: true }}
                        >
                            <TransformComponent>
                                <img
                                    src={images[fullscreenIndex]}
                                    alt={`${altText} Fullscreen`}
                                    className="w-full h-full object-contain rounded-lg shadow-lg"
                                    style={{ pointerEvents: 'auto' }}
                                    draggable={false}
                                />
                            </TransformComponent>
                        </TransformWrapper>
                    </div>
                </div>
            )}
        </>
    );
};

export default ImageCarouselZoomable;