function ResultsPanel({ monthly, total }) {
  return (
    <>
      <div className="calc-panel calc-panel--results">
        <div className="panel-inner results-inner">
          <h2 className="results-title">Your results</h2>
          <p className="results-desc">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click “calculate
            repayments” again.
          </p>
        </div>
      </div>
    </>
  );
}

export default ResultsPanel;
