import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Nav/NavigationBar';
import { Home, ProductsAll, Blog, Address } from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
   return (
      <>
         {/* TOP NAVIGATION -PHI LONG */}
         <h1>import no vao day nhha Long</h1>

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
      </>
   );
}

export default App;
