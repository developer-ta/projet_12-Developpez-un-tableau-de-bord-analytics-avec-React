import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import SideBar from '../components/side/SideBar';
import Footer from '../components/footer/Footer';

export default function MainLayout() {
  return (
    <div id="mainLayout">
      <Header />
      <SideBar />
      {/* component body hear ! */}
      <Outlet />
      <Footer />
    </div>
  );
}
