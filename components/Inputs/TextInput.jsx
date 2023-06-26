function TextInput({
  className = '',
  type = 'text',
  label = '',
  name = null,
  onChange,
  isRequired = false,
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
        required={isRequired}
        className={`focus:outline-none focus:border-green-500 input input-bordered w-full shadow-md ${className}`}
      />
    </div>
  );
}

export default TextInput;
