import Books from "../components/Books";
import ContactSection from "../components/ContactSection";
import CounterSection from "../components/CounterSection";
import NewReleaseBook from "../components/NewRelaseBook";
import HeroBanner from "../components/ui/HeroBanner";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <Books />
      <NewReleaseBook />
      <CounterSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
