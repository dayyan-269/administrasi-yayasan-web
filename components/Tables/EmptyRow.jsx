const EmptyRow = ({ children, colSpan = 3 }) => {
  return (
    <tr>
      <td colSpan={colSpan} className='text-center'>
        {children ? children : 'there is no data'}
      </td>
    </tr>
  );
};

export default EmptyRow;
