import { motion } from 'framer-motion';
import CafeLogoAnimation from './CoffeeLogoAnimation';
import FormHeader from './FormHeader';
import TableNumberInput from './TableNumberInput';
import FormInfo from './FormInfo';
import SubmitButton from './SubmitButton';
export default function FormContent({
  tableNumber,
  setTableNumber,
  isLoading,
}) {
  return (
    <motion.div
      className="p-8 pt-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <CafeLogoAnimation />

      <FormHeader />

      <TableNumberInput
        tableNumber={tableNumber}
        setTableNumber={setTableNumber}
      />

      <FormInfo />

      <SubmitButton isLoading={isLoading} />
    </motion.div>
  );
}
