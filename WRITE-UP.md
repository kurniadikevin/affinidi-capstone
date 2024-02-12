# Stackup Affinidi Capstone Write Up

## Title: Enhancing User Experience: A React.js Clothing Store with Multilingual and Currency Support

### Introduction:
In diverse global language and currency support an online store need to include variety language and currency conversion support too. This write up explore the development and implementation of that feature, showcasing how the integration of multilingual and multi currency support significantly enhances user experience and accessibility. This feature build upon the Affinidi Capstone login feature that allow the website to detect user currency and language based on user country info.

### Project Overview:
This project is based on Affinidi-Capstone with some improvement on multilingual and multicurrency with some of minor user interface improvement on how user access item in cart and additional product that available

# Key Feature:

## 1. Multilingual Support:

- The one of main feature that added is multilingual support with Affinidi Login the store can get user country origin. This data will automatically change the language of website as long as user on scope of 18 countries that available this include  America, Australia, Canada, Ireland, New Zealand, United Kingdom, Singapore, China,Taiwan, Hongkong, France, Germany, India, Indonesia, Russia, Spain, Japan, South Korea. 

- If user use other name of country than the 18 countries above on Affinidi user still can switch language on dashboard/ header of the website. This language selection support 10 language including English, Chinese (Traditional), French, Germany, Indonesian, Russian, Spanish, Hindi, Japanese, and Korean. ( You can see the list of country on ```countryCode``` object at ```./src/locales/languageCodeList.js``` file )

### How it work: 

- For this feature i'm using ```useTransaltion``` from ```react-i18next``` library to switch transalation selection on Header component you can find it at ```./src/components/Header.js``` this will allow to switch the placeholder of language that i use to subtitute language set. The set of language data is stored on ```./src/locales``` folders there is 10 different set of language folder that named by language code (en,frnc,jpn,..etc) that contain all file named ```transaltion.json```. This data then called on ```./src/i18n.js``` for i18t initiallization and specify default language as ```en`` (English).

- The file ```./src/locales/languageCodeList.js``` contain ```countryCode``` object that use for detect which language user can use based on their country data the other object called ```countryConversion``` allow each language to have each currency conversions.

## 2. Multicurrency Support: 
- This main feature allow user change currency automatically based on language they. The store price data is in USD and than based on user language of choice convert the value to other currency to display on website. 

### How it work: 

- Everytime user log-in the website store session-data of user language code. This language code data then used to find currency that user gonna use from ```./src/locales/languageCodeList.js``` on ```countryConversion``` object and then use the value as multiplier on default USD price. 

```product.price(in USD ) * conversion(multiplier value)```


## 3. Dynamic Cart Support:
-  When user added product to cart user can adjust quantity on /cart page. If user increase quantity of the product the total price will be adjusted and so does when user decrease it. 
This feature also allow user to automatically delete item from cart if user adjust quantity to zero, making the product of choice remove from cart at all.

## 4. Styling Component:
- The website now using box shadow on component to make page look more clean. Font-family also changed to monospace and Fira-Sans on Header component.

## 5. Include More Product:
-  The store now display 7 more products making total of 10 products to display on variety of prices. 


