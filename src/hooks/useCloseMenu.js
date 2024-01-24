import { useState, useEffect, useRef } from "react";

function useMenu(initialState) {
  const [menuOpen, setMenuOpen] = useState(initialState);
  const menuRef = useRef();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return { menuOpen, toggleMenu, closeMenu, menuRef };
}

export default useMenu;