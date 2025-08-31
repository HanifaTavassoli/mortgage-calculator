import EmptyResults from "./EmptyResults";
import ResultsCard from "./ResultsCard";
function ResultsPanel({ monthly, total }) {
  return (
    <>
      <div className="calc-panel calc-panel--results">
        {monthly && total ? (
          <div className="panel-inner results-inner">
            <h2 className="results-title">Your results</h2>
            <p className="results-desc">
              Your results are shown below based on the information you
              provided. To adjust the results, edit the form and click
              “calculate repayments” again.
            </p>

            <ResultsCard monthly={monthly} total={total} />
          </div>
        ) : (
          <EmptyResults
            title="Results shown here"
            desc=" Complete the form and click “calculate repayments” to see what your
            monthly repayments would be."
          />
        )}
      </div>
    </>
  );
}

export default ResultsPanel;
