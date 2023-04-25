import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/navbar/NavigationBar';
import { Home, ProductsAll, Blog, Address } from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from "react-bootstrap";
import Body from './components/body/Body'
import Topbar from './components/topbar';
function App() {
   return (
      <>
         {/* TOP NAVIGATION -PHI LONG */}
      <Topbar/>
     
        {/* BOT NAVIGATION -PHUONG ANH */}
        <Container>
            <Row>
               <Col>
                  <Router>
                     <NavigationBar />
                     <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/productsall" element={<ProductsAll />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/store" element={<Address/>} />
                     </Routes>
                  </Router>
               </Col>
            </Row>
         </Container>
     
      {/* Sidebar TRUNG  NGUYEN */}
      <Body></Body>
    </>  

  );
}

export default App;
