import React from 'react';
import { HeaderComponent as Header } from './components/HeaderComponent';
import { GameComponent as Main } from './components/GameComponent';
import { FooterComponent as Footer } from './components/FooterComponent';
import { App } from './styles/App';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

function AppComponent() {
  return (
    <App>
      <Header />
      <Main />
      <Footer />
    </App>
  );
}

export default AppComponent;
