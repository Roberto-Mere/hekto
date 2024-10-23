import React, { useState } from 'react';
import List from '../list/List';
import ArrowDown from '../../assets/svg/arrow-down.svg';
import Typography from '../typography/Typography';

export default function Select({ options, size }) {
  const [selectedOption, setSelectedOption] = useState(options[0].value);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`relative cursor-pointer ${size === 'small' ? 'min-w-[8.5rem]' : 'min-w-[20rem]'}`}
    >
      <select
        className="hidden"
        value={selectedOption}
        onChange={(e) => handleSelect(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <div
        className="flex w-full items-center justify-between gap-24 rounded-xl border border-gray-2 bg-white p-12"
        onClick={toggleDropdown}
        data-testid="select-box"
      >
        <Typography type="body-small">
          {options.find((option) => option.value === selectedOption).label}
        </Typography>
        <ArrowDown
          className={`text-black transition-all duration-200 ${isOpen ? '-rotate-180' : 'rotate-0'}`}
        ></ArrowDown>
      </div>

      {isOpen ? (
        <List
          list={options}
          keyFn={(option) => option.value}
          classes="absolute left-0 top-full z-10 max-h-[15rem] w-full mt-4 overflow-y-auto rounded-xl bg-white flex-col border border-gray-2 min-w-max"
          itemClasses="cursor-pointer"
        >
          {(option) => (
            <button
              onClick={() => handleSelect(option.value)}
              className="w-full p-8 text-left"
            >
              <Typography
                type="body-small"
                classes="hover:bg-gray-1 p-8 rounded-xl"
              >
                {option.label}
              </Typography>
            </button>
          )}
        </List>
      ) : null}
    </div>
  );
}
