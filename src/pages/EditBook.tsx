/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useParams } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import { useSingleBookQuery } from "../redux/api/apiSlice";

export default function EditBook() {
  const { id } = useParams();

  const { data: product, isLoading, error } = useSingleBookQuery(id);
  console.log(product);
  const handleSubmit = () => {
    console.log("edit");
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
                required
              />
            </div>
            <div className="mb-4">
              <label>Publication Date:</label>
              <input
                type="date"
                className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
                name="publication_date"
                defaultValue={product?.publication_date}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </>
    </div>
  );
}
