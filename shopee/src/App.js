import './App.scss';
import {
  Routes,
  Route
} from 'react-router-dom';
import {Header} from "./Component/Header";
import {Home} from "./View/Home";
import { Footer } from './Component/Footer';
import { Product } from './View/Product';
import { ProductManager } from './View/ProductManager';

function App() {
  return (
    <div className="App">
      <Header/>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/product-manager" element={<ProductManager/>} />
        </Routes>

      <Footer/>
    </div>
  );
}

export default App;
