import { Component } from "react";
import "./styles.css";

export class TextInput extends Component {
  render() {
    const { searchValue, handleChange } = this.props;

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
}
