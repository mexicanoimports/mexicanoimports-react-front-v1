// CartContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

// Criar o contexto
const CartContext = createContext();

// Provedor do contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  // Adicionar um item ao carrinho
  const addToCart = (item) => {
    if (!item.price) {
      return
    }
    setCart((prevCart) => [...prevCart, item]);
    setCartIsOpen(true)
    console.log(cart)
  };

  // Remover um item do carrinho
  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  // Limpar o carrinho
  const clearCart = () => {
    setCart([]);
  };

  // Função para obter o valor total do carrinho
  const getTotalCartValue = () => {
    const total = cart.reduce((total, item) => total + Number(item.price), 0);
    return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Salvar o carrinho no Local Storage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, cartIsOpen, setCartIsOpen, getTotalCartValue }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para usar o contexto do carrinho
export const useCart = () => {
  return useContext(CartContext);
};