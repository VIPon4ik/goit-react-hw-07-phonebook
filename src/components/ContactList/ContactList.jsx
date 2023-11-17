import PropTypes from 'prop-types';
import { ListParagraph, Button } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <ListParagraph>
              {name} {number}
              <Button type="button" onClick={() => onDeleteContact(id)}>
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
