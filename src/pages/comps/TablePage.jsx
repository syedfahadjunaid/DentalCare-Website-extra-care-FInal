import Table from '../components/Table';
import SortableTable from '../components/SortableTable';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';

function TablePage() {
  // Sorting icons
  const sortingIcons = {
    ascending: <FaSortUp />,
    descending: <FaSortDown />,
    unsorted: <FaSort />
  };

  // Array of data passed to table
  const data = [
    { name: 'Grapes', color: 'bg-green-300', score: 5 },
    { name: 'Apple', color: 'bg-red-300', score: 3 },
    { name: 'Banana', color: 'bg-yellow-300', score: 2 },
    { name: 'Orange', color: 'bg-orange-300', score: 1 },
  ];

  // Array of config passed to table and sortingTable (means headers functionality)
  const config = [
    {
      label: 'NAME',
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: 'COLOR',
      render: (fruit) => <div className={`m-3 p-2 ${fruit.color}`}></div>,
    },
    {
      label: 'SCORE',
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
    {
      label: 'SCORE SQUARE',
      render: (fruit) => fruit.score ** 2,
      sortValue: (fruit) => fruit.score,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  // Below is returning table with sort and don't sort functionality
  return (
    <div>
      <Table data={data} config={config} keyFn={keyFn} />
      <SortableTable
        data={data}
        config={config}
        keyFn={keyFn}
        sortingIcons={sortingIcons}
      />
    </div>
  );
}

export default TablePage;
