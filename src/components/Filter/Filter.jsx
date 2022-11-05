import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { getContacts } from 'redux/selectors';

export const Filter = () => {
  const dispath = useDispatch();
  const contacts = useSelector(getContacts);
  const searche = e => {
    dispath(setFilter(e.target.value));
  };
  return (
    <Autocomplete
      onInput={searche}
      freeSolo
      id="free-solo-2-demo"
      sx={{ width: '100%' }}
      disableClearable
      options={contacts.map(option => option.name)}
      groupBy={option => option.firstLetter}
      renderInput={params => (
        <TextField
          {...params}
          label="Search input"
          InputProps={{
            ...params.InputProps,
            type: 'search',
            variant: 'standard',
          }}
        />
      )}
    />
  );
};
