import { useState, useRef, useEffect } from "react";
import { ArrowsDownUpIcon } from "@phosphor-icons/react";
import "./styles.css";

export interface InlineSelectType {
  value: string;
  label: string;
}

interface Props {
  options: InlineSelectType[];
  value: string;
  onChange: (newValue: string) => void;
}

export const InlineSelect = ({ options, value, onChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const currentLabel =
    options.find((opt) => opt.value === value)?.label || value;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (newValue: string) => {
    onChange(newValue);
    setIsOpen(false);
  };

  return (
    <div className="inline-select" ref={containerRef}>
      <button
        className="inline-select__trigger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{currentLabel}</span>
        <ArrowsDownUpIcon size={20} color="var(--theme-primary-color)" />
      </button>

      {isOpen && (
        <div className="inline-select__menu">
          {options.map((option) => (
            <button
              key={option.value}
              className={`inline-select__item ${option.value === value ? "active" : ""}`}
              onClick={() => handleSelect(option.value)}
              type="button"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
