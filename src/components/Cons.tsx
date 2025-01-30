import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Cons() {
  return (
    <div className="w-full">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
