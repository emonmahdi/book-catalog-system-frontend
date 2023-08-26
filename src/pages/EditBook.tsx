/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import {
  useSingleBookQuery,
  useUpdateBookMutation,
} from "../redux/api/apiSlice";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Book {
  title: string;
  author: string;
  img: string;
  genre: string;
  publication_date: string;
  reviews: string[];
}

export default function EditBook() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [updateBook, { isLoading: loading }] = useUpdateBookMutation();
  console.log(loading);
  const currentDate = new Date();

  // Extract the relevant date components
  const year = currentDate.getFullYear(); // e.g., 2023
  const month = currentDate.getMonth() + 1; // Note: months are zero-indexed, so we add 1
  const day = currentDate.getDate(); // e.g., 19

  // Create a formatted date string in the desired format (YYYY-MM-DD)
  const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;

  console.log(formattedDate);

  const [formData, setFormData] = useState<Book>({
    title: "",
    author: "",
    img: "",
    genre: "",
    publication_date: formattedDate,
    reviews: [],
  });

  console.log(formData, setFormData);

  const { data: product } = useSingleBookQuery(id);
  console.log(product);

  const [title, setTitle] = useState(product?.title || "");
  const [author, setAuthor] = useState(product?.author || "");
  const [genre, setGenre] = useState(product?.genre || "");
  const [img, setImg] = useState(product?.img || "");

  const handleSubmit = () => {
    console.log("edit");
    const options = {
      id: id,
      data: {
        title: title,
        img: img,
        author: author,
        genre: genre,
        publication_date: formattedDate,
        reviews: [],
      },
    };
    try {
      updateBook(options);
      navigate("/");
    } catch (error) {
      console.error("Error updating book:", error);
    }
    toast("Edit book successfully!");
  };

  return (
    <div>
      <>
        <Navbar />
        <h3 className="text-center text-xl text-purple-600 font-bold">
          Edit book
        </h3>
        <div className="w-[50%] mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="py-2">
              <label>Title:</label>
              <input
                type="text"
                className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
                name="title"
                defaultValue={product?.title}
                placeholder="book title"
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="py-2">
              <label>Author:</label>
              <input
                type="text"
                className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
                name="author"
                defaultValue={product?.author}
                placeholder="Author name"
                onChange={(e) => setAuthor(e.target.value)}
                required
              />
            </div>
            <div className="py-2">
              <label>Image:</label>
              <input
                type="text"
                className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
                name="img"
                defaultValue={product?.img}
                placeholder="Image Link here"
                onChange={(e) => setImg(e.target.value)}
                required
              />
            </div>
            <div className="py-2">
              <label>Genre:</label>
              <input
                type="text"
                className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
                name="genre"
                defaultValue={product?.genre}
                placeholder="Genre"
                onChange={(e) => setGenre(e.target.value)}
                required
              />
            </div>
            {/* <div className="mb-4">
              <label>Publication Date:</label>
              <input
                type="date"
                className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
                name="publication_date"
                defaultValue={product?.publication_date}
                required
              />
            </div> */}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </>
    </div>
  );
}
