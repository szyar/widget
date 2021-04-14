import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';

const items = [
  {
    title: 'What is React?',
    content: 'React is front-end JavaScript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is favorite JS library among engineers'
  },
  {
    title: 'How do you use React',
    content: 'You use React by creating components'
  }
];

const options = [
  {
    label: 'Red',
    value: 'red'
  },
  {
    label: 'Green',
    value: 'green'
  },
  {
    label: 'Blue',
    value: 'blue'
  },
];

const App = () => {
  const [selected, setSelected] = useState({});
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <Accordion items={items} />
      <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
      {
        showDropdown ?
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          labelMessage='Select a Color'
          options={options}
        /> :
        null
      }
    </div>
  );
};

export default App;
