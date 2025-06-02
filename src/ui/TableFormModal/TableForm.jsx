import { useTableManagement } from '../../hooks/useTableManagement';
import { motion, AnimatePresence } from 'framer-motion';
import FormContent from './FormContent';

function TableForm() {
  const { showForm, tableNumber, setTableNumber, handleSubmit, isLoading } =
    useTableManagement();

  return (
    <AnimatePresence>
      {showForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[2001]"
        >
          <motion.form
            onSubmit={e => {
              e.preventDefault();
              handleSubmit();
            }}
            initial={{ y: '50%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '50%', opacity: 0 }}
            transition={{
              type: 'tween',
              duration: 0.4,
              ease: [0.32, 0.72, 0, 1],
            }}
            className="bg-body w-full  max-w-md rounded-[2rem] relative min-h-[50vh] touch-pan-y mx-4 md:mx-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-dark-cocoa/20 rounded-full" />

            <FormContent
              tableNumber={tableNumber}
              setTableNumber={setTableNumber}
              isLoading={isLoading}
            />
          </motion.form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default TableForm;
