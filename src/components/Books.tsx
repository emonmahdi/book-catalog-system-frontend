/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { IBooks } from "../types/globalTypes";
import { useGetBooksQuery } from "../redux/api/apiSlice";
import HomeBookCard from "./ui/HomeBookCard";
import PrimaryBtn from "./ui/PrimaryBtn";
import { Link } from "react-router-dom";

export default function Books() {
  const { data } = useGetBooksQuery(undefined);

  // Function to shuffle an array randomly
  function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Shuffle the data array if it exists
  const shuffledData = data?.data ? shuffleArray([...data.data]) : [];

  // Slice the first 6 items to get 6 random books
  const randomBooks = shuffledData.slice(0, 6);

  return (
    <div className="text-center py-8 container mx-auto">
      <h2 className="font-bold text-3xl">
        Our <span style={{ color: "#C27B7F" }}>Latest</span> Books
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 py-16 ">
        {randomBooks?.map((book: IBooks) => (
          <HomeBookCard book={book} key={book.title} />
        ))}
      </div>
      <div>
        <Link to="/all-books">
          <PrimaryBtn>All Books</PrimaryBtn>
        </Link>
      </div>
    </div>
  );
}
