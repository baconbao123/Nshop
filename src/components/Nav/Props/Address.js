import { Container, Dropdown, DropdownButton, ButtonGroup, Nav, Navbar, NavItem, NavLink } from 'react-bootstrap';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { MdSupportAgent } from 'react-icons/md';
import React, { Fragment, useState } from 'react';

const Adress = () => {
   const [showMenu, setShowMenu] = useState(false);

   const handleToggle = () => setShowMenu(!showMenu);
   const handleClose = () => setShowMenu(false);

   return (
      <Fragment></Fragment>
   );
};

export default Adress;
