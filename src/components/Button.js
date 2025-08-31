function Button({ className, type = "", clickEvent, children }) {
  return (
    <>
      <button className={className} type={type} onClick={clickEvent}>
        {children}
      </button>
    </>
  );
}

export default Button;
