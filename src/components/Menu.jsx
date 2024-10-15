import { motion } from "framer-motion";
import { useState, useEffect, cloneElement } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
        <QuickAccess closeMenu={closeMenu} />
        <SocialMedia />
        <Others />
      </nav>
    </motion.div>
  </>
);
// eslint-disable-next-line react/prop-types
const MenuHeader = ({ closeMenu }) => (
  <div className="flex items-center space-x-2 border-b border-opacity-30 border-dark-cocoa pb-3 mt-2">
    <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 256 256"
        >
          <path
            fill="#412f26"
            d="M80 56V24a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0m40 8a8 8 0 0 0 8-8V24a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m32 0a8 8 0 0 0 8-8V24a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m96 56v8a40 40 0 0 1-37.51 39.91a96.6 96.6 0 0 1-27 40.09H208a8 8 0 0 1 0 16H32a8 8 0 0 1 0-16h24.54A96.3 96.3 0 0 1 24 136V88a8 8 0 0 1 8-8h176a40 40 0 0 1 40 40m-48-24H40v40a80.27 80.27 0 0 0 45.12 72h69.76A80.27 80.27 0 0 0 200 136Zm32 24a24 24 0 0 0-16-22.62V136a96 96 0 0 1-1.2 15a24 24 0 0 0 17.2-23Z"
          />
        </svg>

    <h2 className="text-[1.3rem] text-deep-mahogany font-bold text-center relative top-1 tracking-wide">
      Frisky coffee
    </h2>
    <button onClick={closeMenu} className="text-dark-cocoa">

      <lord-icon
      src="https://cdn.lordicon.com/nqtddedc.json"
      trigger="loop"
      delay="1000"
      colors="primary:#412f26"
      style={{ width: '35px', height: '35px' , position: 'relative' , top: '0.2rem' , left: '5.3rem' }}
    />
    </button>
  </div>
);
// eslint-disable-next-line react/prop-types
const QuickAccess = ({ closeMenu }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("Coffee");

  const items = [
    {
      name: "Ice Creams",
      route: "IceCreams",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M206 98.83V96a78 78 0 0 0-156 0v2.83A22 22 0 0 0 56 142h4.45l55.39 97a14 14 0 0 0 24.32 0l55.39-97H200a22 22 0 0 0 6-43.17M129.74 233a2 2 0 0 1-3.48 0l-52-91h24L140 215.06Zm6.26-91l22.89 40.06l-12 20.91l-34.84-61Zm29.8 28l-16-28h32Zm34.2-40H56a10 10 0 0 1 0-20a6 6 0 0 0 6-6v-8a66 66 0 0 1 132 0v8a6 6 0 0 0 6 6a10 10 0 0 1 0 20"
          />
        </svg>
      ),
    },
    {
      name: "Drinks",
      route: "Drinks",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="currentColor"
            d="M768 64a192 192 0 1 1-69.952 370.88L480 725.376V896h96a32 32 0 1 1 0 64H320a32 32 0 1 1 0-64h96V725.376L76.8 273.536a64 64 0 0 1-12.8-38.4v-10.688a32 32 0 0 1 32-32h71.808l-65.536-83.84a32 32 0 0 1 50.432-39.424l96.256 123.264h337.728A192.06 192.06 0 0 1 768 64M656.896 192.448H800a32 32 0 0 1 32 32v10.624a64 64 0 0 1-12.8 38.4l-80.448 107.2a128 128 0 1 0-81.92-188.16v-.064zm-357.888 64l129.472 165.76a32 32 0 0 1-50.432 39.36l-160.256-205.12H144l304 404.928l304-404.928z"
          />
        </svg>
      ),
    },
    {
      name: "Soft Drinks",
      route: "SoftDrinks",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12 7V4.348c0-2.187.374-2.716 2.497-2.12L18 3.21M6 7l1.14 11.16c.171 1.677.257 2.515.828 3.021c1.178 1.044 6.78 1.139 8.064 0c.571-.506.657-1.344.828-3.02L18 7M5 7h14M7 12h10M7 16h10"
          />
        </svg>
      ),
    },
    {
      name: "Coffee",
      route: "Coffee",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M80 56V24a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0m40 8a8 8 0 0 0 8-8V24a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m32 0a8 8 0 0 0 8-8V24a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m96 56v8a40 40 0 0 1-37.51 39.91a96.6 96.6 0 0 1-27 40.09H208a8 8 0 0 1 0 16H32a8 8 0 0 1 0-16h24.54A96.3 96.3 0 0 1 24 136V88a8 8 0 0 1 8-8h176a40 40 0 0 1 40 40m-48-24H40v40a80.27 80.27 0 0 0 45.12 72h69.76A80.27 80.27 0 0 0 200 136Zm32 24a24 24 0 0 0-16-22.62V136a96 96 0 0 1-1.2 15a24 24 0 0 0 17.2-23Z"
          />
        </svg>
      ),
    },
    {
      name: "Pizza",
      route: "Pizza",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M9 10.99a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5 1.998a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 3.998a1 1 0 1 0 0-2a1 1 0 0 0 0 2M5 4.66c0-1.497 1.23-2.805 2.82-2.648A20.78 20.78 0 0 1 21.262 8.84c1.07 1.193.737 2.964-.479 3.845c-1.582 1.148-3.94 2.857-5.283 3.833c-.002.437-.002.721-.001 1.092v.628a1.75 1.75 0 0 1-2.056 1.724c-.204.826-.932 1.527-1.944 1.527c-.7 0-1.262-.335-1.609-.815l-1.325.957c-1.488 1.074-3.57.011-3.569-1.826zm2.673-1.155c-.609-.06-1.174.443-1.174 1.155v.52a17.55 17.55 0 0 1 12.985 6.594l.419-.304c.578-.42.652-1.173.242-1.63A19.28 19.28 0 0 0 7.673 3.507m-1.177 16.3a.75.75 0 0 0 1.19.608l2.128-1.533a.75.75 0 0 1 1.188.608c0 .27.209.5.497.5a.497.497 0 0 0 .502-.5v-1.251a.75.75 0 0 1 1.5 0c0 .14.111.25.248.25a.25.25 0 0 0 .25-.25v-.622c-.001-.47-.002-.808.005-1.489a.75.75 0 0 1 .308-.6c.902-.656 2.496-1.812 3.956-2.87a16.04 16.04 0 0 0-11.77-5.974z"
          />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const currentPath = location.pathname.slice(1);
    const currentItem = items.find(item => item.route === currentPath);
    if (currentItem) {
      setActiveItem(currentItem.name);
    }
  }, [location]);

  const handleItemClick = (route, name) => {
    navigate(`/${route}`);
    setActiveItem(name);
    closeMenu();
  };

  return (
    <>
      <p className="mt-1 text-[0.8rem]">Quick access</p>
      <ul className="border-b border-opacity-30 pb-1 border-dark-cocoa">
        {items.map((item, index) => {
          const isActive = activeItem === item.name;

          return (
            <li key={index} className="group">
              <a
                className={`relative flex items-center ml-2 px-4 py-2 ${
                  isActive
                    ? "bg-dark-cocoa text-white"
                    : "hover:bg-dark-cocoa hover:text-white"
                } rounded-xl cursor-pointer`}
                onClick={() => handleItemClick(item.route, item.name)}
              >
                <div
                  className={`absolute w-8 h-[2.5rem] -left-10 bottom-0 rounded-xl bg-dark-cocoa ${
                    isActive ? "" : "opacity-0 group-hover:opacity-100"
                  } transition-opacity duration-[0.3]`}
                ></div>
                <div className="w-6 h-6 mr-3 flex items-center justify-center">
                  {cloneElement(item.icon, {
                    className: `w-6 h-6 ${
                      isActive ? "text-white" : "text-dark-cocoa group-hover:text-white"
                    } transition-colors duration-300`
                  })}
                </div>
                <span>{item.name}</span>
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
    { 
      text: "09122345678", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m11.985 15.408l3.242 3.686c1.2 1.365 1.801 2.048 2.43 1.881c.628-.166.844-1.064 1.275-2.861l2.39-9.968c.665-2.768.997-4.151.259-4.834s-2.017-.175-4.575.84L5.14 8.865c-2.046.813-3.069 1.219-3.134 1.917a1 1 0 0 0 0 .214c.063.699 1.084 1.108 3.128 1.927c.925.371 1.388.557 1.72.912q.056.06.108.124c.306.38.436.88.697 1.876l.489 1.867c.253.97.38 1.456.713 1.522s.622-.336 1.201-1.141zm0 0l-.317-.33c-.362-.378-.543-.566-.543-.8s.18-.423.543-.8l3.573-3.724" color="currentColor"/>
        </svg>
      )
    },
    { 
      text: "@friske_coffee", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"/>
            <path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z"/>
            <path strokeLinecap="round" strokeLinejoin="round" d="m17.5 6.51l.01-.011"/>
          </g>
        </svg>
      )
    },
    { 
      text: "@friske_coffee", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m11.985 15.408l3.242 3.686c1.2 1.365 1.801 2.048 2.43 1.881c.628-.166.844-1.064 1.275-2.861l2.39-9.968c.665-2.768.997-4.151.259-4.834s-2.017-.175-4.575.84L5.14 8.865c-2.046.813-3.069 1.219-3.134 1.917a1 1 0 0 0 0 .214c.063.699 1.084 1.108 3.128 1.927c.925.371 1.388.557 1.72.912q.056.06.108.124c.306.38.436.88.697 1.876l.489 1.867c.253.97.38 1.456.713 1.522s.622-.336 1.201-1.141zm0 0l-.317-.33c-.362-.378-.543-.566-.543-.8s.18-.423.543-.8l3.573-3.724" color="currentColor"/>
        </svg>
      )
    },
    { 
      text: "@friske_coffee", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <g fill="currentColor">
            <path fillRule="evenodd" d="M12.51 8.796v1.697a3.74 3.74 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766c-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483a1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.6 1.6 0 0 1 1.6 1.606" clipRule="evenodd"/>
            <path d="M7.2 8.809H4V19.5h3.2z"/>
          </g>
        </svg>
      )
    },
  ];

  return (
    <>
      <p className="mt-1 text-[0.8rem]">Social media</p>
      <ul className="flex gap-4 flex-wrap mt-3 -pl-8 justify-center border-b border-opacity-30 pb-6 border-dark-cocoa">
        {items.map((item, index) => (
          <li key={index}>
            <a className="text-dark-cocoa bg  py-[0.5rem] px-4 text-xs rounded-3xl flex items-center">
              {cloneElement(item.icon, {
                className: "w-[1.1rem] h-[1.1rem] mr-2 scale-[2] relative right-2 text-dark-cocoa"
              })}
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
