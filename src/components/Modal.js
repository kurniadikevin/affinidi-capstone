import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Modal.css';
import { useTranslation } from "react-i18next";


const Modal = ({ closeModal }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const goToCart = () => {
    closeModal();
    navigate('/cart');
  };

  return (
    <div className="ModalOverlay">
      <div className="Modal">
        <p>{t('item successfully added to cart')}</p>
        <button onClick={goToCart}>{t('gotocart')}</button>
        <button onClick={closeModal}>{t('continueshopping')}</button>
      </div>
    </div>
  );
};

export default Modal;