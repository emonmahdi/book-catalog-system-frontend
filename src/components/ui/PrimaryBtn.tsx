const btnStyle = {
  border: "none",
  background: "#C27B7F",
  borderRadius: "5px",
  padding: "10px 20px",
  color: "#fff",
  display: "inline-block",
};

const PrimaryBtn = ({ children }: any) => {
  return (
    <div>
      <button style={btnStyle} className="btn">
        {children}
      </button>
    </div>
  );
};

export default PrimaryBtn;
