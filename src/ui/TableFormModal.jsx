import { useEffect } from "react";
import { useTableManagement } from "../hooks/useTableManagement";
import { motion } from "framer-motion";

const CoffeeIcon = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 20 20"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.16669 18.8333H8.39898M8.39898 18.8333H8.51773M8.39898 18.8333C6.47542 18.8177 4.63597 18.0425 3.28133 16.6768C1.92669 15.311 1.16662 13.4653 1.16669 11.5417V7.29479C1.16669 6.76354 1.5969 6.33333 2.12815 6.33333H14.7886C15.3198 6.33333 15.75 6.76354 15.75 7.29479V7.375M8.51773 18.8333H15.75M8.51773 18.8333C10.4413 18.8177 12.2807 18.0425 13.6354 16.6768C14.99 15.311 15.7501 13.4653 15.75 11.5417M15.75 7.375H17.3125C18.0032 7.375 18.6656 7.64937 19.1539 8.13774C19.6423 8.62612 19.9167 9.2885 19.9167 9.97917C19.9167 10.6698 19.6423 11.3322 19.1539 11.8206C18.6656 12.309 18.0032 12.5833 17.3125 12.5833H15.75V11.5417M15.75 7.375V11.5417"
      stroke="#806044"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TableIcon = () => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="relative bottom-1"
  >
    <path
      d="M1.16669 18.8333H8.39898M8.39898 18.8333H8.51773M8.39898 18.8333C6.47542 18.8177 4.63597 18.0425 3.28133 16.6768C1.92669 15.311 1.16662 13.4653 1.16669 11.5417V7.29479C1.16669 6.76354 1.5969 6.33333 2.12815 6.33333H14.7886C15.3198 6.33333 15.75 6.76354 15.75 7.29479V7.375M8.51773 18.8333H15.75M8.51773 18.8333C10.4413 18.8177 12.2807 18.0425 13.6354 16.6768C14.99 15.311 15.7501 13.4653 15.75 11.5417M15.75 7.375H17.3125C18.0032 7.375 18.6656 7.64937 19.1539 8.13774C19.6423 8.62612 19.9167 9.2885 19.9167 9.97917C19.9167 10.6698 19.6423 11.3322 19.1539 11.8206C18.6656 12.309 18.0032 12.5833 17.3125 12.5833H15.75V11.5417M15.75 7.375V11.5417"
      stroke="#5D2510"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 2C11.3082 2 14 4.69175 14 8C14 11.3082 11.3082 14 8 14C4.69175 14 2 11.3082 2 8C2 4.69175 4.69175 2 8 2ZM8 0.5C3.85775 0.5 0.5 3.85775 0.5 8C0.5 12.1423 3.85775 15.5 8 15.5C12.1423 15.5 15.5 12.1423 15.5 8C15.5 3.85775 12.1423 0.5 8 0.5ZM8.75 10.25H7.25V11.75H8.75V10.25ZM7.25 8.75H8.75L9.125 4.25H6.875L7.25 8.75Z"
      fill="#412F26"
    />
  </svg>
);

const HashIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="relative top-2 left-3"
  >
    <path
      d="M11.625 4.15625C11.6938 4.15625 11.75 4.1 11.75 4.03125V3.09375C11.75 3.025 11.6938 2.96875 11.625 2.96875H9.0625V0.375C9.0625 0.30625 9.00625 0.25 8.9375 0.25H7.9375C7.86875 0.25 7.8125 0.30625 7.8125 0.375V2.96875H4.25V0.375C4.25 0.30625 4.19375 0.25 4.125 0.25H3.125C3.05625 0.25 3 0.30625 3 0.375V2.96875H0.375C0.30625 2.96875 0.25 3.025 0.25 3.09375V4.03125C0.25 4.1 0.30625 4.15625 0.375 4.15625H3V7.84375H0.375C0.30625 7.84375 0.25 7.9 0.25 7.96875V8.90625C0.25 8.975 0.30625 9.03125 0.375 9.03125H3V11.625C3 11.6938 3.05625 11.75 3.125 11.75H4.125C4.19375 11.75 4.25 11.6938 4.25 11.625V9.03125H7.8125V11.625C7.8125 11.6938 7.86875 11.75 7.9375 11.75H8.9375C9.00625 11.75 9.0625 11.6938 9.0625 11.625V9.03125H11.625C11.6938 9.03125 11.75 8.975 11.75 8.90625V7.96875C11.75 7.9 11.6938 7.84375 11.625 7.84375H9.0625V4.15625H11.625ZM7.8125 7.84375H4.25V4.15625H7.8125V7.84375Z"
      fill="#412F26"
    />
  </svg>
);

function TableForm() {
  const { showForm, tableNumber, setTableNumber, handleSubmit, isLoading } =
    useTableManagement();

  useEffect(() => {
    document.body.style.overflow = showForm ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showForm]);

  if (!showForm) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end z-[2001]"
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{
          type: "tween",
          duration: 0.4,
          ease: [0.32, 0.72, 0, 1],
        }}
        className="bg-body w-full rounded-t-[2.5rem] relative min-h-[50vh] touch-pan-y"
      >
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-dark-cocoa/20 rounded-full" />

        <motion.div
          className="p-8 pt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="relative mb-8 w-24 h-24 flex justify-center items-center mx-auto">
            <motion.div
              initial={{ scale: 0.5, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: "spring" }}
              className="w-24 h-24 mx-auto"
            >
              <div className="w-full h-full bg-dark-cocoa rounded-[1.5rem] rotate-12 absolute" />
              <div className="w-full h-full bg-dark-cocoa/80 rounded-[1.5rem] -rotate-12 absolute" />
              <div className="w-full h-full bg-dark-cocoa rounded-[1.5rem] flex items-center justify-center relative">
                <CoffeeIcon />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-4"
          >
            <div className="flex justify-center gap-2 mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <TableIcon />
              </motion.div>
              <p className="text-base text-center font-medium text-deep-mahogany xs:text-sm">
                Frisky coffee
              </p>
            </div>

            <h2 className="text-3xl sm:text-lg md:text-2xl xs:text-base text-dark-cocoa text-center font-extrabold">
              First, enter your table number
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative mb-6"
          >
            <HashIcon className="absolute top-3 left-3" />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-translucent-coffee/50 placeholder-dark-cocoa rounded-lg outline-none py-3 pl-7 w-full xs:text-sm"
              type="text"
              placeholder="for example : 12 ..."
              value={tableNumber}
              onChange={(e) => setTableNumber(e.target.value)}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-start mb-8"
          >
            <InfoIcon className="relative top-[0.1rem] mr-2" />
            <h3 className="text-base xs:text-sm text-deep-mahogany font-normal ml-1">
              Your order will be delivered to this table
            </h3>
          </motion.div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleSubmit}
            disabled={isLoading}
            className={`w-full bg-dark-cocoa text-white py-4 rounded-xl font-semibold text-lg shadow-xl shadow-dark-cocoa/20 relative ${
              isLoading ? "opacity-90" : ""
            }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
                <span>Submitting...</span>
              </div>
            ) : (
              "Submit"
            )}
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default TableForm;
