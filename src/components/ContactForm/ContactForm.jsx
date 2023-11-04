import { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from './ContactForm.styled';

export class ContactForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  }
  
  state = {
    name: '',
    number: '',
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleNumberChange = e => {
    this.setState({ number: e.target.value });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <Form
        onSubmit={e => {
          handleSubmit(e, { nameValue: e.target.elements.name.value, numberValue: e.target.elements.number.value });
          this.setState({ name: '', number: ''})
        }}
      >
        <label>
          Name:
          <Input
            type="text"
            name="name"
            required
            onChange={this.handleNameChange}
            value={this.state.name}
          />
        </label>
        <label>
          Phone:
          <Input
            type="tel"
            name="number"
            required
            onChange={this.handleNumberChange}
            value={this.state.number}
          />
        </label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
