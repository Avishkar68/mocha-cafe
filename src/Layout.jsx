import { Outlet, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout = () => {
  return (
    <div className="app font-inter">
      <nav className="navbar">
       <Navbar />
      </nav>
      
      <main className="content bg-mainbg flex justify-center">
        <Outlet /> 
      </main>

       <footer className="footer">
       <Footer />
      </footer>
      
    </div>
  );
};

export default Layout;