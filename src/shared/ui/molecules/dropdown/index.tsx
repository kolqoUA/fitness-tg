import "./styles.css";

import { useEffect, useRef, useState } from "react";
import type { DropdownOption } from "../../../types";
import { ChevronDown } from "lucide-react";

export interface DropdownProps {
  dropdownOptions: DropdownOption[];
  startValue: DropdownOption;
  onChange: (value: any) => void;
}

const Dropdown = (props: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(props.startValue);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={`dropdown ${isOpen ? "dropdown-open" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <p className="selected-option">{value.label}</p>
      <div className="arrow-icon">
        <ChevronDown color="#777777" strokeWidth={1}/>
      </div>
      <div className={`options ${isOpen ? "options-open" : ""}`}>
        {props.dropdownOptions.map((option) => (
          <div
            className="option"
            key={option.value}
            onClick={() => {
              setValue(option);
              props.onChange(option);
            }}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
