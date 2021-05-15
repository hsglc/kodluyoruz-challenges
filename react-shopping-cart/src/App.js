import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { products } from "./constants";
import ProductsGrid from "./components/ProductsGrid";

const App = (props) => {
  const [totalItemCount, setTotalItemCount] = useState(0);

  const [shoppingCart, setShoppingCart] = useState([
    { id: 0, value: 0 },
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
    { id: 5, value: 0 },
  ]);

  const getItemCount = (cart) => {
    // Sepetteki toplam ürün sayısını bul
    let itemCount = cart.reduce((total, product) => total + product.value, 0);

    return itemCount;
  };

  const handleIncrement = (product) => {
    // cart array'inin kopyasını oluştur
    const cart = [...shoppingCart];
    // parametre olarak gelen product'ın cart array'i içerisindeki index'ini bul
    const index = cart.indexOf(product);
    // kopyalanan cart array'ine bu ürünü ekle ve value property'sini 1 artır
    cart[index] = { ...cart[index] };
    cart[index].value++;
    // getItemCount fonksiyonunu kullanarak sepetteki ürün sayısını bul
    const itemCount = getItemCount(cart);
    // state'i güncelle

    setTotalItemCount(itemCount);
    setShoppingCart(cart);
  };

  const handleDecrement = (product) => {
    const cart = [...shoppingCart];
    const index = cart.indexOf(product);
    cart[index] = { ...cart[index] };
    cart[index].value--;
    const itemCount = getItemCount(cart);

    setTotalItemCount(itemCount);
    setShoppingCart(cart);
  };

  return (
    <div className="App">
      <Navbar totalItems={totalItemCount} />
      <ProductsGrid
        products={products}
        cart={shoppingCart}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
};

export default App;
