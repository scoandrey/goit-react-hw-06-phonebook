import { observer } from 'mobx-react-lite';
import React from 'react';
import store from 'stores';
import './Filter.css';

const Filter = observer(() => {
  const { contacts } = store;
  return (
    <input
      className="inputFilter"
      onChange={e => {
        contacts.setFilter(e.target.value);
      }}
    />
  );
});

export default Filter;
