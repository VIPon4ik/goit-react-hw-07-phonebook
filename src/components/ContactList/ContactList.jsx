import { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactList extends Component {

  render() {
    const { contacts } = this.props;
    return (
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <p>
                {name} {number}
                <button type='button' onClick={() => this.props.onDeleteContact(id)}>Delete</button>
              </p>
            </li>
          );
        })}
      </ul>
    );
  }
}
