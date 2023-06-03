import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header';
import LoginPage from './Components/Login/Login';
import CheckoutPage from './Components/Checkout/Checkout';

function App() {

  // const [cart, setCart] = useState([]);


  return (
    <>
      <Header/>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/checkout" element={<CheckoutPage/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
