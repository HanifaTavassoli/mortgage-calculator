import ResultRow from "./ResultRow";
function ResultsCard({ monthly, total }) {
  return (
    <div className="results-card">
      <ResultRow
        label="monthly"
        text="Your monthly repayments"
        amount={monthly}
      />
      <hr className="line" />

      <ResultRow
        label="total"
        text="Total you'll repay over the term"
        amount={total}
      />
    </div>
  );
}

export default ResultsCard;
