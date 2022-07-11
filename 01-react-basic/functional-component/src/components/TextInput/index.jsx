import "./styles.css";

export function TextInput({ searchValue, handleChange }) {
  return (
    <div className="inputText-container">
      {searchValue && <h1>Search Value: {searchValue}</h1>}
      <input
        type="search"
        onChange={handleChange}
        value={searchValue}
        placeholder="Buscar"
      />
    </div>
  );
}
