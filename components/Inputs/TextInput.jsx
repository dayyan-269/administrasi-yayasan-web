function TextInput({
  className = '',
  type = 'text',
  label = '',
  name = null,
  onChange,
}) {
  return (
    <div className='form-control w-full'>
      <label className='label'>
        <span className='label-text'>{label}</span>
      </label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        className={`input input-bordered w-full shadow-md ${className}`}
      />
    </div>
  );
}

export default TextInput;
