import { Button } from 'components/Button/Button';
import { TiUserDelete } from 'react-icons/ti';
import { Rings } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import {
  getContacts,
  getError,
  getFilter,
  getIsLoading,
} from 'redux/selectors';
import s from './ContactsList.module.scss';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  return (
    <>
      <div className={`${s['list-tumb']}`}>
        {error ? (
          <p>{error}</p>
        ) : (
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
            {isLoading && (
              <Rings
                height="40"
                width="40"
                color="#f2df3a"
                radius="6"
                wrapperStyle={{}}
                wrapperClass={s['loader']}
                visible={true}
                ariaLabel="rings-loading"
              />
            )}
          </ul>
        )}
      </div>
    </>
  );
};

const ContactsItem = ({ id, name, number, className }) => {
  const dispath = useDispatch();
  return (
    <li className={className} id={id}>
      <div className={s['item__info']}>
        <p>{name}</p>
        <p>{number}</p>
      </div>

      <Button
        className={s['delete-btn']}
        onClick={e => dispath(deleteContact(id))}
      >
        <TiUserDelete className={s['delete-btn__icon']} />
      </Button>
    </li>
  );
};
