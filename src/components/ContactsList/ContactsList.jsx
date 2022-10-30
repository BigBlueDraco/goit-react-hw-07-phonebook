import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = '';
  return (
    <>
      <ul>
        {contacts &&
          contacts
            .filter(({ name }) => name.toLowerCase().includes(filter))
            .map(elem => (
              <ContactsItem
                key={elem.name}
                name={elem.name}
                number={elem.number}
              />
            ))}
      </ul>
    </>
  );
};

const ContactsItem = ({ id, name, number }) => {
  const dispath = useDispatch();
  return (
    <li id={id}>
      {name}
      {number}
      <button data-id={id} onClick={e => dispath()}>
        Delete
      </button>
    </li>
  );
};
