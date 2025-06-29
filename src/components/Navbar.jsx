import { useEffect, useRef, useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
  <nav
  className="fixed top-0 left-0 z-[100] flex w-screen items-center justify-between border-b border-b-gray-700 bg-black/70 px-4 py-4 text-white backdrop-blur-md md:px-6 md:justify-evenly"
>

      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-xl font-semibold opacity-80 hover:opacity-100 md:text-2xl"
      >
        Chaitanya
      </a>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-10">
        <a href="#home"><li className="hover:opacity-100 opacity-70">Home</li></a>
        <a href="#tech"><li className="hover:opacity-100 opacity-70">Tech</li></a>
        <a href="#projects"><li className="hover:opacity-100 opacity-70">Projects</li></a>
        <a href="#contact"><li className="hover:opacity-100 opacity-70">Contact</li></a>
      </ul>

      {/* Mobile Toggle Icon */}
      <div className="md:hidden">
        {isOpen ? (
          <BiX onClick={toggleMenu} className="text-3xl cursor-pointer" />
        ) : (
          <BiMenu onClick={toggleMenu} className="text-3xl cursor-pointer" />
        )}
      </div>

      {/* Mobile Side Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed right-0 top-[70px] z-50 flex h-screen w-1/2 flex-col gap-8 bg-black/90 p-6 text-white md:hidden"
        >
          <a href="#home" onClick={toggleMenu}>Home</a>
          <a href="#tech" onClick={toggleMenu}>Tech</a>
          <a href="#projects" onClick={toggleMenu}>Projects</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
          <div className="flex gap-4 mt-4">
            <a href="https://linkedin.com/in/chaitanya-bhopnikar" target="_blank" rel="noreferrer">
              <BsLinkedin className="text-xl" />
            </a>
            <a href="https://github.com/chaitanyaB12" target="_blank" rel="noreferrer">
              <BsGithub className="text-xl" />
            </a>
          </div>
        </div>
      )}
      {/* Desktop Social Icons */}
        <div className="hidden md:flex gap-4">
        <a
            href="https://linkedin.com/in/chaitanya-bhopnikar"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className="text-xl hover:text-blue-400 transition" />
        </a>
        <a
          href="https://github.com/chaitanyaB12"
          target="_blank"
          rel="noreferrer"
        >
            <BsGithub className="text-xl hover:text-gray-300 transition" />
        </a>
          </div>
    </nav>
  );
};

export default Navbar;
