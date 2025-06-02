import { motion } from 'framer-motion';
const CheckMarkIcon = () => (
  <motion.svg
    width="40"
    height="40"
    viewBox="0 0 28 22"
    fill="none"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ delay: 0.2, duration: 0.8 }}
  >
    <path
      d="M2.1875 11.6875L10.0625 19.5625L25.8125 2.6875"
      stroke="#5D2510"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
);

export default CheckMarkIcon;
