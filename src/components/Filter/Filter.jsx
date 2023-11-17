import PropTypes from 'prop-types';
import { Input } from './Filter.styled';

export const Filter = ({ handleFilterChange, value }) => {
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
};

Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
