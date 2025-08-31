import Button from "./Button";

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
            onChange=""
          />
        </div>
      </div>

      <div className="field">
        <Button className="btn-calc" type="submit">
          <img src="" alt="calc img" className="btn-icon" />
          <span>Calculate Repayments</span>
        </Button>
      </div>
    </form>
  );
}

export default Form;
