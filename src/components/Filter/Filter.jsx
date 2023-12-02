import PropTypes from 'prop-types';
import { Input } from './Filter.styled';
import { filterChange } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter)

  const handleFilterChange = e => {
    const filterValue = e.target.value;
    dispatch(filterChange(filterValue))
  };

  return (
    <label>
      Find contacts by name:
      <Input
        type="text"
        name="filter"
        onChange={handleFilterChange}
        value={filter}
      />
    </label>
  );
};

Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
