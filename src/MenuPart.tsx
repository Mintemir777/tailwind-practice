import React, { useState } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const list = document.querySelector('ul');

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    if (list) {
      if (isOpen) {
        list.classList.remove('top-[80px]', 'opacity-100');
      } else {
        list.classList.add('top-[80px]', 'opacity-100');
      }
    }
  };

  return (
    <div>
      <IconButton onClick={toggleMenu}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
    </div>
  );
}
