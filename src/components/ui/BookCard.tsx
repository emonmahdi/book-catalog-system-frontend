import { IBooks } from "../../types/globalTypes";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToWishlist } from "../../redux/features/wishlist/wishlistSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface iProps {
  book: IBooks;
}

export default function BookCard({ book }: iProps) {
  const { _id, title, img, author, genre, publication_date } = book;

  const { books } = useAppSelector((state) => state.wishlist);
  // console.log(books);

  const dispatch = useAppDispatch();

  const handleWishlistAll = (book: IBooks) => {
    dispatch(addToWishlist(book));
    toast("Add book wishlist!");
  };

  return (
    <div className="mb-8">
      {books && (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
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
                onClick={() => handleWishlistAll(book)}
                className="btn"
                style={{
                  background: "#C27B7F",
                  color: "#fff",
                }}
              >
                Add Book Wishlist
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
