'use client';

function PrimaryButton({ className = '', children, onClick }) {
  return (
    <button className={`btn btn-sm ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default PrimaryButton;
