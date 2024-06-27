import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (index) => {
    setExpandedIndex((currentExpandedIndex) => {
      return currentExpandedIndex === index ? -1 : index;
    });
    // OR simply below
    // expandedIndex === index ? setExpandedIndex(-1) : setExpandedIndex(index);
  };
  const renderedItems = items.map((item, index) => {
    // if (expandedIndex === index) {
    //   console.log('Expanded');
    // } else {
    //   console.log('Collapsed');
    // }

    const isExpanded = expandedIndex === index;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex cursor-pointer items-center justify-between border-b bg-gray-50 p-3"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });
  return <div className="rounded border-x border-t">{renderedItems}</div>;
}

export default Accordion;
