import { Outlet } from "react-router-dom";
import Books from "../components/Books";
import HeroBanner from "../components/ui/HeroBanner";
import Navbar from "../components/ui/Navbar";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <Books />
      <Footer />
    </div>
  );
}
