import SideBarItem from '@/components/SideBar/SideBarItem';

function SideBar({ children }) {
  return (
    <div className='drawer lg:drawer-open'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex'>
        {/* Page content here */}
        {children}
      </div>
      <div className='drawer-side'>
        <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
        <ul className='menu p-4 w-80 h-full bg-base-200 text-base-content'>
          {/* Sidebar content here */}
          <SideBarItem>Dashboard</SideBarItem>
          <li className='menu-title'>Management</li>
          <SideBarItem>Observasi</SideBarItem>
          <SideBarItem>Inventoris</SideBarItem>
          <SideBarItem>Pengobatan</SideBarItem>
          <li className='menu-title'>Data Master</li>
          <SideBarItem>Anak Asuhan</SideBarItem>
          <SideBarItem>Pegawai</SideBarItem>
          <SideBarItem>Tipe Pembayaran</SideBarItem>
          <SideBarItem>Jenis Ketunaan</SideBarItem>
          <SideBarItem>Barang Anak Asuhan</SideBarItem>
          <SideBarItem>Kebutuhan Medis</SideBarItem>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
