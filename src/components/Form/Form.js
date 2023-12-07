// import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import './Form.css';
const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // const {name} = useSelector(state => state)
  // const {number} = useSelector(state => state)

  // const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log('Incorrect value');
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({ name, number });
    // dispatch({ type: 'name', paylod: name });
    // dispatch({ type: 'number', payload: number });
    setName('');
    setNumber('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="formLabel">
        <span className="formName">Name</span>
        <input
          className="input"
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className="formLabel">
        <span>Number</span>
        <input
          className="input"
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit" className="submit">
        Add Contact
      </button>
    </form>
  );
};
export default Form;


