interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "outline";
}

const Button = ({ text, onClick, type = "button", variant = "primary" }: ButtonProps) => {
  const baseStyles = "px-6 py-3 font-bold uppercase tracking-wider text-sm transition-all duration-300";
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    outline: "border-2 border-black text-black hover:bg-black hover:text-white"
  };

  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]}`}
    >
      {text}
    </button>
  );
};

export default Button;