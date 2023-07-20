/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { IBooks } from "../types/globalTypes";
import BookCard from "./ui/BookCard";
import { useGetBooksQuery } from "../redux/api/apiSlice";
import HomeBookCard from "./ui/HomeBookCard";

export default function Books() {
  const { data, isLoading, error } = useGetBooksQuery(undefined);

  console.log(data);
  console.log(isLoading);
  console.log(error);

  return (
    <div className="text-center py-8">
      <h2 className="font-bold text-3xl">Our Latest Books</h2>
      <div className="grid grid-cols-12 gap-4 py-8 px-8">
        {data?.data?.map((book: IBooks) => (
          <HomeBookCard book={book} key={book.title} />
        ))}
      </div>
    </div>
  );
}
