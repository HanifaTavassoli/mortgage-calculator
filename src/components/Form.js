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
  const [errors, setErrors] = useState({});
  const calculateMortgage = (amount, years, annualRate, type) => {
    const months = years * 12;
    const monthlyRate = annualRate / 100 / 12;

    if (type === "repayment") {
      let monthlyPayment =
        (amount * (monthlyRate * Math.pow(1 + monthlyRate, months))) /
        (Math.pow(1 + monthlyRate, months) - 1);

      let totalPayment = monthlyPayment * months;

      monthlyPayment = monthlyPayment.toLocaleString("en-US", {
        maximumFractionDigits: 2,
      });
      totalPayment = totalPayment.toLocaleString("en-US", {
        maximumFractionDigits: 2,
      });

      setMonthlyPay(monthlyPayment);
      setTotalPay(totalPayment);
    }

    if (type === "interest") {
      let monthlyPayment = amount * monthlyRate;
      let totalInterest = monthlyPayment * months;
      let totalPayment = totalInterest + amount;

      monthlyPayment = monthlyPayment.toLocaleString("en-US", {
        maximumFractionDigits: 2,
      });
      totalPayment = totalPayment.toLocaleString("en-US", {
        maximumFractionDigits: 2,
      });

      setMonthlyPay(monthlyPayment);
      setTotalPay(totalPayment);
    }
  };

  const formValidation = () => {
    const numAmount = Number(amount);
    const numTerm = Number(term);
    const numRate = Number(rate);
    let tempErrors = {};
    if (!amount) tempErrors.amount = "Amount is required";
    else if (isNaN(numAmount) || numAmount <= 0)
      tempErrors.amount = "Enter a valid amount > 0";

    if (!term) tempErrors.term = "Term is required";
    else if (isNaN(numTerm) || numTerm <= 0)
      tempErrors.term = "Enter a valid term > 0";

    if (!rate) tempErrors.rate = "Rate is required";
    else if (isNaN(numRate) || numRate <= 0)
      tempErrors.rate = "Enter a valid rate > 0";

    if (type === "") tempErrors.type = "Type is required";

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValidation())
      calculateMortgage(Number(amount), Number(term), Number(rate), type);
  };
  return (
    <form className="mortgage-form" onSubmit={handleSubmit}>
      <InputField
        label="Mortgage Amount"
        id="amount"
        value={amount}
        position="before"
        onChange={setAmount}
        errors={errors.amount}
        setErrors={setErrors}
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
          errors={errors.term}
          setErrors={setErrors}
        >
          <span className="prefix">years</span>
        </InputField>

        <InputField
          label="Interest Rate"
          id="rate"
          value={rate}
          onChange={setRate}
          position="after"
          errors={errors.rate}
          setErrors={setErrors}
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
