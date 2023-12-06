import { ListParagraph, Button } from './ContactList.styled';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

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
