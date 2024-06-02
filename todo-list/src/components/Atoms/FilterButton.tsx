import React from "react";

interface FilterButtonProps {
  filterText: string;
  filterBy: string;
  handleFilterBy: (filter: string) => void;
}

const FilterButton = ({ filterText, filterBy, handleFilterBy }: FilterButtonProps) => {
  return (
    <button
      className='h-fit p-4 bg-teal-500 rounded enabled:hover:bg-teal-700 text-white font-bold disabled:opacity-75'
      onClick={() => handleFilterBy(filterText)}
      disabled={filterBy === filterText}>
      {filterText}
    </button>
  );
};

export default FilterButton;
