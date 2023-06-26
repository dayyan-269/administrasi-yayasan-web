const Select = ({ children, label = '' }) => {
  return (
    <div className='flex flex-col w-full'>
      <label className='label'>
        <span className='label-text'>{label}</span>
      </label>
      <select className='select select-bordered w-full'>
        <option disabled selected>
          Pilih {label}
        </option>
        {children}
      </select>
    </div>
  );
};

export default Select;
