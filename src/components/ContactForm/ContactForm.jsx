import PropTypes from 'prop-types';
import { Form, Input, Button } from './ContactForm.styled';

export const ContactForm = ({ handleSubmit }) => {
  const onSubmit = e => {
    handleSubmit(e, {
      nameValue: e.target.name.value,
      numberValue: e.target.number.value,
    });

    e.target.reset();
  };

  return (
    <Form onSubmit={onSubmit}>
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

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
