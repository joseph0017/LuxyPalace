import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
import PrivateRoute from './utils/PrivateRoute';
import Checkout from './pages/Checkout';

function App () {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<PrivateRoute>
                                          <Product />
                                        </PrivateRoute>} />
        <Route path='/product/:id' element={<PrivateRoute>
                                              <ProductDetail />
                                            </PrivateRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/register' element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
