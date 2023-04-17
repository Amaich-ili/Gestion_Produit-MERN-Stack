import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreateProduct from './components/CreateProduct';
import ProductList from './components/ProductList';
import ShowProductDetails from './components/ShowProductDetails';
import UpdateProduct from './components/UpdateProduct';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={< ProductList />} />
          <Route path='/create-product' element={< CreateProduct />} />
          <Route path='/edit-product/:id' element={< UpdateProduct />} />
          <Route path='/show-product/:id' element={< ShowProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
