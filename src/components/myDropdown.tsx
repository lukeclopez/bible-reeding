import React, { useState } from "react";

import { useDispatch } from "react-redux";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import uniqid from "uniqid";

import { updateWithSelection } from "../redux/actions";

interface MyDropdownProps {
  title: string;
  role: string;
  options: (string | number)[];
}

type StringOrNum = string | number;

const MyDropdown: React.FC<MyDropdownProps> = ({
  title,
  role,
  options
}: MyDropdownProps) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [selection, setSelection] = useState<string | number>(title);
  const [prevSelection, setPrevSelection] = useState<string | number | null>(
    null
  );

  const dispatch = useDispatch();

  const toggle = () => {
    setDropdownOpen((prevState: boolean) => !prevState);
  };

  const handleSelect = (selection: StringOrNum) => {
    setSelection(selection);

    if (selection !== prevSelection) {
      dispatch(updateWithSelection(role, title, selection));
      setPrevSelection(selection);
    }
  };

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>{selection}</DropdownToggle>
      <DropdownMenu>
        {options.map((o: StringOrNum) => (
          <DropdownItem key={uniqid()} onClick={() => handleSelect(o)}>
            {o}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default MyDropdown;
