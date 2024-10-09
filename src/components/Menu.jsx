import { motion } from "framer-motion";
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
      <nav className="p-5">
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
  <div className="flex items-center space-x-2 border-b border-opacity-30 border-dark-cocoa pb-4">
    <img src="/assets/images/ph_coffee-light.png" alt="coffee" className="w-8 h-8" />
    <h2 className="text-[1.3rem] text-dark-cocoa font-bold text-center relative top-1 tracking-wide">
      Frisky coffee
    </h2>
    <button onClick={closeMenu} className="text-dark-cocoa">
      <img src="/assets/images/Exit.png" alt="" className="ml-20" />
    </button>
  </div>
);

const QuickAccess = () => {
  const items = ['shakes', 'ice cream', 'desserts', 'coffee', 'food'];
  return (
    <>
      <p className="mt-1 text-[0.8rem]">Quick access</p>
      <ul className="border-b border-opacity-30 pb-1 border-dark-cocoa">
        {items.map((item, index) => (
          <li key={index} className="group">
            <a className={`relative block ml-2 px-4 py-2 ${item === 'coffee' ? 'bg-dark-cocoa text-white' : 'hover:bg-dark-cocoa hover:text-white'} rounded-xl`}>
              <div className={`absolute w-8 h-[2.5rem] -left-10 bottom-0 rounded-xl bg-dark-cocoa ${item === 'coffee' ? '' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-[0.3]`}></div>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

const SocialMedia = () => {
  const items = ['09122345678', '@friske_coffee', '@friske_coffee', '@friske_coffee'];
  return (
    <>
      <p className="mt-1 text-[0.8rem]">Social media</p>
      <ul className="flex gap-4 flex-wrap mt-3 -pl-8 justify-center border-b border-opacity-30 pb-6 border-dark-cocoa">
        {items.map((item, index) => (
          <li key={index}>
            <a className="text-white bg-deep-mahogany opacity-70 py-[0.4rem] px-4 text-xs rounded-3xl">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

const Others = () => {
  const items = ['orders', 'about us'];
  return (
    <>
      <p className="mt-4 pt-1 text-sm">Others</p>
      <ul className="flex gap-1 flex-wrap justify-center flex-col pl-12 border-b border-opacity-30 pb-1 border-dark-cocoa">
        {items.map((item, index) => (
          <li key={index}>
            <a className="text-dark-cocoa text-[1.1rem]">{item}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menu;
