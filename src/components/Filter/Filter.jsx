export function Filter({ value, onFilterChange }) {
  return (
    <div>
      <p>Find contacts by name</p>
      <input        
        type="text"
        name="filter"
        value={value}
        onChange={onFilterChange}
      />
    </div>
  );
}