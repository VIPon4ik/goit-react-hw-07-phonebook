import { ListParagraph, Button } from './ContactList.styled';
import { deleteContact, fetchContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
  selectFilter,
} from 'redux/selectors';
import { useEffect } from 'react';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  function getFiltredContacts(filter) {
    return contacts.filter(
      ({ name, phone }) =>
        name.toLowerCase().includes(filter.toLowerCase()) ||
        phone.includes(filter.toLowerCase())
    );
  }

  const filtredContacts = getFiltredContacts(filter);
  return (
    <>
      {isLoading && <p>Loading ...</p>}
      {error && <p>Error with message: {error.message}</p>}
      <ul>
        {contacts.map(({ id, name, phone }) => {
          return (
            <li key={id}>
              <ListParagraph>
                {name} {phone}
                <Button type="button" onClick={() => handleDeleteContact(id)}>
                  Delete
                </Button>
              </ListParagraph>
            </li>
          );
        })}
      </ul>
    </>
  );
};
