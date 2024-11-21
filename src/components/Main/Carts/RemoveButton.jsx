import { motion } from "framer-motion";
import { CartIcons } from "./CartIcons";
import { useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
function RemoveButton({ onRemove }) {
  const [isRemoving, setIsRemoving] = useState(false);
    const lastRemoveTime = useRef(0);
    const COOLDOWN_TIME = 2000; // 1 ثانیه فاصله بین هر درخواست

    const handleRemove = async () => {
        const now = Date.now();
        if (now - lastRemoveTime.current < COOLDOWN_TIME) return;
        
        setIsRemoving(true);
        lastRemoveTime.current = now;
        await onRemove();
        setIsRemoving(false);
    };


  return (
      <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleRemove}
          className={`pb-2 ${isRemoving ? 'opacity-50' : ''}`}
      >
          {isRemoving ? (
              <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="w-4 h-4 border-2 border-dark-cocoa border-t-transparent rounded-full"
              />
          ) : (
              CartIcons.deleteIcon
          )}
      </motion.div>
  );
}
export default RemoveButton