import { Form, Input, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  function checkIsAlreadyInContacts(nameValue) {
    return contacts.map(({ name }) => name).includes(nameValue);
  }

  const handleSubmit = e => {
    e.preventDefault();

    const nameValue = e.target.name.value;
    const numberValue = e.target.number.value;

    const isAlreadyInContacts = checkIsAlreadyInContacts(nameValue);

    if (isAlreadyInContacts) {
      alert(`${nameValue} is already in contacts`);
      return;
    }

    dispatch(addContact({ name: nameValue, phone: numberValue }));

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
