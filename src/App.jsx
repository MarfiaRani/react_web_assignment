
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom'; // Use `react-router-dom` instead of `react-router`
import { Home } from './Component/Home';
import { About } from './Component/About';
import { ContactForm } from './Component/contact';
import Navbar from './Navbar';
import Footer from './Footer';
import BrowseByCategory from './Component/Categories';
import BestSellingProducts from './Component/BestSellingProducts';
import { SignUp} from './Component/SignUp';
import { Login } from './Component/Login';
import {Product} from './Component/Product';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <Navbar />
      {/* <Home /> */}
      {/* Browse By Category Section */}



      <Routes>
        {/* Pass components as JSX */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path='/Product' element={<Product/>}/>
        {/* <Route path="/categories" element={<BrowseByCategory />} /> */}
        <Route path="/bestselling" element={<BestSellingProducts />} />
        <Route path="/signup" element={<SignUp />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;


