import { Input } from './Filter.styled';
import { filterChange } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter)

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
