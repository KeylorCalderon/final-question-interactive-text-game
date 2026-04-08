function OptionSelector() {
  const items = ["Opción 1", "Opción 2", "Opción 3"];

  const message = items.length === 0 && <p>No items found</p>;

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown button
      </button>
      {message}
      <ul className="dropdown-menu">
        {items.map((item) => (
          <li key={item}>
            <a className="dropdown-item" href="#">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OptionSelector;
