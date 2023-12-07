import { nanoid } from '@reduxjs/toolkit';
import { makeAutoObservable, observable } from 'mobx';

export class Contacts {
  contacts = localStorage.getItem('contacts')
    ? JSON.parse(localStorage.getItem('contacts'))
    : [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ];

  filter = observable.box('');

  constructor() {
    makeAutoObservable(this);
  }

  addContact(contact) {
    this.contacts.push({ ...contact, id: nanoid() });
  }

  removeContact(contact) {
    this.contacts.remove(contact);
  }

  getFiltered() {
    return this.contacts.filter(c => c.name.includes(this.filter.get()));
  }

  setFilter(filter) {
    this.filter.set(filter);
  }
}
