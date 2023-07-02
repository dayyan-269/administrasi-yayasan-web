'use client';

import LoadingIndicator from '../Loading/LoadingIndicator';

function PrimaryButton({
  className = '',
  type = '',
  children,
  onClick,
  formmethod,
  isLoading = false,
}) {
  return (
    <button
      className={`btn btn-sm shadow-md ${className}`}
      type={type}
      formMethod={formmethod}
      onClick={onClick}>
      {isLoading ? <LoadingIndicator /> : children}
    </button>
  );
}

export default PrimaryButton;
