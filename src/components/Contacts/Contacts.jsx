import { observer } from 'mobx-react-lite';
import React from 'react';
import { autorun } from 'mobx';

import './contacts.css';
import store from '../../stores/index';

const Contacts = observer(() => {
  const { contacts } = store;

  autorun(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts.getFiltered('')));
  });

  return (
    <ul className="contacts">
      {contacts.getFiltered().map(contact => (
        <React.Fragment key={contact.id}>
          <li className="contactsList">
            {contact.name}: {contact.number}{' '}
            <button
              className="delete"
              onClick={() => contacts.removeContact(contact)}
            >
              Delete
            </button>
          </li>
        </React.Fragment>
      ))}
    </ul>
  );
});

export default Contacts;
