import Link from 'next/link';

function NavBar() {
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <a className='btn btn-ghost normal-case text-xl'>Yayasan Bakti Luhur</a>
      </div>
      <div className='flex-none gap-2'>
        <div className='dropdown dropdown-end'>
          <label
            tabIndex={0}
            className='btn btn-ghost btn-circle hover:bg-primary flex flex-col justify-center align-middle'>
            <div className='w-10 rounded-full'>
              <span>A</span>
            </div>
          </label>
          <ul
            tabIndex={0}
            className='mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 z-10'>
            <li>
              <Link href='#'>
                Profile
                <span className='badge'>New</span>
              </Link>
            </li>
            <li>
              <Link href='#'>Logout</Link>
            </li>
            <li>
              <Link href='/'>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
