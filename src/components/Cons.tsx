import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AnimatePresence, motion } from "framer-motion";
import LoadingEffect from "./TransitionEffect";

const pageVariants = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 }, 
  exit: { opacity: 0, x: -100 },
};
export default function Cons() {
  const location = useLocation();
  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        <LoadingEffect key={location.pathname} />
      </AnimatePresence>

      <AnimatePresence mode="wait">
        
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.6 }}
        >
          <Navbar />
          <Outlet /> 
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
