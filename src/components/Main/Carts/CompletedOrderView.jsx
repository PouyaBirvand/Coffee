import { motion } from 'framer-motion';
import { CartIcons } from './CartIcons';

function CompletedOrderView({ items, formatPrice }) {
  const totalAmount = items.reduce(
    (total, item) =>
      total + Number(item.product?.price || item.price) * item.quantity,
    0
  );

  return (
    <div className="flex flex-col items-center">
      <div className="text-center mt-2 mb-8 sm:mt-8 sm:mb-2">
        <h2 className="text-lg font-bold text-dark-cocoa sm:text-base xs:text-sm">
          سفارش شما با موفقیت ثبت شد
        </h2>
        <p className="text-deep-mahogany mt-2 sm:mb-2 mb-8 text-sm sm:text-xs">
          سفارش شما حدود ۲۰ دقیقه دیگر آماده می‌شود
        </p>
      </div>

      <motion.div className="-mt-[2rem] scale-[1.02] w-[92%] mx-auto sm:mt-[1rem] h-[22rem] overflow-y-auto relative z-[1] custom-scrollbar">
        {items.map(item => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-translucent-coffee bg-opacity-40 rounded-2xl p-4 mb-4 flex items-start gap-3 shadow-lg w-full"
          >
            <div className="w-[120px] h-[120px] flex-shrink-0 sm:w-[100px] sm:h-[100px] xs:w-[90px] xs:h-[90px]">
              <motion.img
                src="/coffee.png"
                alt={item.product?.title || item.title}
                className="w-full h-full object-contain bg-translucent-coffee bg-opacity-40 rounded-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            </div>

            <div className="flex-1 min-w-0">
              <h2 className="text-base font-semibold text-dark-cocoa truncate sm:text-sm">
                {item.product?.title || item.title}
              </h2>

              <p className="text-white text-xs mt-1 truncate">
                {(item.product?.description || item.description) &&
                  (item.product?.description || item.description)
                    .split(' ')
                    .slice(0, 3)
                    .join(' ') + '...'}
              </p>

              <p className="text-deep-mahogany font-bold text-base mt-1 flex items-center gap-2 sm:text-sm">
                <span>
                  {formatPrice(item.product?.price || item.price)} تومان
                </span>
                {item.discount && (
                  <span className="text-green-400 text-xs">
                    تخفیف {item.discount * 100}%
                  </span>
                )}
              </p>

              <div className="flex items-center gap-1 mt-2">
                <span className="text-dark-cocoa text-sm">تعداد:</span>
                <span className="text-dark-cocoa font-semibold text-sm">
                  {item.quantity}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-[2.5rem] !mx-auto w-[27rem] md:w-[80%] z-[1] bg-translucent-coffee bg-opacity-40 shadow-md p-4 rounded-2xl sm:bottom-[5.5rem]"
      >
        <div className="w-[95%] mx-auto">
          <div className="flex justify-between items-center text-deep-mahogany font-bold">
            <div className="flex items-center gap-1">
              {CartIcons.totalAmountIcon}
              <span className="text-base xs:text-sm">مبلغ کل:</span>
            </div>
            <motion.span
              key={totalAmount}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="text-lg xs:text-base"
            >
              {formatPrice(totalAmount)} تومان
            </motion.span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default CompletedOrderView;
