import React from "react";

// Better auto-completion

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (id) => {},
  removeItem: (id) => {},
  addFavorite: (item) => {},
  
});

export default CartContext;
