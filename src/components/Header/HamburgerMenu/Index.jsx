import { AnimatePresence, motion } from "framer-motion";
import MenuHeader from "./MenuHeader";
import QuickAccess from "./QuickAccess";
import SocialMedia from "./SocialMedia";
import Others from "./Other";

// eslint-disable-next-line react/prop-types
const Menu = ({ closeMenu }) => (
  <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black z-[1000] transform-gpu"
      onClick={closeMenu}
    />
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ 
        duration: 0.3,
        ease: "easeInOut"
      }}
      className="fixed left-0 top-0 h-full w-[21rem] bg-body shadow-md z-[3000] rounded-r-[2.8rem] transform-gpu"
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

export default Menu;
