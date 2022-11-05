import { Button } from 'components/Button/Button';
import { TiUserDelete } from 'react-icons/ti';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import { getContacts, getFilter } from 'redux/selectors';
import s from './ContactsList.module.scss';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  return (
    <div className={`${s['list-tumb']}`}>
      <ul className={s['list']}>
        {contacts[0] &&
          contacts
            .filter(({ name }) =>
              name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(elem => (
              <ContactsItem
                className={s['item']}
                key={elem.name}
                id={elem.id}
                name={elem.name}
                number={elem.number}
              />
            ))}
      </ul>
    </div>
  );
};

const ContactsItem = ({ id, name, number, className }) => {
  const dispath = useDispatch();
  return (
    <li className={className} id={id}>
      {name}
      {number}

      <Button
        className={s['delete-btn']}
        onClick={e => dispath(deleteContact(id))}
      >
        <TiUserDelete className={s['delete-btn__icon']} />
      </Button>
    </li>
  );
};
