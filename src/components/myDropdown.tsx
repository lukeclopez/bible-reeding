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

type StringOrNum = string | number;

const MyDropdown: React.FC<MyDropdownProps> = ({
  title,
  options
}: MyDropdownProps) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [dropdownTitle, setDropdownTitle] = useState<string | number>(title);

  const toggle = () => setDropdownOpen((prevState: boolean) => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>{dropdownTitle}</DropdownToggle>
      <DropdownMenu>
        {options.map((o: StringOrNum) => (
          <DropdownItem onClick={() => setDropdownTitle(o)}>{o}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default MyDropdown;
