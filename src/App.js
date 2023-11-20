
import './App.css'; 
import Cart from './pages/Cart/Cart';
import Favourite from './pages/Favourite/Favourite';
import Home from './pages/Home/Home';
import { Route,Routes } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Header from './components/Header/Header';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <> 
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favourite' element={<Favourite/>}/>
        <Route path='/cart' element={<Cart/>}/> 
        <Route path='/product/:id' element={<ProductDetails/>}/> 
        <Route path='*' element={<NotFound/>}/> 
      </Routes>
    </>
  );
}

export default App;
