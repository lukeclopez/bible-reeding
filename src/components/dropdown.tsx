import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

interface MyDropdownProps {
  title: string;
  options: (string | number)[];
}

const MyDropdown: React.FC<MyDropdownProps> = ({ title, options }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>{title}</DropdownToggle>
      <DropdownMenu>
        {options.map(o => (
          <DropdownItem>{o}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default MyDropdown;
