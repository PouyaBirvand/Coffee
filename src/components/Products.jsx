import { useState, useEffect, useCallback, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
// import { categoryService } from '../services/categorySerivce';


// eslint-disable-next-line react/prop-types
function Products({ category, isExpanded }) {
  const [items, setItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState([]);
  const { setCurrentItem } = useAppContext();

  const preloadImages = useCallback((imageList) => {
    imageList.forEach(item => {
      const img = new Image();
      img.src = item.image;
    });
  }, []);

//   useEffect(() => {
//     const fetchProducts = async () => {
//         try {
//             const response = await categoryService.getAll()
//             console.log(response.data);
            
            
//         } catch (error) {
//             console.error('Error fetching products:', error);
//         }
//     };
    
//     fetchProducts();
// }, []);

useEffect(() => {
  const initialItems = [
    { id: `${category}-1`, image: '/assets/images/Coffee.png', title: category, price: 4.99, discount: 0.05, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
    { id: `${category}-2`, image: '/assets/images/Coffee2.png', title: category, price: 5.99, discount: 0.03, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
    { id: `${category}-3`, image: '/assets/images/Coffee3.png', title: category, price: 3.99, discount: 0.02, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
    { id: `${category}-4`, image: '/assets/images/Coffee4.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
    { id: `${category}-5`, image: '/assets/images/Coffee5.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
    { id: `${category}-6`, image: '/assets/images/Coffee6.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
    { id: `${category}-7`, image: '/assets/images/Dessert.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
    { id: `${category}-8`, image: '/assets/images/Dessert2.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
    { id: `${category}-9`, image: '/assets/images/Dessert3.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
    { id: `${category}-10`, image: '/assets/images/Food.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
    { id: `${category}-11`, image: '/assets/images/Food2.png', title: category, price: 2.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
    { id: `${category}-12`, image: '/assets/images/Food3.png', title: category, price: 3.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
    { id: `${category}-13`, image: '/assets/images/Food4.png', title: category, price: 5.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
    { id: `${category}-14`, image: '/assets/images/Food5.png', title: category, price: 1.29, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
    { id: `${category}-15`, image: '/assets/images/Food6.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
    { id: `${category}-16`, image: '/assets/images/Food7.png', title: category, price: 1.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
    { id: `${category}-18`, image: '/assets/images/Food8.png', title: category, price: 7.9, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
    { id: `${category}-19`, image: '/assets/images/Food9.png', title: category, price: 5.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
    { id: `${category}-20`, image: '/assets/images/Icecream.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
    { id: `${category}-21`, image: '/assets/images/Icecream2.png', title: category, price: 8.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
    { id: `${category}-22`, image: '/assets/images/Icecream3.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
    { id: `${category}-23`, image: '/assets/images/Icecream4.png', title: category, price: 4.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
    { id: `${category}-24`, image: '/assets/images/Icecream5.png', title: category, price: 2.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
    { id: `${category}-25`, image: '/assets/images/Icecream6.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
    { id: `${category}-26`, image: '/assets/images/Icecream7.png', title: category, price: 88.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
    { id: `${category}-27`, image: '/assets/images/Icecream8.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
    { id: `${category}-28`, image: '/assets/images/Icecream9.png', title: category, price: 2.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
    { id: `${category}-29`, image: '/assets/images/shake.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
    { id: `${category}-30`, image: '/assets/images/shake2.png', title: category, price: 6.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
    { id: `${category}-31`, image: '/assets/images/shake3.png', title: category, price: 15.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
    { id: `${category}-32`, image: '/assets/images/shake4.png', title: category, price: 19.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
    { id: `${category}-33`, image: '/assets/images/shake5.png', title: category, price: 62.99, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
    { id: `${category}-34`, image: '/assets/images/shake6.png', title: category, price: 22, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
    { id: `${category}-35`, image: '/assets/images/shake7.png', title: category, price: 22, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
    { id: `${category}-36`, image: '/assets/images/shake8.png', title: category, price: 25.5, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },
    { id: `${category}-37`, image: '/assets/images/shake9.png', title: category, price: 32.1, fullText: 'Our signature espresso is a rich blend of premium coffee beans, roasted to perfection for a bold and intense flavor.' },


  ];
  
  setItems(initialItems);
  setVisibleItems(initialItems.slice(0, 10));
  preloadImages(initialItems.slice(0, 10));
}, [category, preloadImages]);


  useEffect(() => {
    if (items.length > 0) {
      setCurrentItem(items[activeIndex]);
    }
  }, [activeIndex, items, setCurrentItem]);

  const fullText =
    "sequatur, t Lorem ipsum dolor sit amet.Lorem amet conse Lorem amet conse sit amet sit amet consectetur?";

  const renderSlide = useCallback((item) =>  (
    <SwiperSlide key={item.id} className={`pt-11 sm:pt-16 z-0 ${isExpanded ? 'pt-[3rem] sm:pt-[9rem]' : ''}`}>
      <div className={`relative ${!isExpanded ? 'shadow-md bg-[#835a36] bg-opacity-50 rounded-2xl p-3' : ''} mx-auto`}>
        <div className="relative -top-8">
          <motion.img
            loading='lazy'
            src={item.image}
            alt={item.title}
            className={`m-auto max-h-[12.5rem] max-w-[100%]  md:max-h-[9rem] !scale-[1.3]  object-contain ${isExpanded ? ' fixed left-0 right-0 !scale-[1.9] translate-y-[6rem] absloute w-[82%]' : ''}`}
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
  ),[isExpanded]);


  const memoizedItems = useMemo(() => 
    isExpanded ? [items[activeIndex]] : visibleItems
  , [isExpanded, items, activeIndex, visibleItems]);

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
      onSlideChange={(swiper) => {
        setActiveIndex(swiper.activeIndex);
        if (swiper.activeIndex > visibleItems.length - 3) {
          const nextItems = items.slice(
            visibleItems.length,
            visibleItems.length + 5
          );
          if (nextItems.length > 0) {
            setVisibleItems(prev => [...prev, ...nextItems]);
            preloadImages(nextItems);
          }
        }
      }}
    >
      {memoizedItems.map(renderSlide)}
    </Swiper>
  );
}

export default Products;
