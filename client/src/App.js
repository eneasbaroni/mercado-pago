import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { CartProvider } from './context/cartContext';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import About from './pages/About/About';
import Product from './pages/Product/Product';
import { Footer } from './components/Footer/Footer';
import Checkout from './pages/Checkout/Checkout';
import Pending from './pages/Pending/Pending';
import Failure from './pages/Failure/Failure';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/catalog" element={<Catalog/>}/>
          <Route path="/catalog/:id" element={<Product/>}/>          
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/pending" element={<Pending/>}/>
          <Route path="/failure" element={<Failure/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
