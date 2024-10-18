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
      className="fixed inset-0 bg-black z-[1000]"
      onClick={closeMenu}
    />
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className="fixed left-0 top-0 h-full w-[21rem] bg-body shadow-md z-[3000] rounded-r-[2.8rem]"
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
        style={{
          width: "35px",
          height: "35px",
          position: "relative",
          top: "0.2rem",
          left: "5.3rem",
        }}
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
      name: "Ice creams",
      route: "Icecreams",
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
      name: "Dessert",
      route: "Dessert",
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
      name: "Shake",
      route: "Shake",
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
      name: "Foods",
      route: "Foods",
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
    const currentItem = items.find((item) => item.route === currentPath);
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
                      isActive
                        ? "text-white"
                        : "text-dark-cocoa group-hover:text-white"
                    } transition-colors duration-300`,
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
      gradient: "from-[#9CEC6D] to-[#0F9916]",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.4256 3.72562C17.4702 2.76311 16.3331 2.00015 15.0802 1.48111C13.8273 0.962064 12.4838 0.697301 11.1277 0.702216C9.31475 0.703985 7.5341 1.18204 5.96406 2.08852C4.39402 2.99499 3.08969 4.29807 2.18171 5.86724C1.27373 7.43641 0.793965 9.2166 0.790456 11.0295C0.786948 12.8425 1.25982 14.6245 2.16172 16.1972L0.702148 21.5533L6.17555 20.1198C7.6863 20.9622 9.38495 21.4104 11.1146 21.423C13.8639 21.4231 16.502 20.3372 18.4545 18.4017C20.4071 16.4662 21.5161 13.8378 21.5402 11.0887C21.531 9.71679 21.2512 8.36022 20.7167 7.09672C20.1822 5.83322 19.4036 4.68763 18.4256 3.72562ZM11.1277 19.6376C9.58707 19.6373 8.07481 19.2232 6.74896 18.4387L6.43619 18.2432L3.19124 19.1033L4.05135 15.9365L3.84284 15.6107C2.73415 13.821 2.32038 11.6868 2.6799 9.61243C3.03943 7.53806 4.14728 5.66759 5.79359 4.35536C7.4399 3.04313 9.51032 2.38028 11.6126 2.49239C13.7149 2.6045 15.7031 3.48378 17.2006 4.96365C18.8374 6.56422 19.7744 8.74743 19.8069 11.0365C19.7863 13.3248 18.8628 15.5124 17.2374 17.1232C15.6119 18.734 13.4161 19.6377 11.1277 19.6376ZM15.8322 13.1998C15.5716 13.0695 14.3075 12.444 14.0729 12.3658C13.8383 12.2876 13.6559 12.2355 13.4865 12.4961C13.2315 12.8455 12.9574 13.1805 12.6654 13.4996C12.5221 13.682 12.3657 13.695 12.1051 13.4996C10.6191 12.9123 9.381 11.8307 8.59949 10.4371C8.32582 9.98094 8.86013 10.007 9.35534 9.02961C9.3919 8.95915 9.41098 8.88093 9.41098 8.80155C9.41098 8.72217 9.3919 8.64395 9.35534 8.57349C9.35534 8.44317 8.7689 7.16604 8.56039 6.6578C8.35188 6.14956 8.14337 6.22775 7.97396 6.21471H7.46571C7.33388 6.21588 7.20387 6.24562 7.08463 6.30186C6.9654 6.3581 6.85977 6.43952 6.77502 6.54051C6.4833 6.82535 6.25568 7.16913 6.10736 7.54892C5.95904 7.9287 5.89344 8.33575 5.91491 8.74291C5.9951 9.71815 6.36242 10.6478 6.9705 11.4144C8.08153 13.0766 9.60336 14.4234 11.3883 15.324C12.3246 15.8706 13.4128 16.0992 14.4899 15.9756C14.8486 15.9044 15.1883 15.7586 15.4869 15.5475C15.7855 15.3365 16.0364 15.065 16.2232 14.7506C16.3978 14.3674 16.4523 13.9404 16.3795 13.5256C16.2623 13.3953 16.0928 13.3301 15.8322 13.1998Z"
            fill="#FFF8F8"
          />
        </svg>
      ),
    },
    {
      text: "@friske_coffee",
      gradient: "from-[#F7A153] to-[#DF3035]",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <g fill="none" stroke="currentColor" strokeWidth="1.5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
            />
            <path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m17.5 6.51l.01-.011"
            />
          </g>
        </svg>
      ),
    },
    {
      text: "@friske_coffee",
      gradient: "from-[#06CDD3] to-[#0960C6]",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m11.985 15.408l3.242 3.686c1.2 1.365 1.801 2.048 2.43 1.881c.628-.166.844-1.064 1.275-2.861l2.39-9.968c.665-2.768.997-4.151.259-4.834s-2.017-.175-4.575.84L5.14 8.865c-2.046.813-3.069 1.219-3.134 1.917a1 1 0 0 0 0 .214c.063.699 1.084 1.108 3.128 1.927c.925.371 1.388.557 1.72.912q.056.06.108.124c.306.38.436.88.697 1.876l.489 1.867c.253.97.38 1.456.713 1.522s.622-.336 1.201-1.141zm0 0l-.317-.33c-.362-.378-.543-.566-.543-.8s.18-.423.543-.8l3.573-3.724"
          />
        </svg>
      ),
    },
    {
      text: "@friske_coffee",
      gradient: "from-[#9894EC] to-[#8616AD]",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <g fill="currentColor">
            <path
              fillRule="evenodd"
              d="M12.51 8.796v1.697a3.74 3.74 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766c-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483a1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.6 1.6 0 0 1 1.6 1.606"
              clipRule="evenodd"
            />
            <path d="M7.2 8.809H4V19.5h3.2z" />
          </g>
        </svg>
      ),
    },
  ];

  return (
    <>
      <p className="mt-1 text-[0.8rem]">Social media</p>
      <ul className="flex flex-wrap justify-center border-b border-opacity-30 mt-1 pb-4 border-dark-cocoa  gap-x-4 gap-y-3">
        {items.map((item, index) => (
          <li key={index}>
            <a className="text-white text-xs rounded-3xl flex items-center  bg-dark-cocoa bg-opacity-60 px-2">
              <div
                className={`w-9 h-9 rounded-full bg-gradient-to-br ${item.gradient}  flex items-center justify-center relative right-2 scale-[1.1]`}
              >
                {cloneElement(item.icon, {
                  className: "w-6 h-6 text-white",
                })}
              </div>
              <div className="relative right-[0.2rem]">{item.text}</div>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

const Others = () => {
  const items = [
    {
      text: "orders",
      icon: (
        <svg
          viewBox="0 0 24.00 24.00"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#412f26 "
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M3.5 4.5H5.05848C5.7542 4.5 6.10206 4.5 6.36395 4.68876C6.62584 4.87752 6.73584 5.20753 6.95585 5.86754L7.5 7.5"
              stroke="#412f26 "
              strokeLinecap="round"
            ></path>{" "}
            <path
              d="M17.5 17.5H8.05091C7.90471 17.5 7.83162 17.5 7.77616 17.4938C7.18857 17.428 6.78605 16.8695 6.90945 16.2913C6.92109 16.2367 6.94421 16.1674 6.99044 16.0287V16.0287C7.04177 15.8747 7.06743 15.7977 7.09579 15.7298C7.38607 15.0342 8.04277 14.5608 8.79448 14.5054C8.8679 14.5 8.94906 14.5 9.11137 14.5H14.5"
              stroke="#412f26 "
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              d="M14.1787 14.5H11.1376C9.85836 14.5 9.21875 14.5 8.71781 14.1697C8.21687 13.8394 7.96492 13.2515 7.461 12.0757L7.29218 11.6818C6.48269 9.79294 6.07794 8.84853 6.52255 8.17426C6.96715 7.5 7.99464 7.5 10.0496 7.5H15.3305C17.6295 7.5 18.779 7.5 19.2126 8.24711C19.6462 8.99422 19.0758 9.99229 17.9352 11.9884L17.6517 12.4846C17.0897 13.4679 16.8088 13.9596 16.3432 14.2298C15.8776 14.5 15.3113 14.5 14.1787 14.5Z"
              stroke="#412f26 "
              strokeLinecap="round"
            ></path>{" "}
            <circle cx="17" cy="20" r="1" fill="#412f26 "></circle>{" "}
            <circle cx="9" cy="20" r="1" fill="#412f26 "></circle>{" "}
          </g>
        </svg>
      ),
    },
    {
      text: "about us",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#412f26"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <p className="mt-1 pt-1 text-sm">Others</p>
      <ul className="flex gap-1 flex-col pl-5 border-b border-opacity-30 pb-2 mt-1 border-dark-cocoa">
        {items.map((item, index) => (
          <li key={index}>
            <a className="text-dark-cocoa text-[1.1rem] flex items-center">
              <span className="w-[2rem] h-[2rem] mr-2 flex items-center justify-center">
                {item.icon}
              </span>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menu;
