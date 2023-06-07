import Link from 'next/link';

function NavBarItem({ children, href = '' }) {
  return (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  );
}

export default NavBarItem;
