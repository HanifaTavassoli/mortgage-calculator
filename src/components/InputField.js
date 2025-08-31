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
  const handleChange = (e) => {
    const val = e.target.value;
    if (!val || Number(val) <= 0) {
      setErrors((prev) => ({ ...prev, [id]: `Enter a valid ${id} > 0` }));
    } else {
      setErrors((prev) => ({ ...prev, [id]: "" }));
    }
    onChange && onChange(val);
  };

  return (
    <div className="field">
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      <div className={`input-with-prefix ${errors ? "error" : ""}`}>
        {position === "before" && children}
        <input
          type="number"
          name={id}
          id={id}
          value={value}
          onChange={handleChange}
          className="input input--large"
        />
        {position === "after" && children}
      </div>
      {errors && <p className="error-message">{errors}</p>}
    </div>
  );
}

export default InputField;
