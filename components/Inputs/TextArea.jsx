const TextArea = ({ children, className = '', label = '', type = '' }) => {
  return (
    <div className='flex flex-col'>
      <label className='label'>
        <span className='label-text'>{label}</span>
      </label>
      <textarea className={`textarea shadow-md ${className}`}>
        {children}
      </textarea>
    </div>
  );
};

export default TextArea;
