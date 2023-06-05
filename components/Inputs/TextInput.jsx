function TextInput({ className = '', type = 'text', label = '', name = null }) {
  return (
    <div className='form-control w-full'>
      <label className='label'>
        <span className='label-text'>{label}</span>
      </label>
      <input
        type={type}
        name={name}
        className={`input input-bordered input-primary w-full ${className}`}
      />
    </div>
  );
}

export default TextInput;
