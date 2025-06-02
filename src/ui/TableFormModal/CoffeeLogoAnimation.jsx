import { motion } from 'framer-motion';
export default function CafeLogoAnimation() {
  return (
    <div className="relative mb-8 w-24 h-24 flex justify-center items-center mx-auto">
      <motion.div
        initial={{ scale: 0.5, y: 10 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring' }}
        className="w-24 h-24 mx-auto"
      >
        <div className="w-full h-full rounded-[1.5rem] rotate-12 absolute" />
        <div className="w-full h-full rounded-[1.5rem] -rotate-12 absolute" />
        <div className="w-full h-full rounded-[1.5rem] flex items-center justify-center relative">
          <img
            className="rounded-full w-full mt-5 scale-[1.2]"
            src="./icon.jpg"
            alt="Cafe Kohan Logo"
          />
        </div>
      </motion.div>
    </div>
  );
}
