import { motion } from 'framer-motion';
import { TableIcon } from '../../components/Icons';
export default function FormHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-center mb-4"
    >
      <div className="flex justify-center gap-2 mb-4">
        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
          <TableIcon />
        </motion.div>
        <p className="text-base text-center font-medium text-deep-mahogany xs:text-sm">
          کافه کهن
        </p>
      </div>
      <h2 className="text-2xl sm:text-lg md:text-[1.3rem] xs:text-base text-dark-cocoa text-center font-extrabold">
        اول, شماره میز خود را وارد کنید
      </h2>
    </motion.div>
  );
}
