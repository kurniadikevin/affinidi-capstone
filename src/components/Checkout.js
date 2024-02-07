import React, { useState, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from './ConfirmationModal';
import './Checkout.css';
import { useTranslation } from "react-i18next";

const Checkout = ( {clearCart} ) => {
  const { profile } = useContext(UserContext);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const [userData, setUserData] = useState({
    firstName: profile?.givenName || '',
    lastName: profile?.familyName || '', 
    email: profile?.email || '',
    phone: profile?.phoneNumber || '', 
    address: profile?.streetAddress || '', 
    postalCode: profile?.postalCode || '',
    city: profile?.locality || '', 
    country: profile?.country || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmationModal(true)
    clearCart();
  };

  const closeConfirmationModal = () => {
    setShowConfirmationModal(false);
    navigate('/');
  };

  return (
    <div className="CheckoutContainer">
      <div className="Checkout">
        <h2>{t('checkout')}</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">{t('email')}</label>
          <input 
            type="email" 
            name="email" 
            id="email"
            value={userData.email} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="firstName">{t('firstname')}</label>
          <input 
            type="text" 
            name="firstName" 
            id="firstName"
            value={userData.firstName} 
            onChange={handleChange}
          />

          <label htmlFor="lastName">{t('lastname')}</label>
          <input 
            type="text" 
            name="lastName" 
            id="lastName"
            value={userData.lastName} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="address">{t('adddress')}</label>
          <input 
            type="text" 
            name="address" 
            id="address"
            value={userData.address} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="postalCode">{t('postalcode')}</label>
          <input 
            type="text" 
            name="postalCode" 
            id="postalCode"
            value={userData.postalCode} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="city">{t('city')}</label>
          <input 
            type="text" 
            name="city" 
            id="city"
            value={userData.city} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="country">{t('country')}</label>
          <input 
            type="text" 
            name="country" 
            id="country"
            value={userData.country} 
            onChange={handleChange} 
            required 
          />

          <button type="submit" className="ContinueButton">{t('submitorder')}</button>
        </form>
      </div>
      {showConfirmationModal && (
        <ConfirmationModal closeModal={closeConfirmationModal} />
      )}
    </div>
  );
};

export default Checkout;