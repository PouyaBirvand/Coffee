import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import { categoryService } from '../services/categorySerivce';

// eslint-disable-next-line react/prop-types
function Products({ category, isExpanded }) {
  const [items, setItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const { setCurrentItem } = useAppContext();

  useEffect(() => {
    const fetchProducts = async () => {
        try {
            const response = await categoryService.getAll()
            console.log(response.data);
            
            
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
    
    fetchProducts();
}, []);

  useEffect(() => {
    setItems([
      { id: `${category}-1`, image: '/assets/images/Coffee.png', title: category, price: 4.99, discount: 0.05, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
      { id: `${category}-2`, image: '/assets/images/Coffee.png', title: category, price: 5.99, discount: 0.03, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
      { id: `${category}-3`, image: '/assets/images/Coffee.png', title: category, price: 3.99, discount: 0.02, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
      { id: `${category}-4`, image: '/assets/images/Coffee.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
    ]);
  }, [category]);

  useEffect(() => {
    if (items.length > 0) {
      setCurrentItem(items[activeIndex]);
    }
  }, [activeIndex, items, setCurrentItem]);

  const fullText =
    "sequatur, t Lorem ipsum dolor sit amet.Lorem amet conse Lorem amet conse sit amet sit amet consectetur?";

  const renderSlide = (item) => (
    <SwiperSlide key={item.id} className={`pt-6 z-0 ${isExpanded ? 'pt-[5.9rem] sm:pt-[8rem]' : ''}`}>
      <div className={`relative ${!isExpanded ? 'shadow-md bg-[#835a36] bg-opacity-50 rounded-2xl p-5' : ''} mx-auto`}>
        <div className="relative -top-8">
          <motion.img
            src={item.image}
            alt={item.title}
            className={`m-auto max-w-full h-auto scale-[1.2] ${isExpanded ? ' fixed left-0 right-0 translate-y-[6.5rem] absloute w-[82%]' : ''}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.2 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        {isExpanded && (
          <motion.div
            className="fixed left-0 right-0 bottom-14 backdrop-blur-md bg-[#835a36] bg-opacity-50 rounded-2xl p-8 z-[1000] max-w-[75%] mx-auto h-[17em] sm:h-[15rem]"
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
            <h1 className="text-white text-[2.5rem] drop-shadow-2xl -mt-2 mb-0 font-extrabold sm:text-3xl">
              {item.title}
            </h1>
            <p className="text-white drop-shadow-2xl sm:text-sm ml-1">
              {fullText.split(' ').slice(0, 10).join(' ') + '...'}
            </p>
          </motion.div>
        )}
      </div>
    </SwiperSlide>
  );

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
      coverflowEffect={{
        rotate: 40,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
      }}
      modules={[EffectCoverflow]}
      className="mt-[1.5rem] w-[95%] md:w-[100%] lg:w-[100%] transition-all duration-300"
      spaceBetween={40}
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
    >
      {items.map(renderSlide)}
    </Swiper>
  );
}

export default Products;
