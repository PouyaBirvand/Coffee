import { HashIcon } from '../../components/Icons';
import { motion } from 'framer-motion';
export default function TableNumberInput({ tableNumber, setTableNumber }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="relative mb-6"
    >
      <span className="absolute right-6 -top-3">
        <HashIcon />
      </span>
      <motion.input
        dir="rtl"
        whileFocus={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="bg-translucent-coffee/30 p-3 placeholder-dark-cocoa rounded-lg outline-none py-3 pl-7 w-full xs:text-sm border-solid border-red-900 border-separate focus:ring-2 focus:ring-dark-cocoa/50"
        type="tel"
        pattern="[0-9]*"
        placeholder="برای مثال 12 ..."
        value={tableNumber}
        onChange={e => setTableNumber(e.target.value)}
        aria-label="شماره میز"
        required
      />
    </motion.div>
  );
}
