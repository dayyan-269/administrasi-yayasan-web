import NavBar from '@/components/Navbar/NavBar';
import SideBar from '@/components/SideBar/SideBar';

function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <SideBar>{children}</SideBar>
    </div>
  );
}

export default Layout;
