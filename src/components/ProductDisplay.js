
import React from 'react';
import './ProductDisplay.css';
import { useTranslation } from "react-i18next";
import { countryConversion } from '../locales/languageCodeList';

const ProductDisplay = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Hoodie', price: 10, imageUrl: 'hoodie.png' },
    { id: 2, name: 'T-Shirt', price: 15, imageUrl: 'tee.png' },
    { id: 3, name: 'Jeans', price: 30, imageUrl: 'jean.png' },
    { id: 4, name: 'Camo Jacket', price: 20, imageUrl: 'camo-jacket.png' },
    { id: 5, name: 'Leather jacket', price: 40, imageUrl: 'jacket-black.png' },
    { id: 6, name: 'Brown Coat', price: 35, imageUrl: 'brown-coat.png' },
    { id: 7, name: 'Varsity Red', price: 25, imageUrl: 'varsity-red.png' },
    { id: 8, name: 'Varsity Purple', price: 25, imageUrl: 'varsity-purple.png' },
    { id: 9, name: 'Denim Jacket', price: 40, imageUrl: 'denim-jacket.png' },
    { id: 10, name: 'Suede Boots', price: 60, imageUrl: 'suede-boots.png' },
    
  ];

  const { t, i18n } = useTranslation();

  //format for currency english-US format
  const formatter = new Intl.NumberFormat('en-US');

  //get current language that store in session to sync currency
  const countryData = JSON.parse( sessionStorage.getItem('language'));
  const conversion= countryConversion[countryData];

  return (
    <div className="ProductDisplay">
      {products.map((product) => {
       
      return(
        <div key={product.id} className="ProductItem">
          <img src={product.imageUrl} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{formatter.format(product.price * conversion)} {t('currency')}</p>
          <button onClick={() => addToCart(product,true)}>{t('addtocart')}</button>
        </div>
      )})}
    </div>
      );
};

export default ProductDisplay;