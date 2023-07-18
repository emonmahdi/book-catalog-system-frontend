/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { Link, useParams } from "react-router-dom";
import { IBooks } from "../types/globalTypes";
import { useEffect, useState } from "react";
import { FiSend } from "react-icons/fi";

import profile from "./../assets/images/avater.png";
import { useSingleBookQuery } from "../redux/api/apiSlice";

export default function BookDetails() {
  const { id } = useParams();

  const { data: product, isLoading, error } = useSingleBookQuery(id);
  /* //! Temporary code, should be replaced with redux
  const [data, setData] = useState<IBooks[]>([]);
  useEffect(() => {
    fetch("../../public/books.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const product = data?.find((item) => item._id === Number(id));
  console.log(product);
  //! Temporary code ends here */

  return (
    <div>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300 pb-8 px-32">
        <div className="w-[50%]">
          <img src={product?.img} alt="" />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{product?.title}</h1>
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
          <button className="btn btn-info">Add to cart</button>
          <div className="">
            <Link to={`/edit-book/${product?._id}`}>
              <button className="btn btn-warning mr-4">Edit Book</button>
            </Link>
            <button className="btn btn-error">Delete Book</button>
          </div>
        </div>
      </div>
      <div className="flex max-w-12xl mx-auto items-center border-gray-300 pb-8 px-32 pt-4">
        <textarea
          className="textarea textarea-primary w-[75%]"
          placeholder="Review"
        ></textarea>
        <p className="bg-primary p-4 rounded-lg ml-2 cursor-pointer">
          <FiSend className="text-white" />
        </p>
      </div>
      <div className="flex max-w-12xl mx-auto items-center border-gray-300 pb-8 px-32 pt-4">
        <div className="w-10 rounded-full mr-4">
          <img src={profile} />
        </div>
        <div>
          <p>Awesome book</p>
        </div>
      </div>
    </div>
  );
}
