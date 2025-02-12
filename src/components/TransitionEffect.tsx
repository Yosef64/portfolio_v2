import { motion } from "framer-motion";
export default function LoadingEffect() {
  return (
    <div className="z-30">
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-t-color"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-white"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-black"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 1, ease: "easeInOut" }}
      />
    </div>
  );
}
export function ScaleTranstion({ children, className }: any) {
  return (
    <motion.div
      className={className}
      initial={{ scale: 0.8 }} // Initial state
      whileInView={{ scale: 1 }} // Animate when in view
      transition={{ duration: 0.5 }} // Animation settings
      viewport={{ once: true, margin: "-50px" }} // Viewport settings
    >
      {children}
    </motion.div>
  );
}
