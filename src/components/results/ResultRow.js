function ResultRow({ label, text, amount }) {
  return (
    <div className={`${label}-row`}>
      <span className={`${label}-text`}>{text}</span>
      <p className={`${label}-amount`}>£{amount}</p>
    </div>
  );
}

export default ResultRow;
