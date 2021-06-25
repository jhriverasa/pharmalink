import Link from "next/link";

const Button = ({ onClick, value }) => {
  return (
    <button
      onClick={onClick}
      className="p-3 w-full my-10 rounded-2xl bg-gray-500 hover:bg-gray-400 text-xl text-white font-bold"
    >
      {value}
    </button>
  );
};

export default Button;
