"use client";

import Link from "next/link";

function LinkButton({ children, href = "", className = "" }) {
  return (
    <Link
      href={href}
      className={`btn btn-sm btn-primary shadow-md normal-case font-normal rounded-lg ${className}`}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
