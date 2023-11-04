import { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from './Filter.styled';

export class Filter extends Component {
  static propTypes = {
    handleFilterChange: PropTypes.func.isRequired,
    value: PropTypes.string,
  }

  render() {
    const { handleFilterChange, value } = this.props;
    return (
      <label>
        Find contacts by name:
        <Input
          type="text"
          name="filter"
          onChange={handleFilterChange}
          value={value}
        />
      </label>
    );
  }
}
