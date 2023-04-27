import { Home, ProductsAll, Blog, Address } from '~/components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const NavRoute = () => {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productsall" element={<ProductsAll />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/store" element={<Address />} />
         </Routes>
      </Router>
   );
};

export default NavRoute