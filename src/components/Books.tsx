/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import book1 from "./../assets/images/books/book-1.png";
import book2 from "./../assets/images/books/book-7.jpg";
import book3 from "./../assets/images/books/book-3.jpg";
import { useEffect, useState } from "react";
import { IBooks } from "../types/globalTypes";
import BookCard from "./ui/BookCard";

export default function Books() {
  const [books, setBooks] = useState<IBooks[]>([]);

  useEffect(() => {
    fetch("./books.json")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  return (
    <div className="text-center py-8">
      <h2 className="font-bold text-3xl">Our Books Catalog</h2>
      <div className="grid grid-cols-12 gap-4 py-8 px-8">
        {books?.map((book) => (
          <BookCard book={book} key={book.title} />
        ))}

        {/* <div className="col-span-4">
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={book2} alt="Shoes" />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-start">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={book3} alt="Shoes" />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-start">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
