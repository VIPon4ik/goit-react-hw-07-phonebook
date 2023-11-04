import { Component } from 'react';
import PropTypes from 'prop-types';
import { ListParagraph, Button } from './ContactList.styled';

export class ContactList extends Component {
  static propTypes = {
    onDeleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired
  }

  render() {
    const { contacts } = this.props;
    return (
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <ListParagraph>
                {name} {number}
                <Button type='button' onClick={() => this.props.onDeleteContact(id)}>Delete</Button>
              </ListParagraph>
            </li>
          );
        })}
      </ul>
    );
  }
}
