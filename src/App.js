
/* -------------------- Imports --------------------*/
import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Contact from './routes/contact';
import Home from './routes/home';
import Product from './routes/product';
import Footer from './components/footer';
function App() {
  return (
    <BrowserRouter>      
    {/* Nav Bar */}
    <div className='navbar'>
    <Link to = "Contact">
    <i class="fa-solid fa-address-book" id = "icon"></i>
    </Link>
    
                <br></br>

            <Link to = "/">  
            <img class = "logo"  src = "Images/ongaku-logo.png" alt = "Ongaku Logo"/>
            </Link>

                <br></br>

            <Link to = "Product">
            <i class="fa-solid fa-cart-shopping" id = "icon"></i>
            </Link>

            </div>
             
        <div className="App">
          {/* -------------- Routes -------------- */}

    <Routes>    
    <Route path = "/" element = {<Home/>}/> 
      <Route path = "/Contact" element = {<Contact/>}/> 
      <Route path = "/Product" element = {<Product/>}/> 
    </Routes>
        </div>
          {/* -------------- Footer -------------- */}
        <Footer/>
        </BrowserRouter>
        
  );
}

export default App;
