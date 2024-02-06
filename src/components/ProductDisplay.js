
import React from 'react';
import './ProductDisplay.css';
import { useTranslation } from "react-i18next";

const ProductDisplay = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Hoodie', price: 10, imageUrl: 'hoodie.png' },
    { id: 2, name: 'T-Shirt', price: 15, imageUrl: 'tee.png' },
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