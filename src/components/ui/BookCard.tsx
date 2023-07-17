import React from "react";
import { IBooks } from "../../types/globalTypes";
import { Link } from "react-router-dom";

interface iProps {
  book: IBooks;
}

export default function BookCard({ book }: iProps) {
  const { _id, title, img } = book;
  return (
    <div className="col-span-4 mb-8">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <Link to={`/book-details/${_id}`}>
          <figure>
            <img src={img} className="h-40" alt="Shoes" />
          </figure>
        </Link>
        <div className="card-body text-center">
          <h2 className="card-title">{title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}
