
import React from 'react';
import './ProductDisplay.css';
import { useTranslation } from "react-i18next";

const ProductDisplay = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Hoodie', price: 10, imageUrl: 'hoodie.png' },
    { id: 2, name: 'T-Shirt', price: 15, imageUrl: 'tee.png' },
    { id: 3, name: 'Jeans', price: 30, imageUrl: 'jean.png' },
    { id: 4, name: 'Yellow-Dress', price: 20, imageUrl: 'yellow-dress.png' },
    
  ];

  const { t, i18n } = useTranslation();

  return (
    <div className="ProductDisplay">
      {products.map((product) => (
        <div key={product.id} className="ProductItem">
          <img src={product.imageUrl} alt={product.name} />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>{t('addtocart')}</button>
        </div>
      ))}
    </div>
      );
};

export default ProductDisplay;