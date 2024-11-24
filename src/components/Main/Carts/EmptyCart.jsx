import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

export default function EmptyCart() {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-[70vh] flex flex-col items-center justify-center p-6"
    >
      {/* Coffee Steam Animation */}
      <div className="relative">
        <motion.div
          animate={{
            y: [-10, -20, -10],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-1 h-8 bg-gradient-to-t from-deep-mahogany/20 to-transparent rounded-full" />
        </motion.div>

        {/* Coffee Cup SVG */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 1 }}
          className="relative"
        >
          <svg width="96" height="96" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-deep-mahogany">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 1v3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 1v3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 1v3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          {/* Shopping Bag SVG */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -right-4 -bottom-4"
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-dark-cocoa/50">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 6h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 10a4 4 0 0 1-8 0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mt-12 space-y-6"
      >
        <h2 className="text-3xl font-bold text-deep-mahogany">Your Coffee Cart is Empty</h2>
        <p className="text-dark-cocoa/80 max-w-md mx-auto">
          Time for a coffee break? Explore our handcrafted beverages and delicious treats!
        </p>
      </motion.div>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/menu" , {replace: true})}
          className="px-8 py-3 bg-deep-mahogany text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
        >
          View Menu
        </motion.button>
      </div>

      {/* Coffee Bean SVG Pattern */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden opacity-10">
        <motion.div
          animate={{
            x: [-100, 100],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="flex gap-8"
        >
          {[...Array(10)].map((_, i) => (
            <svg key={i} width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-deep-mahogany">
              <path d="M12 1C8.14 1 5 4.14 5 8a7 7 0 0 0 7 7 7 7 0 0 0 7-7c0-3.86-3.14-7-7-7zm0 13a6 6 0 1 1 6-6 6 6 0 0 1-6 6z"/>
            </svg>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
