import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Cart from './pages/CartPage';
import Home from './pages/HomePage';
import Product from './pages/ProductPage';
import UserProfile from './pages/ProfilePage';

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products/:productId' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/profile' element={<UserProfile />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
