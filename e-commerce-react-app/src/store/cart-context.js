import React from "react";

// Better auto-completion

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  addFavorite: (item) => {},
  
});

export default CartContext;
