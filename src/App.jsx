import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import './App.css';
const productsData = [
  { id: 1, name: 'Fancy Product', price: '$40.00 - $80.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg' },
  { id: 2, name: 'Special Item', price: '$18.00', oldPrice: '$20.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', sale: true },
  { id: 3, name: 'Sale Item', price: '$25.00', oldPrice: '$50.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', sale: true },
  { id: 4, name: 'Popular Item', price: '$40.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg' },
  { id: 1, name: 'Sale Item', price: '$40.00 - $80.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg' },
  { id: 2, name: 'Fancy Product', price: '$18.00', oldPrice: '$20.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', sale: true },
  { id: 3, name: 'Special Item', price: '$25.00', oldPrice: '$50.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', sale: true },
  { id: 4, name: 'Popular Item', price: '$40.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg' }

  


];

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return (
    <div>
      <Navbar cartItemCount={cartItems.length} />
      <Header />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {productsData.map(product => (
              <Product
                key={product.id}
                product={product}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                inCart={cartItems.some(item => item.id === product.id)}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
