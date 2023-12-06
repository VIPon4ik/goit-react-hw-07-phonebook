import { ListParagraph, Button } from './ContactList.styled';
import { deleteContact, fetchContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectFilteredContacts,
} from 'redux/selectors';
import { useEffect } from 'react';

export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filtredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {isLoading && <p>Loading ...</p>}
      {error && <p>Error with message: {error.message}</p>}
      <ul>
        {filtredContacts.map(({ id, name, phone }) => {
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
