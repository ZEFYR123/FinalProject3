import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Outlet } from 'react-router-dom';
import Home from './components/Home/Home';
import Catalog from './components/Catalog_PizzaDetails/Catalog';
import Reviews from './components/Reviews/Reviews';
import style from './App.module.css'
import Contact from './components/Contact/Contact';
import PizzaDetails from './components/Catalog_PizzaDetails/PizzaDetails'
import Cart from './components/Cart/Cart'
import cart from './images/cart2.png'
function App() {
  return (
    <Router>
      <div className={style.main}>
        <nav className={style.nav}>
          <ul className={style.ul}>
            <li className={style.li}>
              <Link to="/" className={style.l}>Главная</Link>
            </li>
            <li>
              <Link to="/catalog/" className={style.l}>Каталог</Link>
            </li>
            <li>
              <Link to="/reviews" className={style.l}>Отзывы</Link>
            </li>
            <li>
              <Link to="/contact" className={style.l}>Контакты</Link>
            </li>
            <li>
              <Link to="/cart" className={style.l}><img className={style.cart}  src={cart} alt="Review Image" /></Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/catalog/:pizzaId" element={<PizzaDetails />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        
       
      </div>
      <footer className={style.footer}>c 2023 Pizza Place.Все права защищены</footer>
    </Router>
    


  );

} export default App;
