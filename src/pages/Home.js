import { useState } from "react";
import "./Home.css";
import Button from "../components/Button";
import ResultsPanel from "../components/results/ResultsPanel";

function Home() {
  const [amount, setAmount] = useState(300000);
  const [term, setTerm] = useState(25);
  const [rate, setRate] = useState(5.25);
  const [type, setType] = useState("repayment");

  const [monthlyPay, setMonthlyPay] = useState(0);
  const [totalPay, setTotalPay] = useState(0);

  return (
    <>
      <div className="container">
        <div className="calculator-card">
          <div className="calc-panel calc-panel--form">
            <div className="panel-inner">
              <div className="panel-header">
                <h1 className="panel-title"> Mortgage Calculator</h1>

                <Button className="clear-btn">Clear All</Button>
              </div>
            </div>
          </div>
          <ResultsPanel monthly={monthlyPay} total={totalPay} />
        </div>
      </div>
    </>
  );
}

export default Home;
