import { useState, useEffect } from 'react';
import React from 'react';
import { nanoid } from 'nanoid';
import Contacts from 'components/Contacts/Contacts';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';

const CONTACTS_LOCALSTORAGE = 'contacts';
const INITIAL_STATE = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(CONTACTS_LOCALSTORAGE)) || INITIAL_STATE
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(CONTACTS_LOCALSTORAGE, JSON.stringify(contacts));
  }, [contacts]);

  const removeContact = id => {
    setContacts(contacts.filter(cont => cont.id !== id));
  };

  const addContact = contact => {
    if (
      contacts.find(
        item => item.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    setContacts([...contacts, { ...contact, id: nanoid() }]);
  };

  const filterContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

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

      <Form onSubmit={addContact} />

      <h2>Contacts</h2>
      <span>Find contacts by name</span>

      <Filter onChange={setFilter} />

      <Contacts contacts={filterContacts()} removeContact={removeContact} />
    </div>
  );
};

// class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

// componentDidMount() {
//   const contacts = localStorage.getItem(CONTACTS_LOCALSTORAGE);

//   if (contacts) {
//     this.setState({
//       contacts: JSON.parse(contacts),
//     });
//   }
// }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts.length !== this.state.contacts.length) {
//       localStorage.setItem(
//         CONTACTS_LOCALSTORAGE,
//         JSON.stringify(this.state.contacts)
//       );
//     }
//   }

//   removeContact = id => {
//     this.setState(prevState => {
//       const contacts = prevState.contacts.filter(cont => cont.id !== id);
//       return { contacts };
//     });
//   };

//   addContact = contact => {
//     const { contacts } = this.state;
//     if (
//       contacts.find(
//         item => item.name.toLowerCase() === contact.name.toLowerCase()
//       )
//     ) {
//       alert(`${contact.name} is already in contacts`);
//       return;
//     }
//     this.setState(prevState => {
//       const contacts = [...prevState.contacts];
//       contacts.push({ ...contact, id: nanoid() });
//       return { contacts };
//     });
//   };

//   setFilter = name => {
//     this.setState({ filter: name });
//   };

//   render() {
//     const filterContacts = () =>
//       this.state.contacts.filter(contact =>
//         contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
//       );

//     return (
//       <div
//         style={{
//           height: '100%',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontSize: 40,
//           color: '#010101',
//         }}
//       >
//         <h1>Phonebook</h1>

//         <Form onSubmit={this.addContact} />

//         <h2>Contacts</h2>
//         <span>Find contacts by name</span>

//         <Filter onChange={this.setFilter} />

//         <Contacts
//           contacts={filterContacts()}
//           removeContact={this.removeContact}
//         />
//       </div>
//     );
//   }
// }
export default App;
