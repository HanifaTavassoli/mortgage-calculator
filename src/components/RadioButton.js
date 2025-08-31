function RadioButton({ label, id, value, type, onChange }) {
  return (
    <>
      <div className="radio-box" onClick={() => onChange(value)}>
        <input
          type="radio"
          name="type"
          id={id}
          value={value}
          checked={type === value}
          onChange={() => onChange(value)}
          className="radio-input"
        />
        <label className="radio-label" htmlFor={id}>
          <span className="radio-faux"></span>
          {label}
        </label>
      </div>
    </>
  );
}

export default RadioButton;
