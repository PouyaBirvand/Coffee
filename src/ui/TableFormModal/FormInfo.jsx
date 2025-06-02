import { motion } from 'framer-motion';
import { InfoIcon } from '../../components/Icons';
export default function FormInfo() {
  return (
    <motion.div
      dir="rtl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="flex items-start mb-8"
    >
      <InfoIcon />
      <h3 className="text-base xs:text-sm text-deep-mahogany font-normal mr-2 relative bottom-1">
        سفارش شما به این میز تحویل داده می شود.
      </h3>
    </motion.div>
  );
}
