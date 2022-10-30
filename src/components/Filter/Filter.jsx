import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispath = useDispatch();
  const searche = e => {
    dispath(setFilter(e.target.value));
  };
  return <input type="text" name="filter" onInput={searche} />;
};
