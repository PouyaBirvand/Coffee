import { useState, useEffect } from 'react';
import { initialItems } from '../components/initialItems';

export function useImagePreloader() {
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  useEffect(() => {
    let loadedImages = 0;
    const totalImages = initialItems.length;

    const preloadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    };

    Promise.all(initialItems.map(item => preloadImage(item.image)))
      .then(() => {
        setImagesPreloaded(true);
      })
      .catch(err => {
        console.error('Error preloading images:', err);
        setImagesPreloaded(true); // در صورت خطا هم اجازه نمایش محتوا را میدهیم
      });
  }, []);

  return imagesPreloaded;
}
