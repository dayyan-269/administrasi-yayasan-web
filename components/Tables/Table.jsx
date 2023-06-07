function Table({ children, className = '' }) {
  return (
    <div className='flex flex-col gap-2'>
      <div className='overflow-x-auto flex flex-col'>
        <table className={`table table-zebra ${className}`}>{children}</table>
      </div>
      <div className='w-fit join ml-auto'>
        <button className='join-item btn btn-sm btn-outline'>←</button>
        <button className='join-item btn btn-sm btn-outline'>→</button>
      </div>
    </div>
  );
}

export default Table;
