import { Form, Input, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  function checkIsAlreadyInContacts(nameValue) {
    return contacts.map(({ name }) => name).includes(nameValue);
  }

  const handleSubmit = e => {
    e.preventDefault();

    const nameValue = e.target.name.value;
    const numberValue = e.target.number.value;
    console.log(nameValue, numberValue);

    const id = nanoid();
    const isAlreadyInContacts = checkIsAlreadyInContacts(nameValue);

    if (isAlreadyInContacts) {
      alert(`${nameValue} is already in contacts`);
      return;
    }

    dispatch(addContact({ id: id, name: nameValue, number: numberValue }));

    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Name:
        <Input type="text" name="name" required />
      </label>
      <label>
        Phone:
        <Input type="tel" name="number" required />
      </label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
