import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { AffinidiLoginButton, useAffinidiProfile } from '@affinidi/affinidi-react-auth';
import './Header.css';
import { useTranslation } from "react-i18next";


const Header = () => {
  const { setProfile } = useContext(UserContext);
  const { isLoading, error, profile, handleLogout } = useAffinidiProfile({
    authCompleteUrl: '/api/affinidi-auth/complete'
  });

  const [localProfile, setLocalProfile] = useState(null);
  const { t, i18n } = useTranslation();

  //Creating a method to change the language from profile country data
  const changeLanguageHandler = (languageValue) => {
      i18n.changeLanguage(languageValue) 
    }

  // Change language from option
  const changeLanguageByOption= (e) => {
    const languageValue = e.target.value
    i18n.changeLanguage(languageValue);
  }

  // Convert country name to specific country code
  const findCountryCode=(input)=>{
    const codeList={
      'english' : 'en',
      'usa' : 'en',
      'america' : 'en',
      'china' : 'cnn',
      'france' : 'frnc',
      'germany' :'grm',
      'india' : 'hn',
      'indonesia' : 'ina',
      'russia' : 'rss',
      'spanyol' : 'spa'
    }
    // return english language as default if code not found
   return codeList[input] ? codeList[input] : 'en'
  }

  useEffect(() => {
  // Convert objects to strings to compare them
  const currentProfileStr = JSON.stringify(profile);
  const localProfileStr = JSON.stringify(localProfile);

 
  // Only update if the stringified versions differ
  if (currentProfileStr !== localProfileStr) {
    setLocalProfile(profile);
    setProfile(profile); // assuming setProfile comes from a context and is stable
  }

}, [profile])

  useEffect(()=>{
    if(profile){
     changeLanguageHandler(findCountryCode(profile.country.toLowerCase()))
    }
  },[])

  const logout = () => {
    handleLogout();
    window.location.href = "/";
  };

  const renderLoginState = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (error) {
      handleLogout();
      return (
        <div>
          <p>Unable to load user data. Please try again later.</p>
        </div>
      );
    }

    if (profile) {
      console.log(profile)
        return (
          <div>
            <span>{t('welcome')},  {profile.givenName}</span>
            <button onClick={logout}>Logout</button>
          </div>
        );
      }
  
  return <AffinidiLoginButton />;
    };
  
    return (
      <header className="Header">
        <div className='header-left'>
          <Link to="/">
            <h1>StackShop</h1>
          </Link>
          <select className="lang-option" onChange={changeLanguageByOption}>
            <option value="en" >English</option>
            <option value="hn" >Hindi</option>
            <option value="frnc" >French</option>
            <option value="spa" >Spanish</option>

            <option value="grm" >German</option>
            <option value="rss" >Russian</option>
            <option value="cnn" >Chinese</option>
            <option value="ina" >Indonesian</option>

          </select>
        </div>
        <nav>
          {renderLoginState()}
          <Link to="/cart" className="CartIcon">
            <img src="/cart.png" alt="Cart"/>
          </Link>
        </nav>
      </header>
    );
  };
  
  export default Header;