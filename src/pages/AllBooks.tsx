/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { IBooks } from "../types/globalTypes";
import BookCard from "../components/ui/BookCard";
import Navbar from "../components/ui/Navbar";
import { useGetAllBooksQuery } from "../redux/api/apiSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setSearchTerm } from "../redux/features/search/serachSlice";
import { Link } from "react-router-dom";
import PrimaryBtn from "../components/ui/PrimaryBtn";

export default function AllBooks() {
  const { data, isLoading, error } = useGetAllBooksQuery(undefined);
  console.log(isLoading, error);

  const searchTerm = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  const handleSearchChange = (e: { target: { value: any } }) => {
    const searchTerm = e.target.value;
    dispatch(setSearchTerm(searchTerm));
  };
  const filteredData = data?.data?.filter(
    (item: { title: string; author: string; genre: string }) => {
      const itemValues = Object.values(item).map((value) =>
        value.toString().toLowerCase()
      );

      return itemValues.some((value) =>
        value.includes(searchTerm.toLowerCase())
      );
    }
  );

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-12 mt-4 px-16">
        <div
          style={{
            background: "#F5EBE6",
            width: "100%",
            overflow: "hidden",
            margin: "0 auto",
          }}
          className="left-col-3 col-span-3 md:col-span-2 lg:col-span-3 bg-blue-500 md:mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start md:sticky top-16 h-[calc(100vh-80px)] mx-auto"
        >
          <h2 className="text-2xl text-center">
            Total Book : {data?.data?.length}
          </h2>
          <div className="text-center">
            <Link to="/add-new-book">
              <PrimaryBtn>Add New Book</PrimaryBtn>
            </Link>
          </div>
          <div>
            <h1 className="text-lg text-[#C27B7F] font-bold uppercase mb-1">
              Search Book
            </h1>
            <div className="form-control mb-2">
              <input
                type="text"
                placeholder="search ex.name, author.."
                className="input input-bordered  md:w-auto"
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </div>
        {/* right column */}
        <div className="right-col-9 col-span-3 md:col-span-3 lg:col-span-9 mx-auto">
          <div className="col-span-9 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mx-auto py-16">
            {filteredData?.map((book: IBooks) => (
              <BookCard book={book} key={book.title} />
            ))}
          </div>
        </div>
      </div>
      {/* <div className="text-center py-8">
        <h2 className="font-bold text-3xl">Our Books Catalog</h2>
        <div className="grid grid-cols-12 gap-4 py-8 px-8">
          {data?.data?.map((book: IBooks) => (
            <BookCard book={book} key={book.title} />
          ))}
        </div>
      </div> */}
    </div>
  );
}
