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
  <div className="flex items-center space-x-2 border-b border-opacity-30 border-dark-cocoa pb-3 mt-2">
    <svg  className="w-7 h-7 object-cover text-dark-cocoa" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 23H10.6787M10.6787 23H10.8213M10.6787 23C8.37047 22.9812 6.16314 22.051 4.53757 20.4121C2.91201 18.7732 1.99992 16.5584 2 14.25V9.15375C2 8.51625 2.51625 8 3.15375 8H18.3462C18.9837 8 19.5 8.51625 19.5 9.15375V9.25M10.8213 23H19.5M10.8213 23C13.1295 22.9812 15.3369 22.051 16.9624 20.4121C18.588 18.7732 19.5001 16.5584 19.5 14.25M19.5 9.25H21.375C22.2038 9.25 22.9987 9.57924 23.5847 10.1653C24.1708 10.7513 24.5 11.5462 24.5 12.375C24.5 13.2038 24.1708 13.9987 23.5847 14.5847C22.9987 15.1708 22.2038 15.5 21.375 15.5H19.5V14.25M19.5 9.25V14.25M15.75 1.75L14.5 4.25M12 1.75L10.75 4.25M8.25 1.75L7 4.25" stroke="#412F26" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    <h2 className="text-[1.3rem] text-deep-mahogany font-bold text-center relative top-1 tracking-wide">
      Frisky coffee
    </h2>
    <button onClick={closeMenu} className="text-dark-cocoa">
      <svg
        className="w-6 h-6  relative top-[0.1rem] left-[6.3rem]"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18 17.94 6M18 18 6.06 6"
        />
      </svg>
    </button>
  </div>
);

const QuickAccess = () => {
  const items = ["shakes", "ice cream", "desserts", "coffee", "food"];

  const images = [
    "/assets/images/menusoftdrink.png",
    "/assets/images/menuicecream.png",
    "/assets/images/menudrink.png",
    "/assets/images/menucoffee.png",
    "/assets/images/menupizza.png",
  ];

  const activeImages = [
    { src: "/assets/images/hugeicons_soft-drink-01.png", alt: "Soft Drinks" },
    { src: "/assets/images/ph_ice-cream-light.png", alt: "iceCreams" },
    { src: "/assets/images/hugeicons_drink.png", alt: "Drinks" },
    { src: "/assets/images/ph_coffee-light.png", alt: "Coffee" },
    { src: "/assets/images/fluent_food-pizza-20-regular.png", alt: "Pizza" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <p className="mt-1 text-[0.8rem]">Quick access</p>
      <ul className="border-b border-opacity-30 pb-1 border-dark-cocoa">
        {items.map((item, index) => {
          const isCoffee = item === "coffee";
          const isActive = hoveredIndex === index || isCoffee;

          return (
            <li key={index} className="group">
              <a
                className={`relative flex items-center ml-2 px-4 py-2 ${
                  isCoffee
                    ? "bg-dark-cocoa text-white"
                    : "hover:bg-dark-cocoa hover:text-white"
                } rounded-xl`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`absolute w-8 h-[2.5rem] -left-10 bottom-0 rounded-xl bg-dark-cocoa ${
                    isCoffee ? "" : "opacity-0 group-hover:opacity-100"
                  } transition-opacity duration-[0.3]`}
                ></div>
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
    { text: "09122345678", icon: "/assets/images/menuwhatsapp.png" },
    { text: "@friske_coffee", icon: "/assets/images/menuinstagram.png" },
    { text: "@friske_coffee", icon: "/assets/images/menutelegram.png" },
    { text: "@friske_coffee", icon: "/assets/images/menulinkdin.png" },
  ];

  return (
    <>
      <p className="mt-1 text-[0.8rem]">Social media</p>
      <ul className="flex gap-4 flex-wrap mt-3 -pl-8 justify-center border-b border-opacity-30 pb-6 border-dark-cocoa">
        {items.map((item, index) => (
          <li key={index}>
            <a className="text-white bg-dark-cocoa opacity-60 py-[0.5rem] px-4 text-xs rounded-3xl flex items-center">
              <img
                src={item.icon}
                alt=""
                className="w-[1.1rem] h-[1.1rem] mr-2 scale-[2.3] relative right-2"
              />
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
    { text: "orders", icon: "/assets/images/menubasketicon.png" },
    { text: "about us", icon: "/assets/images/menuabout.png" },
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
