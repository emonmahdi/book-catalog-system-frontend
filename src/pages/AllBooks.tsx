/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from "react";
import { IBooks } from "../types/globalTypes";
import BookCard from "../components/ui/BookCard";
import Navbar from "../components/ui/Navbar";
import { useGetBooksQuery } from "../redux/api/apiSlice";

export default function AllBooks() {
  /* const [books, setBooks] = useState<IBooks[]>([]);

  useEffect(() => {
    fetch("./books.json")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []); */

  const { data, isLoading, error } = useGetBooksQuery(undefined);

  return (
    <div>
      <Navbar />
      <div className="text-center py-8">
        <h2 className="font-bold text-3xl">Our Books Catalog</h2>
        <div className="grid grid-cols-12 gap-4 py-8 px-8">
          {data?.data?.map((book: IBooks) => (
            <BookCard book={book} key={book.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
