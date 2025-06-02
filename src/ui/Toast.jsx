import { motion, AnimatePresence } from 'framer-motion';

export function Toast({ message, isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed top-6 right-6 z-50"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-olive-green via-warm-wood to-deep-mahogany opacity-50 blur rounded-lg"></div>
            <div className="absolute -inset-[2px] bg-gradient-to-r from-soft-cream/20 to-translucent-coffee/20 blur-sm rounded-lg"></div>

            <div className="relative bg-gradient-to-r from-dark-cocoa/95 to-warm-wood/95 px-6 py-4 rounded-lg backdrop-blur-md">
              <div className="flex items-center gap-3 min-w-[200px]">
                <div className="relative">
                  <div className="absolute inset-0 bg-olive-green blur-sm rounded-full animate-pulse"></div>
                  <div className="relative bg-gradient-to-tr from-olive-green to-translucent-coffee rounded-full p-2">
                    <svg
                      className="w-5 h-5 text-soft-cream"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>

                <div className="relative">
                  <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-soft-cream to-soft-cream/90 text-sm">
                    {message}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
