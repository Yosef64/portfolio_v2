import { motion } from "framer-motion";

type AnimationChildrentProps = {
  children: React.ReactNode;
};

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
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  );
}

export function SuccessMessageTransition({
  children,
}: AnimationChildrentProps) {
  const notificationVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: 100, opacity: 0 },
  };
  return (
    <motion.div
      className="fixed bottom-0 right-0 h-12 w-12 "
      variants={notificationVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export function ResponsiveNavbarTransition({
  children,
}: AnimationChildrentProps) {
  const notificationVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: 100, opacity: 0 },
  };
  return (
    <motion.div
      variants={notificationVariants}
      initial="hidden"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}>
      {children}
    </motion.div>
  );
}
