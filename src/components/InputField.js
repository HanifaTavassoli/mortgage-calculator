function InputField({
  label,
  id,
  value,
  position,
  errors,
  setErrors,
  onChange,
  children,
}) {
  return (
    <>
      <div className="field">
        <label htmlFor={id} className="field-label">
          {label}
        </label>
        <div className={`input-with-prefix  `}>
          <input
            type="number"
            name={id}
            id={id}
            value={value}
            className="input input--large"
          />
        </div>
        <p className={``}>{errors && ""}</p>
      </div>
    </>
  );
}

export default InputField;
