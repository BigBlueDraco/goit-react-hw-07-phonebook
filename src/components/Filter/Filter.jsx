import { useDispatch } from 'react-redux';

export const Filter = () => {
  // const dispath = useDispatch();
  const searche = e => {};
  return <input type="text" name="filter" onInput={searche} />;
};
