const TextArea = ({ children, className = "", label = "", type = "" }) => {
  return (
    <div className="flex flex-col">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <textarea
        className={`textarea textarea-bordered shadow-md focus:outline-none focus:border-green-500 ${className}`}
      >
        {children}
      </textarea>
    </div>
  );
};

export default TextArea;
