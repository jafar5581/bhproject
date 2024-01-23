import './App.css';
import NavBarPage from './Componet/navigationBar/NavBar';
import HomePage from './Componet/Home/HomePage';
import LoginPage from './Componet/Home/LoginPage';
import Category from './Componet/Catageory/catageory';
import FoundationPage from './Componet/Catageory/FoundationCat';
import MenCategeory from './Componet/Catageory/menCategory';
import WomenCat from './Componet/Catageory/woMenCategeory';
import AccessoriesCat from './Componet/Catageory/AccessoriesCat';
import MenTshirt from './Componet/Catageory/MenTshirts';
import MenShirts from './Componet/Catageory/MenShirts';
import MentJacket from './Componet/Catageory/MenJacket';

import { Routes,Route } from 'react-router-dom';
import MenJeans from './Componet/Catageory/MenJeans';
import WomenTshirt from './Componet/Catageory/WomenCatageory/womenTshirts';
import WomenJeans from './Componet/Catageory/WomenCatageory/WomenJeans';
import WoMenJacket from './Componet/Catageory/WomenCatageory/WomenJackets';
import CapCatageory from './Componet/Catageory/Accessories/CapCatageory';
import MaskCatageory from './Componet/Catageory/Accessories/MaskCatageory';
import AboutUs from './Componet/footer/aboutus';
import FooterPage from './Componet/footer/footer';
import ContactPage from './Componet/footer/contact';
import StoreLocator from './Componet/footer/storeLocator';
import PrivacyPolicy from './Componet/footer/PrivacyPolicy';
import ErrorPage from './Componet/Home/Error';
import ShippingPolicy from './Componet/footer/shippingpolicy';
import CheckProduct from './Componet/Product/CheckProduct';
import ScrollToTop from './Componet/ScrollToTop/ScrollToTop';



function App() {
  return (
    <div>
      <ScrollToTop/>
      <NavBarPage/>
      <Routes>
        <Route path='/' element={  <HomePage/> }/>
      
        <Route path='/mens' element={<MenCategeory/>}/>
        <Route path='/women' element={<WomenCat/>}/>
        <Route path="/cat" element={<AccessoriesCat/>}/>
              {/* MEN CATEGEORY */}
        <Route path="/mentshirt" element={<MenTshirt/>}/>
        <Route path="/menshirt" element={<MenShirts/>}/>
        <Route path="/menjean" element={<MenJeans/>}/>
        <Route path="/menjacket" element={<MentJacket/>}/>
        {/* WOMEN CATEGEORY */}
        <Route path="/womentshirt" element={<WomenTshirt/>}/>
        <Route path="/womenjean" element={<WomenJeans/>}/>
        <Route path="/womenjacket" element={<WoMenJacket/>}/>
         {/* ACCESSORIES CATEGEORY */}
         <Route path="/accessoriescap" element={<CapCatageory/>}/>
        <Route path="/accessoriesmask" element={<MaskCatageory/>}/>
          {/* LOGIN PAGE */}
          <Route path="/login" element={<LoginPage/>}/>
            {/* FOOTER  PAGE */}
            <Route path="/about" element={<AboutUs/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/storelocator' element={<StoreLocator/>}/>
            <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
            <Route path='/shippingpolicy' element={<ShippingPolicy/>}/>
            {/* CHECKPRODUCTS */}
            <Route path='/productdetails' element={<CheckProduct/>}/>
            <Route path='/*' element={<ErrorPage/>}/>

          

        
      </Routes>
      <FooterPage/>
   
   
  
    </div>
   
  );
}

export default App;
