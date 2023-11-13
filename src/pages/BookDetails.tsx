/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { FiSend } from "react-icons/fi";

import profile from "./../assets/images/avater.png";
import {
  useDeleteBookMutation,
  useGetReviewsQuery,
  usePostReviewMutation,
  useSingleBookQuery,
} from "../redux/api/apiSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { deleteBookLocally } from "../redux/features/book/dbookSlice";

export default function BookDetails() {
  const { id } = useParams();
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useAppDispatch();

  const [postReview, { isLoading: reviewLoading }] = usePostReviewMutation();
  const { data } = useGetReviewsQuery(id);

  console.log(reviewLoading);

  const { books } = useAppSelector((state) => state.dbook);
  console.log(books);

  const { books: book } = useAppSelector((state) => state.wishlist);
  console.log(book);

  const [deleteBook, { isLoading }] = useDeleteBookMutation();
  console.log(isLoading);

  const { data: product, isLoading: loading } = useSingleBookQuery(id);
  console.log(loading);

  const navigate = useNavigate();

  const handleDelete = (id: number) => {
    const confirmed = window.confirm("Are you sure delete book");
    if (confirmed) {
      deleteBook(id);
      dispatch(deleteBookLocally(id));
      navigate("/");
    }
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(inputValue);
    const options = {
      id: id,
      data: { review: inputValue },
    };

    postReview(options);

    setInputValue("");
  };

  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 border-b border-gray-300 px-32 items-center justify-center pb-8">
        {/* left column */}
        <div className="">
          <img src={product?.img} alt="book image" className="mx-auto " />
        </div>
        {/* right column */}
        <div className="space-y-3 ">
          <h1 className="text-3xl font-semibold lg:mt-8">{product?.title}</h1>
          <p>
            by -{" "}
            <span className="text-blue-600 font-bold px-2">
              {product?.author}
            </span>
          </p>
          <p>
            Category:{" "}
            <span className="text-orange-500 font-bold px-2">
              {product?.genre}
            </span>
          </p>
          <p>
            Publication Date:{" "}
            <span className="font-bold px-2">{product?.publication_date}</span>
          </p>
          <div className="">
            <Link to={`/edit-book/${product?._id}`}>
              <button className="btn btn-warning mr-4">Edit Book</button>
            </Link>
            <button
              onClick={() => handleDelete(product?._id)}
              className="btn btn-error inline-block lg:mt-12"
            >
              Delete Book
            </button>
          </div>
        </div>
      </div>

      {/*  Review Box */}
      <div className="flex mx-auto items-center border-gray-300 pb-8 px-16 pt-4">
        <form onSubmit={handleSubmit} className="sm:w-[50%] flex items-center">
          <textarea
            className="textarea textarea-primary sm:w-[100%]"
            placeholder="Review"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          ></textarea>
          <button
            type="submit"
            className="btn rounded-lg cursor-pointer"
            style={{
              background: "#C27B7F",
              color: "#fff",
              display: "block",
              margin: "15px auto",
            }}
          >
            <FiSend className="text-white" />
          </button>
        </form>
      </div>
      {data?.reviews?.map((review: string) => (
        <>
          <div className="flex max-w-12xl mx-auto items-center border-gray-300 pb-4 px-32 pt-1">
            <div className="w-10 rounded-full mr-4">
              <img src={profile} />
            </div>
            <div>
              <p>{review}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
