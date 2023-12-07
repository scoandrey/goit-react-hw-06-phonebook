import React from 'react';
import { observable, configure } from 'mobx';
import { observer } from 'mobx-react-lite';

import Contacts from 'components/Contacts/Contacts';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import store from '../stores/index';

configure({
  enforceActions: false,
});

export const filter = observable.box('');

const App = observer(() => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>

      <Form onSubmit={values => store.contacts.addContact(values)} />

      <h2>Contacts</h2>
      <span>Find contacts by name</span>

      <Filter />

      <Contacts />
    </div>
  );
});

export default App;
