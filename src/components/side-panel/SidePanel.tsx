import cn from 'classnames';
import clsx from 'clsx';
import { useState } from 'react';
import { RiSidebarFoldLine, RiSidebarUnfoldLine } from 'react-icons/ri';
import Select from 'react-select';

const filterOptions = [
  { value: 'conversations', label: 'Conversations' },
  { value: 'tools', label: 'Tool Use' },
  { value: 'none', label: 'All' },
];

const controlStyles = {
  base: 'border-0 bg-gray-800 hover:cursor-pointer',
  focus: 'ring-2 ring-blue-600 rounded',
  nonFocus: ' hover:border-gray-400',
};
const placeholderStyles = 'text-gray-500 pl-1 py-0.5';
const selectInputStyles = 'pl-1 py-0.5';
const valueContainerStyles = 'p-1 gap-1';
const singleValueStyles = 'leading-7 ml-1';
const multiValueStyles =
  'bg-gray-100 rounded items-center py-0.5 pl-2 pr-1 gap-1.5';
const multiValueLabelStyles = 'leading-6 py-0.5';
const multiValueRemoveStyles =
  'border border-gray-200 bg-white hover:bg-red-50 hover:text-red-800 text-gray-500 hover:border-red-300 rounded-md';
const indicatorsContainerStyles = 'p-1 gap-1';
const clearIndicatorStyles =
  'text-gray-500 p-1 rounded-md hover:bg-red-50 hover:text-red-800';
const indicatorSeparatorStyles = 'bg-gray-300';
const dropdownIndicatorStyles =
  'p-1 hover:bg-gray-100 text-gray-500 rounded-md hover:text-black';
const menuStyles = 'p-1 mt-2 border border-gray-200 bg-white rounded-lg';
const groupHeadingStyles = 'ml-3 mt-2 mb-1 text-gray-500 text-sm';
const optionStyles = {
  base: 'hover:cursor-pointer px-3 py-2 rounded',
  focus: 'bg-gray-100 active:bg-gray-200',
  selected: "after:content-['✔'] after:ml-2 after:text-green-500 text-gray-500",
};
const noOptionsMessageStyles =
  'text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm';

export default function SidePanel() {
  const [open, setOpen] = useState(true);

  const [selectedOption, setSelectedOption] = useState<{
    value: string;
    label: string;
  } | null>(null);

  return (
    <div
      className={cn('flex flex-col h-screen bg-black text-[#b4b8bb]', {
        'w-[400px]': open,
        'w-[40px]': !open,
      })}
    >
      <header className="flex justify-between items-center p-2 border-b border-[#2d2d2d]">
        <h2 className={cn({ hidden: !open })}>Console</h2>
        {open ? (
          <button
            onClick={() => setOpen(false)}
            className="bg-transparent border-none p-1"
          >
            <RiSidebarFoldLine />
          </button>
        ) : (
          <button
            onClick={() => setOpen(true)}
            className="bg-transparent border-none p-1"
          >
            <RiSidebarUnfoldLine />
          </button>
        )}
      </header>
      <section className="flex justify-end px-[24px] py-[25px]">
        <Select
          unstyled
          className="w-[193px] h-[30px] "
          classNames={{
            control: ({ isFocused }) =>
              clsx(
                isFocused ? controlStyles.focus : controlStyles.nonFocus,
                controlStyles.base
              ),
            placeholder: () => placeholderStyles,
            input: () => selectInputStyles,
            valueContainer: () => valueContainerStyles,
            singleValue: () => singleValueStyles,
            multiValue: () => multiValueStyles,
            multiValueLabel: () => multiValueLabelStyles,
            multiValueRemove: () => multiValueRemoveStyles,
            indicatorsContainer: () => indicatorsContainerStyles,
            clearIndicator: () => clearIndicatorStyles,
            indicatorSeparator: () => indicatorSeparatorStyles,
            dropdownIndicator: () => dropdownIndicatorStyles,
            menu: () => menuStyles,
            groupHeading: () => groupHeadingStyles,
            option: ({ isFocused, isSelected }) =>
              clsx(
                isFocused && optionStyles.focus,
                isSelected && optionStyles.selected,
                optionStyles.base
              ),
            noOptionsMessage: () => noOptionsMessageStyles,
          }}
          defaultValue={selectedOption}
          options={filterOptions}
          onChange={(option) => setSelectedOption(option)}
        />
      </section>
    </div>
  );
}
