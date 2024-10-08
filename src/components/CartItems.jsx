import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';

function CartItems() {
  const [expandedItems, setExpandedItems] = useState({});

  const fullText =
    "sequatur, t Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, aliquam?";
  const maxLength = 80;

  const items = [
    { id: 1, image: '/assets/images/Coffe1.png', title: 'Coffee' },
    { id: 2, image: '/assets/images/Coffe1.png', title: 'Coffee' },
    { id: 3, image: '/assets/images/Coffe1.png', title: 'Coffee' },
    { id: 4, image: '/assets/images/Coffe1.png', title: 'Coffee' },
  ];

  const toggleReadMore = (id) => {
    setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Swiper
      effect={'coverflow'}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 70,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false,
      }}
      modules={[EffectCoverflow]}
      className="mt-[1.7rem] pt-5"
    >
      {items.map((item) => (
        <SwiperSlide key={item.id} className="w-[60%] md:w-[80%] transition-all duration-300">
          <div className="shadow-md bg-[#835a36] bg-opacity-50 rounded-2xl p-5 mx-auto w-full ">
            <div className="relative -top-7">
              <img
                src={item.image}
                alt="coffee"
                className="m-auto max-w-full h-auto scale-[1.2]"
              />
            </div>
            <div>
              <h1 className="text-soft-cream text-[2.5rem] -mt-2 mb-0 font-serif font-extrabold sm:text-3xl">
                {item.title}
              </h1>
              <p className=" text-soft-cream  sm:text-sm ml-1">
                {expandedItems[item.id] ? fullText : `${fullText.slice(0, maxLength)}...`}
                <button 
                  className="text-deep-mahogany ml-1 font-bold uppercase"
                  onClick={() => toggleReadMore(item.id)}
                >
                  {expandedItems[item.id] ? 'Read less' : 'Read more'}
                </button>
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CartItems;