import React from "react";
import { IBooks } from "../../types/globalTypes";
import { Link } from "react-router-dom";

interface iProps {
  book: IBooks;
}

export default function HomeBookCard({ book }: iProps) {
  const { _id, title, img, author, genre, publication_date } = book;
  return (
    <div className="col-span-4 mb-8">
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
            <Link to={`/book-details/${_id}`}>
              {" "}
              <button className="btn btn-primary">Details</button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
