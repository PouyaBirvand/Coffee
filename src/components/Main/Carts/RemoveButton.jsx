import { motion } from "framer-motion";
import { CartIcons } from "./CartIcons";
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function RemoveButton({ onRemove }) {
    return (
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onRemove}
        className="pb-2"
      >
        {CartIcons.deleteIcon}
      </motion.div>
    );
  }

  export default RemoveButton;


  RemoveButton.propTypes = {
    onRemove: PropTypes.func.isRequired,
  };