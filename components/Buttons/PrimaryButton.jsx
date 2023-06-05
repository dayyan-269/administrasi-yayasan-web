'use client';

function PrimaryButton({ className, children, onClick }) {
  return (
    <button className={`btn btn-primary mt-2 ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default PrimaryButton;
