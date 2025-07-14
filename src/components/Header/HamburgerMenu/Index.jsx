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
      className="fixed right-0 top-0 w-full h-full bg-warm-gradient shadow-md z-[3000] transform-gpu"
    >
      <nav className="p-5 pt-8 h-full flex flex-col">
        <MenuHeader closeMenu={closeMenu} />
        <QuickAccess closeMenu={closeMenu} />
        <SocialMedia />
        <Others />
      </nav>
    </motion.div>
  </>
);

export default Menu;
