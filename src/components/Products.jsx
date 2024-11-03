import { useState, useEffect, useCallback, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import { useProducts } from '../hooks/usePrdouct';
// eslint-disable-next-line react/prop-types
function Products({ category, isExpanded }) {
  const { data: items = [], isLoading } = useProducts(category);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState([]);
  const { setCurrentItem } = useAppContext();

  const fullText = "sequatur, t Lorem ipsum dolor sit amet.Lorem amet conse Lorem amet conse sit amet sit amet consectetur?";



  const renderSlide = useCallback((item) => (
    <SwiperSlide key={item.id} className={`pt-8 sm:pt-16 z-0 ${isExpanded ? 'pt-[3rem] sm:pt-[9rem]' : ''}`}>
    <div className={`relative ${!isExpanded ? 'shadow-md bg-[#835a36] bg-opacity-50 rounded-2xl p-3 ' : ''} mx-auto`}>
      <div className="relative -top-4">
        <motion.img
          loading='lazy'
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

  const memoizedItems = useMemo(() => 
    isExpanded ? [items[activeIndex]] : visibleItems
  , [isExpanded, items, activeIndex, visibleItems]);

  useEffect(() => {
    if (items.length > 0) {
      setVisibleItems(items.slice(0, 10));
    }
  }, [items]);

  useEffect(() => {
    if (items.length > 0) {
      setCurrentItem(items[activeIndex]);
    }
  }, [activeIndex, items, setCurrentItem]);

  if (isLoading) {
    return (
      <div className="w-[80%] relative top-6 transition-all duration-300 rounded-2xl mx-auto min-h-[22rem] flex flex-col items-center justify-center bg-translucent-coffee/50 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-8">
          {/* Coffee bean spinning animation */}
          <div className="relative">
            <div className="w-16 h-16 border-2 border-[#835a36] rounded-full border-t-transparent animate-spin" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="#835a36"
                className="animate-pulse"
              >
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
            </div>
          </div>
          
          {/* Elegant loading text */}
          <div className="font-serif text-[#835a36] text-xl tracking-widest">
            LOADING
          </div>
        </div>
      </div>
    );
  }
  

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
      preloadImages={true} // اضافه کردن این گزینه
      updateOnImagesReady={true} // اضافه کردن این گزینه
      initial="enter"
      animate="center"
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
        if (swiper.activeIndex > visibleItems.length - 3) {
          const nextItems = items.slice(
            visibleItems.length,
            visibleItems.length + 5
          );
          if (nextItems.length > 0) {
            setVisibleItems(prev => [...prev, ...nextItems]);
          }
        }
      }}
    >
      {memoizedItems.map(renderSlide)}
    </Swiper>
  );
}

export default Products;
