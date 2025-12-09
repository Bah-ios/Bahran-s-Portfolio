import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="absolute top-0 w-full flex justify-between items-center px-8 py-6 md:px-16 z-20">
      {/* Logo */}
      <div className="text-2xl font-black border-4 border-black p-1 tracking-tighter text-black">
        TG
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-8 items-center">
        {['About me', 'Skills', 'Portfolio'].map((item) => (
          <Link 
            key={item} 
            href={`/${item.toLowerCase().replace(' ', '-')}`} 
            className="text-white font-semibold text-sm hover:text-gray-300 transition"
          >
            {item}
          </Link>
        ))}
        
        <Link 
          href="/contact" 
          className="bg-white text-black font-bold text-xs px-6 py-3 rounded-full hover:bg-gray-200 transition"
        >
          CONTACT ME
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;