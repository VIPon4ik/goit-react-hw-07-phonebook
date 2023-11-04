import { Component } from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {
  render() {
    const { handleFilterChange, value } = this.props;
    return (
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          onChange={handleFilterChange}
          value={value}
        />
      </label>
    );
  }
}
