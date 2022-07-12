import "./styles.css";

export function TextInput({ searchValue, handleSearchText }) {
  return (
    <div className="inputText-container">
      {searchValue && <h1>Search Value: {searchValue}</h1>}
      <input
        type="search"
        onChange={handleSearchText}
        value={searchValue}
        placeholder="Buscar"
      />
    </div>
  );
}
