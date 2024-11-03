import { useState, useEffect, useCallback, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
<<<<<<< HEAD
import { useProducts } from '../hooks/usePrdouct';
=======
import { useProducts } from './usePrdouct';

>>>>>>> c4713c4d409357839dc8ed9f52253440c17d3f87
// eslint-disable-next-line react/prop-types
function Products({ category, isExpanded }) {
  const { data: items = [], isLoading } = useProducts(category);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState([]);
  const { setCurrentItem } = useAppContext();

  const fullText = "sequatur, t Lorem ipsum dolor sit amet.Lorem amet conse Lorem amet conse sit amet sit amet consectetur?";

  // Optimized renderSlide with better image loading
  const renderSlide = useCallback((item) => (
    <SwiperSlide key={item.id} className={`pt-8 sm:pt-16 z-0 ${isExpanded ? 'pt-[3rem] sm:pt-[9rem]' : ''}`}>
       <div className={`relative ${!isExpanded ? 'shadow-md bg-[#835a36] bg-opacity-50 rounded-2xl p-3 ' : ''} mx-auto`}>
<div className="relative -top-4">
  <motion.img
    src={item.image}
    alt={item.title}
    fetchPriority={'high'} // اضافه کردن اولویت بالا
    className={`m-auto max-h-[12.5rem] max-w-[100%] md:max-h-[9rem] !scale-[1.29] mb-4   object-contain ${isExpanded ? ' fixed left-0 right-0 !scale-[1.9] translate-y-[7rem] absloute w-[82%]' : ''}`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1.2 }}
    transition={{ duration: 0.5 }}
  />
</div>
{isExpanded && (
  <motion.div
    className="fixed left-0 right-0 bottom-14 backdrop-blur-md bg-[#835a36] bg-opacity-50 rounded-2xl p-8 z-[1000] max-w-[75%] mx-auto h-[17rem] sm:h-[15rem]"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.5 }}
  >
    <h1 className="text-white text-[2.4rem] drop-shadow-2xl -mt-2 mb-0 font-extrabold sm:text-3xl">
      {item.title}
    </h1>
    <p className="text-white drop-shadow-2xl sm:text-sm ml-1">
      {fullText}
    </p>
    <p className="text-white font-bold mt-2 text-3xl">
      ${item.price.toFixed(2)}
    </p>
  </motion.div>
)}
{!isExpanded && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h1 className="text-white text-[2.3rem] drop-shadow-2xl  mb-0 font-extrabold sm:text-3xl">
      {item.title}
    </h1>
    <p className="text-white drop-shadow-2xl sm:text-sm ml-1">
      {fullText.split(' ').slice(0, 17).join(' ') + '...'}
    </p>
  </motion.div>
)}
</div> 
    </SwiperSlide>
  ), [isExpanded, fullText]);

  // Optimized memoization
  const memoizedItems = useMemo(() => 
    isExpanded ? [items[activeIndex]] : items.slice(0, 10)
  , [isExpanded, items, activeIndex]);

  // Update current item effect
  useEffect(() => {
    if (items.length > 0) {
      setCurrentItem(items[activeIndex]);
    }
  }, [activeIndex, items, setCurrentItem]);


  if (isExpanded) {
    return (
      <div className="mt-[1.5rem] w-[95%] md:w-[80%] lg:w-[80%] mx-auto">
        {items[activeIndex] && renderSlide(items[activeIndex])}
      </div>
    );
  }

  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={1.26}
      key={category}
      preloadImages={true}
      updateOnImagesReady={true}
      lazy={false}
      watchSlidesProgress={true}
      preventInteractionOnTransition={true}
      coverflowEffect={{
        rotate: 40,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
      }}
      modules={[EffectCoverflow]}
      className="w-[95%] md:w-[100%] lg:w-[100%] transition-all duration-300"
      spaceBetween={40}
      initialSlide={activeIndex}
      onSlideChange={(swiper) => {
        setActiveIndex(swiper.activeIndex);
      }}
    >
      {memoizedItems.map(renderSlide)}
    </Swiper>
  );
}

export default Products;

