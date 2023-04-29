import { NavigationBar, NavRoute } from './components/navbar';
import Body from './components/body/Body'
import Topbar from './components/topbar';
import Footer from './components/footer/footer';
function App() {
   return (
      <>
         {/* TOP NAVIGATION -PHI LONG */}
      <Topbar/>
     
        {/* BOT NAVIGATION -PHUONG ANH */}
        <NavigationBar />
        <NavRoute />
        
      {/* Sidebar TRUNG  NGUYEN */}
       <Body></Body>
       <Footer></Footer>
    </>  

  );
}

export default App;
