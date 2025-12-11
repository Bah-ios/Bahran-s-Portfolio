const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-8 mt-auto">
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Tomasz Gajda.
      </p>
    </footer>
  );
};

export default Footer;