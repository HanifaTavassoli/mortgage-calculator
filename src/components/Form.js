import { useState } from "react";
import calcIcon from "../assets/images/icon-calculator.svg";

import Button from "./Button";
import InputField from "../components/InputField";
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
      <InputField
        label="Mortgage Amount"
        id="amount"
        value={amount}
        position="before"
        onChange={setAmount}
        errors=""
        setErrors=""
      >
        <span className="prefix">£</span>
      </InputField>

      <div className="grid-2">
        <InputField
          label="Mortgage Term"
          id="term"
          value={term}
          onChange={setTerm}
          position="after"
          errors=""
          setErrors=""
        >
          <span className="prefix">years</span>
        </InputField>

        <InputField
          label="Interest Rate"
          id="rate"
          value={rate}
          onChange={setRate}
          position="after"
          errors=""
          setErrors=""
        >
          <span className="prefix">%</span>
        </InputField>
      </div>

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
