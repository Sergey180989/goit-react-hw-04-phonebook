
import { ContactListItem } from '../ContactListItem/ContactListItem';

export function ContactList({ contacts, onButtonDelete }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onButtonDelete={onButtonDelete}
          buttonId={id}
        />
      ))}
    </ul>
  );
}