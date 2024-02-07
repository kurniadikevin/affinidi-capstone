import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
import { useTranslation } from "react-i18next";
import { countryConversion } from '../locales/languageCodeList';

const Cart = ({ cartItems }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

    //format for currency english-US format
    const formatter = new Intl.NumberFormat('en-US');

    //get current language that store in session to sync currency
    const countryData = JSON.parse( sessionStorage.getItem('language'));
    const conversion= countryConversion[countryData];

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  const goToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="Cart">
      <table>
        <thead>
          <tr>
            <th>{t('product')}</th>
            <th>{t('name')}</th>
            <th>{t('quantity')}</th>
            <th>{t('price')}</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length === 0 ? (
            <tr>
              <td colSpan="4">{t('your cart is empty')}</td>
            </tr>
          ) : (
            cartItems.map((item) => (
              <tr key={item.id}>
                <td><img src={item.imageUrl} alt={item.name} /></td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{formatter.format(item.price * conversion)} {t('currency')}</td>
              </tr>
            ))
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">{t('total')}</td>
            <td>{formatter.format(getTotalPrice() * conversion)} {t('currency')}</td>
          </tr>
        </tfoot>
      </table>
      <button onClick={goToCheckout} disabled={cartItems.length === 0}>{t('gotocheckout')}</button>
    </div>
  );
};

export default Cart;