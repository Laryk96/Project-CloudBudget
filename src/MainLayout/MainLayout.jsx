import Footer from 'components/Footer';
import AppBar from 'components/NavBar/AppBar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
