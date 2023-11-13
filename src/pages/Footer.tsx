import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="">
      <footer className="footer p-10 px-20 bg-base-200 text-base-content">
        <div>
          <Link to="/">
            <a className="text-xl font-bold">
              Book <span className="text-[#C27B7F]">Mohol</span>
            </a>
          </Link>
          <p>A journey of a thousand pages begins with a single word."</p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Top Books</a>
          <a className="link link-hover">Stories Books</a>
          <a className="link link-hover">Life story book</a>
          <a className="link link-hover">Motivational</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Books</a>
          <a className="link link-hover">All Books</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
}
