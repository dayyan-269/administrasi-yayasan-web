'use client';

function PrimaryButton({ className = '', children, onClick }) {
  return (
    <button className={`btn btn-sm shadow-md ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default PrimaryButton;
