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
    // Coffee Items
    {
      id: 'coffee-1',
      image: '/assets/images/Coffee.png',
      title: 'Coffee',
      price: 4.99,
      category: 'Coffee',
      discount: 0.15,
      fullText: 'Our signature espresso blend with rich, bold flavor and smooth finish'
    },
    {
      id: 'coffee-2',
      image: '/assets/images/Coffee2.png',
      title: 'Coffee',
      price: 5.99,
      category: 'Coffee',
      discount: 0.10,
      fullText: 'Premium dark roast coffee with hints of chocolate and caramel'
    },
    {
      id: 'coffee-3',
      image: '/assets/images/Coffee3.png',
      title: 'Coffee',
      price: 6.99,
      category: 'Coffee',
      fullText: 'Smooth medium roast coffee with balanced acidity and body'
    },
    {
      id: 'coffee-4',
      image: '/assets/images/Coffee4.png',
      title: 'Coffee',
      price: 3.99,
      category: 'Coffee',
      fullText: 'Classic American coffee, perfectly roasted for everyday enjoyment'
    },
    {
      id: 'coffee-5',
      image: '/assets/images/Coffee5.png',
      title: 'Coffee',
      price: 7.99,
      category: 'Coffee',
      fullText: 'Specialty single-origin coffee with unique flavor profile'
    },
    {
      id: 'coffee-6',
      image: '/assets/images/Coffee6.png',
      title: 'Coffee',
      price: 5.49,
      category: 'Coffee',
      fullText: 'Rich espresso blend perfect for lattes and cappuccinos'
    },

    // Dessert Items
    {
      id: 'dessert-1',
      image: '/assets/images/Dessert.png',
      title: 'Dessert',
      price: 8.99,
      category: 'Dessert',
      fullText: 'Decadent chocolate cake with rich ganache topping'
    },
    {
      id: 'dessert-2',
      image: '/assets/images/Dessert2.png',
      title: 'Dessert',
      price: 6.99,
      category: 'Dessert',
      fullText: 'Classic New York style cheesecake with berry compote'
    },
    {
      id: 'dessert-3',
      image: '/assets/images/Dessert3.png',
      title: 'Dessert',
      price: 7.49,
      category: 'Dessert',
      fullText: 'Homemade apple pie with vanilla bean ice cream'
    },

    // Ice Cream Items
    {
      id: 'icecream-1',
      image: '/assets/images/Icecream.png',
      title: 'Ice creams',
      price: 4.99,
      category: 'Ice creams',
      fullText: 'Premium vanilla bean ice cream'
    },
    {
      id: 'icecream-2',
      image: '/assets/images/Icecream2.png',
      title: 'Ice creams',
      price: 5.99,
      category: 'Ice creams',
      fullText: 'Double chocolate chunk ice cream'
    },
    {
      id: 'icecream-3',
      image: '/assets/images/Icecream3.png',
      title: 'Ice creams',
      price: 5.49,
      category: 'Ice creams',
      fullText: 'Strawberry swirl ice cream with real fruit'
    },
    {
      id: 'icecream-4',
      image: '/assets/images/Icecream4.png',
      title: 'Ice creams',
      price: 6.99,
      category: 'Ice creams',
      fullText: 'Mint chocolate chip ice cream'
    },
    {
      id: 'icecream-5',
      image: '/assets/images/Icecream5.png',
      title: 'Ice creams',
      price: 5.99,
      category: 'Ice creams',
      fullText: 'Cookies and cream ice cream delight'
    },

    // Shake Items
    {
      id: 'shake-1',
      image: '/assets/images/shake.png',
      title: 'Shake',
      price: 7.99,
      category: 'Shake',
      fullText: 'Classic vanilla milkshake with whipped cream'
    },
    {
      id: 'shake-2',
      image: '/assets/images/shake2.png',
      title: 'Shake',
      price: 8.99,
      category: 'Shake',
      fullText: 'Chocolate fudge milkshake with chocolate chips'
    },
    {
      id: 'shake-3',
      image: '/assets/images/shake3.png',
      title: 'Shake',
      price: 8.49,
      category: 'Shake',
      fullText: 'Strawberry banana smoothie shake'
    },
    {
      id: 'shake-4',
      image: '/assets/images/shake4.png',
      title: 'Shake',
      price: 9.99,
      category: 'Shake',
      fullText: 'Oreo cookie shake with vanilla ice cream'
    },
    {
      id: 'shake-5',
      image: '/assets/images/shake5.png',
      title: 'Shake',
      price: 8.99,
      category: 'Shake',
      fullText: 'Caramel butterscotch shake with toffee bits'
    },

    // Food Items
    {
      id: 'food-1',
      image: '/assets/images/Food.png',
      title: 'Foods',
      price: 12.99,
      category: 'Foods',
      fullText: 'Grilled chicken sandwich with avocado'
    },
    {
      id: 'food-2',
      image: '/assets/images/Food2.png',
      title: 'Foods',
      price: 14.99,
      category: 'Foods',
      fullText: 'Classic cheeseburger with fresh-cut fries'
    },
    {
      id: 'food-3',
      image: '/assets/images/Food3.png',
      title: 'Foods',
      price: 11.99,
      category: 'Foods',
      fullText: 'Caesar salad with grilled chicken'
    },
    {
      id: 'food-4',
      image: '/assets/images/Food4.png',
      title: 'Foods',
      price: 13.99,
      category: 'Foods',
      fullText: 'Vegetarian pasta with marinara sauce'
    },
    {
      id: 'food-5',
      image: '/assets/images/Food5.png',
      title: 'Foods',
      price: 15.99,
      category: 'Foods',
      fullText: 'Grilled salmon with seasonal vegetables'
    }
  ];

  const filteredItems = initialItems.filter(item => item.category === category);
  setItems(filteredItems);
  setVisibleItems(filteredItems.slice(0, 10));
  preloadImages(filteredItems.slice(0, 10));

}, [category, preloadImages]);



  useEffect(() => {
    if (items.length > 0) {
      setCurrentItem(items[activeIndex]);
    }
  }, [activeIndex, items, setCurrentItem]);

  const fullText =
    "sequatur, t Lorem ipsum dolor sit amet.Lorem amet conse Lorem amet conse sit amet sit amet consectetur?";

  const renderSlide = useCallback((item) =>  (
    <SwiperSlide key={item.id} className={`pt-8 sm:pt-16 z-0 ${isExpanded ? 'pt-[3rem] sm:pt-[9rem]' : ''}`}>
      <div className={`relative ${!isExpanded ? 'shadow-md bg-[#835a36] bg-opacity-50 rounded-2xl p-3 ' : ''} mx-auto`}>
        <div className="relative -top-4">
          <motion.img
            loading='lazy'
            src={item.image}
            alt={item.title}
            className={`m-auto max-h-[12.5rem] max-w-[100%] md:max-h-[9rem] !scale-[1.42] mb-4   object-contain ${isExpanded ? ' fixed left-0 right-0 !scale-[1.9] translate-y-[7rem] absloute w-[82%]' : ''}`}
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
