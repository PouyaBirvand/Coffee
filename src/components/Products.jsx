import PropTypes from 'prop-types';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import { useProducts } from '../hooks/usePrdouct';

function Products({ categoryId, isExpanded }) {
  const { data: items = [], isLoading } = useProducts(categoryId);
  const [activeIndex, setActiveIndex] = useState(0);
  const { setCurrentItem } = useAppContext();

  useEffect(() => {
    setActiveIndex(0);
  }, [categoryId]);

  useEffect(() => {
    if (items.length > 0) {
      setCurrentItem(items[activeIndex]);
    }
  }, [activeIndex, items, setCurrentItem]);

  const renderSlide = useCallback((item) => (
    <SwiperSlide key={item.id} className={`pt-12 sm:pt-16 z-0 ${isExpanded ? 'pt-[3rem] sm:pt-[9rem]' : ''}`}>
      <div className={`relative ${!isExpanded ? 'shadow-md bg-[#835a36] bg-opacity-50 rounded-2xl p-3 ' : ''} mx-auto`}>
        <div className="relative -top-4">
          <motion.img
            src={item.image}
            alt={item.title}
            loading="eager"
            decoding="async"
            width="300"
            height="300"
            className={`m-auto max-h-[12.5rem] max-w-[100%] md:max-h-[9rem] !scale-[1.4] mb-4 object-contain relative ${isExpanded && '!max-h-[12rem] top-[2rem]'}`}
            style={{
              willChange: 'transform',
              contain: 'layout'
            }}
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
            <h1 className="text-white text-[1.4rem] drop-shadow-2xl -mt-2 mb-5 font-extrabold sm:text-[1.3rem]">
              {item.title}
            </h1>
            <p className="text-white drop-shadow-2xl sm:text-sm ml-1">
              {item.description}
            </p>
            <p className="text-white font-bold mt-2 text-3xl">
            ${Number(item.price).toLocaleString()}  
            </p>
          </motion.div>
        )}

        {!isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-white text-2xl drop-shadow-2xl mb-0 font-extrabold md:text-[1.3rem]">
              {item.title}
            </h1>
            <p className="text-white drop-shadow-2xl text-base ml-1 text-justify">
              {item.description}
            </p>
          </motion.div>
        )}
      </div>
    </SwiperSlide>
  ), [isExpanded]);

  const memoizedItems = useMemo(() => 
    isExpanded ? [items[activeIndex]] : items.slice(0, 10)
  , [isExpanded, items, activeIndex]);

  if (isLoading) {
    return (
      <div className="mt-[1.5rem] w-[95%] md:w-[80%] lg:w-[80%] mx-auto min-h-[400px] bg-warm-wood bg-opacity-20 rounded-2xl flex flex-col items-center justify-center gap-4">
        <div className="relative w-24 h-24">
          <div className="absolute w-full h-full border-4 border-t-[#412F26] border-r-[#806044] border-b-[#835A36] border-l-[#5D2510] rounded-full animate-spin"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-[#5D2510] via-[#806044] to-[#835A36] rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#EDE1D2] rounded-full"></div>
        </div>
        <p className="text-lg font-medium text-[#412F26] animate-pulse">Brewing your experience...</p>
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
      key={categoryId}
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
      initialSlide={0}
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
    >
      {memoizedItems.map(renderSlide)}
    </Swiper>
  );
}

Products.propTypes = {
  categoryId: PropTypes.number.isRequired,
  isExpanded: PropTypes.bool.isRequired
};

export default Products;
