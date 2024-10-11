import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';
// eslint-disable-next-line react/prop-types
function CartItems({ category }) {
  const [expandedItems, setExpandedItems] = useState({});
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Here you would typically fetch data based on the category
    // For this example, we'll just use mock data
    setItems([
      { id: 1, image: '/assets/images/Coffee.png', title: category },
      { id: 2, image: '/assets/images/Coffee.png', title: category },
      { id: 3, image: '/assets/images/Coffee.png', title: category },
      { id: 4, image: '/assets/images/Coffee.png', title: category },
    ]);
  }, [category]);

  const fullText =
    "sequatur, t Lorem ipsum dolor sit amet.Lorem amet conse sit amet consectetur?";
  const maxLength = 50;

  const toggleReadMore = (id) => {
    setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Swiper
      effect={'coverflow'}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 60,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false,
      }}
      modules={[EffectCoverflow]}
      className="mt-[1.5rem] w-[63%] md:w-[78%] lg:w-[75%] transition-all duration-300"
    >
      {items.map((item) => (
        <SwiperSlide key={item.id} className="pt-5">
          <div className="shadow-md bg-[#835a36] bg-opacity-50 rounded-2xl p-5 mx-auto w-full ">
            <div className="relative -top-7">
              <img
                src={item.image}
                alt={item.title}
                className="m-auto max-w-full h-auto scale-[1.2]"
              />
            </div>
            <div>
              <h1 className="text-soft-cream text-[2.5rem] drop-shadow-2xl -mt-2 mb-0  font-extrabold sm:text-3xl">
                {item.title}
              </h1>
              <p className=" text-soft-cream drop-shadow-2xl sm:text-sm ml-1">
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
