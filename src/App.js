import React, { useState } from 'react';
import Comment from './components/comment/Comment';
import Season from './components/season/Season';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Route from './components/Route';
import Header from './components/Header';

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
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="ui container">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          labelMessage='Select a Color'
          options={options}
        />
      </Route>
      <Route path="/comment">
        <Comment />
      </Route>
      <Route path="/season">
        <Season />
      </Route>
    </div>
  );
};

export default App;
