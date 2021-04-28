import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {getCLS, getFID, getLCP} from 'web-vitals';
import {Helmet} from 'react-helmet'
const injectGA = () => {
  if (typeof window == 'undefined') {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'G-49D30NWPKQ');
};



ReactDOM.render(
  

  <React.StrictMode>
    <Helmet>
      <title>Kyle Jew</title>
      <script 
        async 
        src="https://www.googletagmanager.com/gtag/js?id=G-49D30NWPKQ"/>
      <script>{injectGA()}</script>
    </Helmet>
    
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

