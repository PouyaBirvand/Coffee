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
      { id: `${category}-1`, image: '/assets/images/Coffee1.png', title: category, price: 4.99, discount: 0.05, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
      { id: `${category}-2`, image: '/assets/images/Coffee2.png', title: category, price: 5.99, discount: 0.03, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
      { id: `${category}-3`, image: '/assets/images/Coffee3.png', title: category, price: 3.99, discount: 0.02, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
      { id: `${category}-4`, image: '/assets/images/Coffee4.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
      { id: `${category}-5`, image: '/assets/images/Coffee5.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
      { id: `${category}-6`, image: '/assets/images/Coffee6.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
      { id: `${category}-7`, image: '/assets/images/Coffee7.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
      { id: `${category}-8`, image: '/assets/images/Coffee8.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
      { id: `${category}-9`, image: '/assets/images/Coffee9.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
      { id: `${category}-10`, image: '/assets/images/Coffee10.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
      { id: `${category}-11`, image: '/assets/images/Coffee11.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
      { id: `${category}-12`, image: '/assets/images/Coffee12.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
      { id: `${category}-13`, image: '/assets/images/Coffee13.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
      { id: `${category}-14`, image: '/assets/images/Coffee15.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
      { id: `${category}-15`, image: '/assets/images/Coffee16.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
      { id: `${category}-16`, image: '/assets/images/Coffee17.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
      { id: `${category}-18`, image: '/assets/images/Coffee19.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
      { id: `${category}-19`, image: '/assets/images/Coffee20.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
      { id: `${category}-20`, image: '/assets/images/Coffee21.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
      { id: `${category}-21`, image: '/assets/images/Coffee22.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
      { id: `${category}-22`, image: '/assets/images/Coffee23.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
      { id: `${category}-23`, image: '/assets/images/Coffee24.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
      { id: `${category}-24`, image: '/assets/images/Coffee25.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
      { id: `${category}-25`, image: '/assets/images/Coffee26.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
      { id: `${category}-26`, image: '/assets/images/Coffee27.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
      { id: `${category}-27`, image: '/assets/images/Coffee28.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
      { id: `${category}-28`, image: '/assets/images/Coffee29.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
      { id: `${category}-29`, image: '/assets/images/Coffee30.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
      { id: `${category}-30`, image: '/assets/images/Coffee31.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
      { id: `${category}-31`, image: '/assets/images/Coffee32.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
      { id: `${category}-32`, image: '/assets/images/Coffee33.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
      { id: `${category}-33`, image: '/assets/images/Coffee34.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
      { id: `${category}-34`, image: '/assets/images/Coffee35.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
      { id: `${category}-35`, image: '/assets/images/Coffee36.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },



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
    <SwiperSlide key={item.id} className={`pt-10 z-0 ${isExpanded ? 'pt-[5.9rem] sm:pt-[8rem]' : ''}`}>
      <div className={`relative ${!isExpanded ? 'shadow-md bg-[#835a36] bg-opacity-50 rounded-2xl p-5' : ''} mx-auto`}>
        <div className="relative -top-8">
          <motion.img
            src={item.image}
            alt={item.title}
            className={`m-auto max-h-[12.5rem] sm:max-h-[10rem] md:max-h-[10rem] !scale-[1.3]  object-contain ${isExpanded ? ' fixed left-0 right-0 !scale-[1.9] translate-y-[4rem] absloute w-[82%]' : ''}`}
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
