interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const Button = ({ text, onClick, type = "button" }: ButtonProps) => {
  return (
    <button 
      type={type} 
      onClick={onClick} 
      className="bg-black text-white px-6 py-3 font-bold uppercase tracking-wider text-sm hover:bg-gray-800 transition"
    >
      {text}
    </button>
  );
};

export default Button;