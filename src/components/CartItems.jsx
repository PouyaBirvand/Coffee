import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';

// eslint-disable-next-line react/prop-types
function CartItems({ category, isExpanded }) {
  const [expandedItems, setExpandedItems] = useState({});
  const [items, setItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Here you would typically fetch data based on the category
    // For this example, we'll just use mock data
    setItems([
      { id: 1, image: '/assets/images/Coffee.png', title: category, price: 4.99 },
      { id: 2, image: '/assets/images/Coffee.png', title: category, price: 5.99 },
      { id: 3, image: '/assets/images/Coffee.png', title: category, price: 3.99 },
      { id: 4, image: '/assets/images/Coffee.png', title: category, price: 6.99 },
    ]);
  }, [category]);

  const fullText =
    "sequatur, t Lorem ipsum dolor sit amet.Lorem amet conse Lorem amet conse sit amet consectetur Lorem amet conse sit amet consectetur?";
  const maxLength = 70;

  const toggleReadMore = (id) => {
    setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const renderSlide = (item) => (
    <SwiperSlide key={item.id} className={`pt-6 ${isExpanded && 'pt-[1.5rem]'}`}>
      <div className={`${!isExpanded && 'shadow-md bg-[#835a36] bg-opacity-50 rounded-2xl p-5'} mx-auto`}>
        <div className="relative -top-8">
          <img
            src={item.image}
            alt={item.title}
            className={`m-auto max-w-full h-auto scale-[1.2] ${isExpanded && 'scale-[1.5] translate-y-[4rem]'}`}
          />
        </div>
        <div className={`${isExpanded ? 'backdrop-blur-md bg-[#835a36] bg-opacity-50 rounded-2xl p-9 z-[1000] relative' : ''}`}>
          <h1 className="text-white text-[2.5rem] drop-shadow-2xl -mt-2 mb-0 font-extrabold sm:text-3xl">
            {item.title}
          </h1>
          <p className="text-white drop-shadow-2xl sm:text-sm ml-1">
            {isExpanded ? fullText : `${fullText.slice(0, maxLength)}...`}
            {!isExpanded && (
              <button 
                className="text-deep-mahogany ml-1 font-bold uppercase"
                onClick={() => toggleReadMore(item.id)}
              >
                {expandedItems[item.id] ? 'Read less' : 'Read more'}
              </button>
            )}
          </p>
          {isExpanded && (
            <p className="text-white font-bold mt-2 text-3xl">
             ${item.price.toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </SwiperSlide>
  );

  if (isExpanded) {
    return (
      <div className="mt-[1.5rem] w-[95%] md:w-[80%] lg:w-[80%] mx-auto">
        {renderSlide(items[activeIndex])}
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

export default CartItems;
