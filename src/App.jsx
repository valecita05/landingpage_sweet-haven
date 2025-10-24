import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import WhyChooseUs from "./components/WhyChooseUs";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import CartModal from "./components/CartModal";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.name === product.name);
      if (existing) {
        return prev.map((p) =>
          p.name === product.name ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (name, quantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.name === name
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    );
  };

  const removeItem = (name) => {
    setCartItems((prev) => prev.filter((item) => item.name !== name));
  };

  return (
    <>
      {/* 🛒 Header con contador y evento para abrir el carrito */}
      <Header
        cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
        onCartClick={() => setShowCart(true)}
      />

      <main>
        <Hero />
        <Products onAddToCart={addToCart} />
        <WhyChooseUs />
        <Categories />
      </main>

      <Footer />

      {/* 🛍️ Modal Carrito */}
      <CartModal
        show={showCart}
        cartItems={cartItems}
        onClose={() => setShowCart(false)}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
      />
    </>
  );
}

export default App;