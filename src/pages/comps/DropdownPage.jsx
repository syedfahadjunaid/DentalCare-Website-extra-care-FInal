import Dropdown from '../../components/Dropdown';
import { useState } from 'react';

function DropdownPage({ value }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const options = [
    { label: 'Want less spicy food', value: 'lowSpicy' },
    { label: 'Want mild spicy food', value: 'mildSpicy' },
    { label: 'Want more spicy food', value: 'moreSpicy' },
  ];
  return (
    <div>
      <div>
        <Dropdown
          options={options}
          onChange={handleSelect}
          value={selectedOption}
        />
      </div>
    </div>
  );
}

export default DropdownPage;

// import Dropdown from '../components/Dropdown';

// function DropdownPage() {
//   const handleSelect = (option) => {
//     console.log(option.value);
//   };
//   const options = [
//     { label: 'Want less spicy food', value: 'lowSpicy' },
//     { label: 'Want mild spicy food', value: 'mildSpicy' },
//     { label: 'Want more spicy food', value: 'moreSpicy' },
//   ];
//   return <Dropdown options={options} onSelect={handleSelect} />;
// }

// export default DropdownPage;
