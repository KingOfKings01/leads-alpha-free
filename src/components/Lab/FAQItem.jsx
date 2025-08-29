import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedIcon } from "./AnimatedIcon";



export default function FAQItem({ question, answer, initialOpen = false }) {
  const [open, setOpen] = useState(initialOpen);

  return (
    <div className="bg-[#F9F9F9] rounded-2xl p-4 mb-4">
      {/* Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h3 className="text-sm font-semibold">{question}</h3>
        <AnimatedIcon open={open} size={30} />
      </div>

      {/* Animated Content */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="mt-6 text-[#3C434A] leading-relaxed text-[12px]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
