
import './App.css';
import Banner from './Components/Banner';
import Collections from './Components/Collections';
import Footer from './Components/Footer';
import Items from './Components/Items';
import Navbar from './Components/Navbar';
import Seller from './Components/Seller';
import Work from './Components/Works';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <Work/>
     <Items/>
     <Collections/>
     <Seller/>
     <Footer/>
    </div>
  );
}

export default App;
