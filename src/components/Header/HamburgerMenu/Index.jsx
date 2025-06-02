import { motion } from 'framer-motion';
import MenuHeader from './MenuHeader';
import QuickAccess from './QuickAccess';
import SocialMedia from './SocialMedia';
import Others from './Other';

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
      initial={{ transform: 'translateX(100%)' }}
      animate={{ transform: 'translateX(0%)' }}
      exit={{ transform: 'translateX(100%)' }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
      className="fixed overflow-auto top-0 right-0 w-full h-full bg-body shadow-md z-[3000] transform-gpu"
      dir="rtl"
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
