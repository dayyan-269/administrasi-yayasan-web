'use client';

import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';

const PrimaryAlert = ({ children = '', type = 'message', className = '' }) => {
  return (
    <div className={`flex flex-row alert ${className}`}>
      {type === 'error' ? <AiFillCloseCircle /> : <AiFillCheckCircle />}
      <span className='font-bold'>
        Info: <span className='font-normal'>{children}</span>
      </span>
    </div>
  );
};

export default PrimaryAlert;
