import { useEffect } from 'react';
import { initialItems } from '../data/products';

export const useImagePreloader = () => {
    useEffect(() => {
        const preloadImages = async () => {
            const imagePromises = initialItems.map(item => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = item.image;
                    img.onload = resolve;
                    img.onerror = reject;
                });
            });

            try {
                await Promise.all(imagePromises);
                console.log('All images preloaded successfully!');
            } catch (error) {
                console.log('Error preloading images:', error);
            }
        };

        preloadImages();
    }, []);
};
