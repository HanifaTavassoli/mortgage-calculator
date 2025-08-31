import RadioButton from "../components/RadioButton";

function Form() {
  return (
    <form className="mortgage-form">
      <div className="field ">
        <span className="field-label">Mortgage Type</span>
        <div className="radio-group">
          <RadioButton
            label="Repayment"
            id="repayment"
            value="repayment"
            type=""
            onChange=""
          />
          <RadioButton
            label="Interest Only"
            id="interest"
            value="interest"
            type=""
            onChange="s"
          />
        </div>
      </div>

      <div className="field"></div>
    </form>
  );
}

export default Form;
