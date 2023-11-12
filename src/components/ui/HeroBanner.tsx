// import bg from "../../assets/images/bg-1.jpg";
import { Link } from "react-router-dom";
import PrimaryBtn from "./PrimaryBtn";

export default function HeroBanner() {
  return (
    <div
      style={{
        // backgroundImage: `url(${bg})`,
        backgroundColor: "#F5EBE6",
        backgroundPosition: "center top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#2F4858",
      }}
    >
      <div className="">
        <div className="hero-overlay"></div>
        <div className="text-center">
          <div className="lg:w-[75%] mx-auto max-w-100">
            <p
              style={{ color: "#C27B7F", fontWeight: "bold", fontSize: "15px" }}
            >
              LET'S MAKE THE BEST INVESTMENT
            </p>
            <h1 className="mb-5 text-5xl font-bold">
              There Is No Friend As Loyal As A Book
            </h1>
            <p className="mb-5 w-50">
              Books substantially impact every person's life because they offer
              them access to a world of creativity, educate them about the
              outside world, improve their reading, writing, and speaking
              skills, and hone their intellect and memories.
            </p>

            <Link to="/all-books">
              <PrimaryBtn>All Books</PrimaryBtn>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
