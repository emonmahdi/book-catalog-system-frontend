import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
const btnStyle = {
  border: "none",
  background: "#C27B7F",
  borderRadius: "5px",
  padding: "10px 20px",
  color: "#fff",
  display: "inline-block",
};

// interface IContact {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

const ContactSection = () => {
  const handleSubmit = () => {
    console.log("submit data");
  };

  return (
    <div className="py-8 container mx-auto">
      <div className="text-center mb-8">
        <h6>Contact Us </h6>
        <h2 className="text-3xl font-bold mb-4">Write Anything</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-[#F5EBE6] mx-8 rounded-lg">
          <div className="my-4">
            <h3 className="font-bold">Address: </h3>
            <p>Dhanmondi, Dhaka</p>
          </div>
          <div className="my-4">
            <h3 className="font-bold">Phone: </h3>
            <p>019239284979</p>
          </div>
          <div className="my-4">
            <h3 className="font-bold">Email: </h3>
            <p>bookcatalog@gmail.com</p>
          </div>
          <div className="my-4">
            <h3 className="font-bold text-2xl mb-4">
              Connect with social links
            </h3>
            <div className="flex items-center">
              <p className="mx-2">
                <a href="/" className="text-2xl hover:text-[#C27B7F]">
                  <FaFacebookSquare />
                </a>
              </p>
              <p className="mx-4">
                <a href="" className="text-2xl hover:text-[#C27B7F]">
                  <FaLinkedin />
                </a>
              </p>
              <p className="mx-4">
                <a href="" className="text-2xl hover:text-[#C27B7F]">
                  <FaInstagram />
                </a>
              </p>
              <p className="mx-4">
                <a href="" className="text-2xl hover:text-[#C27B7F]">
                  <FaTwitter />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 bg-[#F5EBE6] rounded-lg mx-8">
          <form onSubmit={handleSubmit} className="mx-auto my-4">
            <div>
              <input
                type="text"
                className="w-full rounded-3 p-2 mb-4 outline-none"
                placeholder="Your Name"
              />
            </div>
            <div>
              <input
                type="text"
                className="w-full rounded-3 p-2 mb-4 outline-none"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                type="text"
                className="w-full rounded-3 p-2 mb-4 outline-none"
                placeholder="Subject"
              />
            </div>
            <div>
              <input
                type="text"
                className="w-full rounded-3 p-2 mb-4 outline-none"
                placeholder="Message"
              />
            </div>
            <div className="w-full text-center">
              <button style={btnStyle}>Send Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
