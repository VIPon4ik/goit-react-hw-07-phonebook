import PropTypes from 'prop-types';
import { ListParagraph, Button } from './ContactList.styled';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

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

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
