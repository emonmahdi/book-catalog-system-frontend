import Books from "../components/Books";
import NewReleaseBook from "../components/NewRelaseBook";
import HeroBanner from "../components/ui/HeroBanner";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <Books />
      <NewReleaseBook />
      <Footer />
    </div>
  );
}
