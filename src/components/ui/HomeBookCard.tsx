/* eslint-disable @typescript-eslint/no-unsafe-call */

import { IBooks } from "../../types/globalTypes";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { addToWishlist } from "../../redux/features/wishlist/wishlistSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface iProps {
  book: IBooks;
}

export default function HomeBookCard({ book }: iProps) {
  const { _id, title, img, author, genre, publication_date } = book;

  const dispatch = useAppDispatch();

  const handleWishlist = (book: IBooks) => {
    dispatch(addToWishlist(book));
    toast("Add book wishlist Successfully!");
  };

  return (
    <div className="mb-8">
      <div className="card card-compact lg:w-auto bg-base-100 shadow-xl">
        <Link to={`/book-details/${_id}`}>
          <figure>
            <img src={img} className="h-40" alt="Shoes" />
          </figure>
        </Link>
        <div className="card-body text-center">
          <Link to={`/book-details/${_id}`}>
            {" "}
            <h2 className="text-center text-xl font-bold">{title}</h2>
          </Link>
          <p>
            <span className="font-bold">Author:</span>{" "}
            <span className="text-orange-500">{author}</span>
          </p>
          <p>
            <span className="font-bold">Genre:</span>{" "}
            <span className="text-purple-500">{genre}</span>
          </p>
          <p>
            <span className="font-bold">Published:</span>{" "}
            <span className="text-blue-400">{publication_date}</span>
          </p>
          <div className="card-actions justify-center">
            <button
              onClick={() => handleWishlist(book)}
              className="btn"
              style={{
                backgroundColor: "#C27B7F",
                color: "#fff",
              }}
            >
              Add Book Cart
            </button>
            {/* <PrimaryBtn  onClick={() => handleWishlist(book)}> Add Book</PrimaryBtn> */}
          </div>
        </div>
      </div>
    </div>
  );
}
