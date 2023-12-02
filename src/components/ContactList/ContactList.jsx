import { ListParagraph, Button } from './ContactList.styled';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  function getFiltredContacts(filter) {
    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(filter.toLowerCase()) ||
        number.includes(filter.toLowerCase())
    );
  }

  const filtredContacts = getFiltredContacts(filter);

  return (
    <ul>
      {filtredContacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <ListParagraph>
              {name} {number}
              <Button type="button" onClick={() => handleDeleteContact(id)}>
                Delete
              </Button>
            </ListParagraph>
          </li>
        );
      })}
    </ul>
  );
};
