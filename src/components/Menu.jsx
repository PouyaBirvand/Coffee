import { motion } from "framer-motion";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
const Menu = ({ closeMenu }) => (
  <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black z-[999]"
      onClick={closeMenu}
    />
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className="fixed left-0 top-0 h-full w-[21rem] bg-soft-cream shadow-md z-[1000] rounded-r-[2.8rem]"
    >
      <nav className="p-5 -mt-2">
        <MenuHeader closeMenu={closeMenu} />
        <QuickAccess />
        <SocialMedia />
        <Others />
      </nav>
    </motion.div>
  </>
);
// eslint-disable-next-line react/prop-types
const MenuHeader = ({ closeMenu }) => (
  <div className="flex items-center space-x-2 border-b border-opacity-30 border-dark-cocoa pb-3">
    <img src="/assets/images/menucoffee.png" alt="coffee" className="w-7 h-7 object-cover" />
    <h2 className="text-[1.3rem] text-dark-cocoa font-bold text-center relative top-1 tracking-wide">
      Frisky coffee
    </h2>
    <button onClick={closeMenu} className="text-dark-cocoa">
      <img src="/assets/images/menuexit.png" alt="" className="ml-[6.4rem] relative top-1" />
    </button>
  </div>
);


const QuickAccess = () => {
  const items = ['shakes', 'ice cream', 'desserts', 'coffee', 'food'];

  const images = [
    '/assets/images/menusoftdrink.png',
    '/assets/images/menuicecream.png',
    '/assets/images/menudrink.png',
    '/assets/images/menucoffee.png',
    '/assets/images/menupizza.png'
  ];

  const activeImages = [
    { src: "/assets/images/hugeicons_soft-drink-01.png", alt: "Soft Drinks" },
    { src: "/assets/images/ph_ice-cream-light.png", alt: "iceCreams" },
    { src: "/assets/images/hugeicons_drink.png", alt: "Drinks" },
    { src: "/assets/images/ph_coffee-light.png", alt: "Coffee"},
    { src: "/assets/images/fluent_food-pizza-20-regular.png", alt: "Pizza" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <p className="mt-1 text-[0.8rem]">Quick access</p>
      <ul className="border-b border-opacity-30 pb-1 border-dark-cocoa">
        {items.map((item, index) => {
          const isCoffee = item === 'coffee';
          const isActive = hoveredIndex === index || isCoffee;

          return (
            <li key={index} className="group">
              <a 
                className={`relative flex items-center ml-2 px-4 py-2 ${isCoffee ? 'bg-dark-cocoa text-white' : 'hover:bg-dark-cocoa hover:text-white'} rounded-xl`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`absolute w-8 h-[2.5rem] -left-10 bottom-0 rounded-xl bg-dark-cocoa ${isCoffee ? '' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-[0.3]`}></div>
                <img 
                  src={isActive ? activeImages[index].src : images[index]} 
                  alt={isActive ? activeImages[index].alt : item} 
                  className="w-6 h-6 mr-3 object-contain"
                />
                <span>{item}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const SocialMedia = () => {
  const items = [
    { text: '09122345678', icon: '/assets/images/menuwhatsapp.png' },
    { text: '@friske_coffee', icon: '/assets/images/menuinstagram.png' },
    { text: '@friske_coffee', icon: '/assets/images/menutelegram.png' },
    { text: '@friske_coffee', icon: '/assets/images/menulinkdin.png' }
  ];

  return (
    <>
      <p className="mt-1 text-[0.8rem]">Social media</p>
      <ul className="flex gap-4 flex-wrap mt-3 -pl-8 justify-center border-b border-opacity-30 pb-6 border-dark-cocoa">
        {items.map((item, index) => (
          <li key={index}>
            <a className="text-white bg-deep-mahogany opacity-70 py-[0.5rem] px-4 text-xs rounded-3xl flex items-center">
              <img src={item.icon} alt="" className="w-[1.1rem] h-[1.1rem] mr-2 scale-[2.3] relative right-2" />
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};


const Others = () => {
  const items = [
    { text: 'orders', icon: '/assets/images/menubasketicon.png' },
    { text: 'about us', icon: '/assets/images/menuabout.png' }
  ];

  return (
    <>
      <p className="mt-1 pt-1 text-sm">Others</p>
      <ul className="flex gap-3 flex-col pl-5 border-b border-opacity-30 pb-2 mt-1 border-dark-cocoa">
        {items.map((item, index) => (
          <li key={index}>
            <a className="text-dark-cocoa text-[1.1rem] flex items-center">
              <img src={item.icon} alt="" className="w-5 h-5 mr-3" />
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menu;
