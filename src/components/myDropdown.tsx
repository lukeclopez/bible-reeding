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
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [dropdownTitle, setDropdownTitle] = useState<string | number>(title);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>{dropdownTitle}</DropdownToggle>
      <DropdownMenu>
        {options.map(o => (
          <DropdownItem onClick={() => setDropdownTitle(o)}>{o}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default MyDropdown;
