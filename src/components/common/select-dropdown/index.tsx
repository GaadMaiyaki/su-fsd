import ArrowDownIcon from "@/components/icons/arrow-down";
import {SortOrder} from "@/types";
import {useState} from "react";

interface SortDropdownProps {
  options: {value: SortOrder; label: string}[];
  selected: SortOrder;
  onChange: (value: SortOrder) => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({
  options,
  selected,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (value: SortOrder) => {
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          {options.find(option => option.value === selected)?.label}

          <ArrowDownIcon />
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {options.map(option => (
              <button
                key={option.value}
                onClick={() => handleOptionClick(option.value)}
                className={`block px-4 py-2 text-sm w-full text-left ${
                  selected === option.value
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                role="menuitem"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
