"use client";

function PrimaryButton({ className = "", children, onClick }) {
  return (
    <button
      className={`btn btn-sm shadow-md normal-case rounded-lg font-normal tracking-wider ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
