import { IoBookSharp } from "react-icons/io5";
import { FaPencil } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { FaAward } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";

const CounterSection = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="text-center mb-8">
        <h6>Awesome States</h6>
        <h2 className="text-3xl font-bold mb-4">
          All <span className="text-[#C27B7F]">Milestones</span> Achieved
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div className="p-4 shadow-lg rounded text-center">
          <p>
            <IoBookSharp className="text-2xl mx-auto text-[#C27B7F]" />
          </p>
          <h2 className="text-sm my-2 font-bold">Books</h2>
          <h3 className="text-3xl font-bold">200</h3>
        </div>
        <div className="p-4 shadow-lg rounded text-center">
          <p>
            <FaPencil className="text-2xl mx-auto text-[#C27B7F]" />
          </p>
          <h2 className="text-sm my-2 font-bold">Writers</h2>
          <h3 className="text-3xl font-bold">20</h3>
        </div>
        <div className="p-4 shadow-lg rounded text-center">
          <p>
            <FiShoppingCart className="text-2xl mx-auto text-[#C27B7F]" />
          </p>
          <h2 className="text-sm my-2 font-bold">Best Sales</h2>
          <h3 className="text-3xl font-bold">150</h3>
        </div>
        <div className="p-4 shadow-lg rounded text-center">
          <p>
            <FaAward className="text-2xl mx-auto text-[#C27B7F]" />
          </p>
          <h2 className="text-sm my-2 font-bold">Awards</h2>
          <h3 className="text-3xl font-bold">15</h3>
        </div>
        <div className="p-4 shadow-lg rounded text-center">
          <p>
            <FaBook className="text-2xl mx-auto text-[#C27B7F]" />
          </p>
          <h2 className="text-sm my-2 font-bold">Publications</h2>
          <h3 className="text-3xl font-bold">50</h3>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
