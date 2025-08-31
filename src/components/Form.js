import calcIcon from "../assets/images/icon-calculator.svg";

import Button from "./Button";

import RadioButton from "../components/RadioButton";

function Form({
  type,
  setType,
  amount,
  setAmount,
  term,
  setTerm,
  rate,
  setRate,
  setMonthlyPay,
  setTotalPay,
}) {
  return (
    <form className="mortgage-form">
      <div className="field ">
        <span className="field-label">Mortgage Type</span>
        <div className="radio-group">
          <RadioButton
            label="Repayment"
            id="repayment"
            value="repayment"
            type={type}
            onChange={setType}
          />
          <RadioButton
            label="Interest Only"
            id="interest"
            value="interest"
            type={type}
            onChange={setType}
          />
        </div>
      </div>

      <div className="field">
        <Button className="btn-calc" type="submit">
          <img src={calcIcon} alt="calc img" className="btn-icon" />
          <span>Calculate Repayments</span>
        </Button>
      </div>
    </form>
  );
}

export default Form;
