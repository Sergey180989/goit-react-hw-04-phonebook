export function ContactListItem({ name, number, onButtonDelete, buttonId }) {
  return (
    <li>
      {name}: <span>{number}</span>
      <button
        id={buttonId}
        onClick={onButtonDelete}>
        Delete
      </button>
    </li>
  );
}