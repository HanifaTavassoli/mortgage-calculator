function RadioButton() {
  return (
    <>
      <div className="radio-box">
        <input type="radio" name="type" className="radio-input" />
        <label className="radio-label" htmlFor="">
          <span className="radio-faux"></span>
          ""
        </label>
      </div>
    </>
  );
}

export default RadioButton;
