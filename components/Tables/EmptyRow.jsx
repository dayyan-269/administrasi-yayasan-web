const EmptyRow = ({ children, colSpan = 3 }) => {
  return (
    <tr>
      <td colSpan={colSpan} className='text-center'>
        {children ? children : 'Tidak ada data'}
      </td>
    </tr>
  );
};

export default EmptyRow;
