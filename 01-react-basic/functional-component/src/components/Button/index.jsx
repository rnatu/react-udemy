import "./styles.css";

export function Button({ onClick, disabled }) {
  return (
    <button className="button" disabled={disabled} onClick={onClick}>
      Load more posts
    </button>
  );
}
