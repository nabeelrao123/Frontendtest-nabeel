const Button = ({ children, variant = "primary" }) => {
  const base =
    " font-ngh px-4 py-2 text-sm font-semibold  rounded-md transition focus:outline-none focus:ring-2";

  const variants = {
    primary: "bg-blue-600 text-white font-semibold  hover:bg-blue-700 focus:ring-blue-300",
    secondary: "bg-gray-600 text-white font-semibold  hover:bg-gray-700 focus:ring-gray-300",
    outline:
      "font-ngh  px-4 py-2 border text-[#737A91] font-semibold  border-[#737A91]  rounded hover:bg-blue-500 hover:text-white transition",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-300",
  };

  return (
    <button className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
};

export default Button;
