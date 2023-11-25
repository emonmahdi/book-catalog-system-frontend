import PrimaryBtn from "./ui/PrimaryBtn";
import book1 from "../assets/images/books/book_1.png";
import book2 from "../assets/images/books/book_2.png";
import book3 from "../assets/images/books/book_3.png";

const NewReleaseBook = () => {
  return (
    <div className="flex flex-wrap py-8 container mx-auto">
      {/* Left Column */}
      <div className="w-full md:w-1/2 p-4">
        <h6>Taste The New Spice</h6>
        <h2 className="text-3xl font-bold mb-4">New Release Books</h2>
        <hr />
        <p className="text-gray-600 py-2">
          Consectetur adipisicing elit sed do eiusmod tempor incididunt labore
          toloregna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamcoiars nisiuip commodo consequat aute irure dolor in aprehenderit
          aveli esseati cillum dolor fugiat nulla pariatur cepteur sint occaecat
          cupidatat.
        </p>
        <div className="flex items-center justify-start my-4">
          <PrimaryBtn>Read More</PrimaryBtn>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-1/2 p-4">
        <div className="flex justify-around">
          <img
            src={book1}
            alt="Image 1"
            className="rounded-lg w-full md:w-50 h-60 p-4"
          />
          <img
            src={book2}
            alt="Image 2"
            className="rounded-lg w-full md:w-50 h-60 p-4"
          />
          <img
            src={book3}
            alt="Image 3"
            className="rounded-lg w-full md:w-50 h-60 p-4"
          />
        </div>
      </div>
    </div>

    // <div className="md:columns-2 sm:columns-1 py-8 container mx-auto">
    //   <div className="bg-green-300 p-8">
    //     <h6>Taste The New Spice</h6>
    //     <h2>New Release Books</h2>
    //     <p>
    //       Consectetur adipisicing elit sed do eiusmod tempor incididunt labore
    //       toloregna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    //       ullamcoiars nisiuip commodo consequat aute irure dolor in aprehenderit
    //       aveli esseati cillum dolor fugiat nulla pariatur cepteur sint occaecat
    //       cupidatat.
    //     </p>
    //     <div>
    //       <PrimaryBtn>View All</PrimaryBtn>
    //       <PrimaryBtn>Read More</PrimaryBtn>
    //     </div>
    //   </div>
    //   <div className="bg-red-300 p-8">
    //     <h4>Book Images</h4>
    //   </div>
    // </div>
  );
};

export default NewReleaseBook;
