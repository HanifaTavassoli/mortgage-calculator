import calcImg from "../../assets/images/illustration-empty.svg";
function EmptyResults({ title, desc }) {
  return (
    <>
      <div className="panel-inner results-inner results-inner-empty">
        <div className="">
          <img src={calcImg} alt="calc img" />
          <h2 className="results-title">{title}</h2>
          <p className="results-desc">{desc}</p>
        </div>
      </div>
    </>
  );
}

export default EmptyResults;
