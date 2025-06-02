import { motion } from 'framer-motion';
export default function SubmitButton({ isLoading }) {
  return (
    <motion.button
      type="submit"
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
      disabled={isLoading}
      className={`w-full bg-dark-cocoa text-white py-3 rounded-xl font-semibold text-lg shadow-xl shadow-dark-cocoa/20 relative transition-all hover:bg-dark-cocoa/90 ${
        isLoading ? 'opacity-90 cursor-not-allowed' : ''
      }`}
    >
      {isLoading ? (
        <div className="flex items-center justify-center gap-2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
          />
          <span>در حال ارسال...</span>
        </div>
      ) : (
        'تایید'
      )}
    </motion.button>
  );
}
