import SideBarItem from '@/components/SideBar/SideBarItem';

function SideBar({ children }) {
  return (
    <div className='drawer lg:drawer-open'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex overflow-x-hidden'>{children}</div>
      <div className='drawer-side '>
        <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
        <ul className='menu p-4 w-80 h-full bg-base-200 text-base-content'>
          <SideBarItem href='/management'>Dashboard</SideBarItem>

          <li className='menu-title'>Management</li>
          <SideBarItem>Observasi</SideBarItem>
          <SideBarItem>Inventoris</SideBarItem>
          <SideBarItem>Pengobatan</SideBarItem>

          <li className='menu-title'>Data Master</li>
          <SideBarItem href='/management/master/anak-asuhan'>
            Anak Asuhan
          </SideBarItem>
          <SideBarItem href='/management/master/pegawai'>Pegawai</SideBarItem>
          <SideBarItem href='/management/master/jenis-pembayaran'>
            Tipe Pembayaran
          </SideBarItem>
          <SideBarItem href='/management/master/jenis-ketunaan'>
            Jenis Ketunaan
          </SideBarItem>
          <SideBarItem href='/management/master/barang-anak-asuhan'>
            Barang Anak Asuhan
          </SideBarItem>
          <SideBarItem href='/management/master/kebutuhan-medis'>
            Kebutuhan Medis
          </SideBarItem>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
