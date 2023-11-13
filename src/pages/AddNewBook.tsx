/* eslint-disable @typescript-eslint/no-floating-promises */
// /* eslint-disable @typescript-eslint/no-misused-promises */
// import React from "react";
// import Navbar from "../components/ui/Navbar";
// import { useForm } from "react-hook-form";

// type FormData = {
//   firstName: string;
//   lastName: string;
// };

// export default function AddNewBook() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormData>();
//   const onSubmit = handleSubmit((data) => console.log(data));

//   return (
//     <div>
//       <Navbar />
//       <h2>Add New Book</h2>
//       <div className="w-[50%] mx-auto">
//         <form onSubmit={onSubmit}>
//           <label>First Name</label>
//           <input
//             className="border-solid border-gray-300 border py-2 px-4 w-full rounded
//   text-gray-700"
//             {...register("firstName")}
//           />
//           <label>Last Name</label>
//           <input
//             {...register("lastName")}
//             className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
//           />
//           <button type="submit" className="btn btn-primary block text-center">
//             {" "}
//             submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import Navbar from "../components/ui/Navbar";
import { useAddBookMutation } from "../redux/api/apiSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import img from "./../assets/images/open-book.png";

export default function AddNewBook() {
  interface Book {
    title: string;
    author: string;
    img: string;
    genre: string;
    publication_date: string;
    reviews: string[];
  }

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

  const [addBook, { isLoading }] = useAddBookMutation();
  console.log(isLoading);
  // const date = new Date();
  // console.log(date);
  // Create a new Date object representing the current date and time
  // Output will be in the format 'YYYY-MM-DD'

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addBook(formData);
    console.log(formData);
    toast("Add new book successfully");
    setFormData({
      title: "",
      author: "",
      img: "",
      genre: "",
      publication_date: "",
      reviews: [],
    });
  };
  return (
    <div className="">
      <Navbar />
      <ToastContainer />
      <div className="py-12 bg-[#F5EBE6] h-screen">
        <div>
          <h3 className="text-center text-3xl font-bold flex items-center justify-center">
            Add New <span className="text-[#C27F7B]"> Book</span>{" "}
            <img
              src={img}
              alt="book"
              style={{
                width: "40px",
                height: "40px",
                display: "inline-block",
                margin: "0 10px",
              }}
            />
          </h3>
        </div>
        <div className="w-[50%] mx-auto">
          <form
            onSubmit={handleSubmit}
            className="border-2 border-solid border-[#C27F7B] rounded p-4 my-4"
          >
            <div className="py-2">
              <label className="font-bold">Title:</label>
              <input
                type="text"
                className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="book title"
                required
              />
            </div>
            <div className="py-2">
              <label className="font-bold">Author:</label>
              <input
                type="text"
                className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Author name"
                required
              />
            </div>
            <div className="py-2">
              <label className="font-bold">Image:</label>
              <input
                type="text"
                className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
                name="img"
                value={formData.img}
                onChange={handleChange}
                placeholder="Image Link here"
                required
              />
            </div>
            <div className="py-2">
              <label className="font-bold">Genre:</label>
              <input
                type="text"
                className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                placeholder="Genre"
                required
              />
            </div>
            {/* <div className="mb-4">
            <label>Publication Date:</label>
            <input
              type="date"
              className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
              name="publication_date"
              value={formData.publication_date}
              onChange={handleChange}
              required
            />
          </div> */}
            <button
              type="submit"
              className="btn"
              style={{
                background: "#C27B7F",
                color: "#fff",
                display: "block",
                margin: "15px auto",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
