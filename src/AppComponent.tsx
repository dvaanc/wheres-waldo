import React from 'react';
import { HeaderComponent as Header } from './components/HeaderComponent';
import { GameComponent as Main } from './components/GameComponent';
import { FooterComponent as Footer } from './components/FooterComponent';
import LevelSelectComponent from './components/LevelSelectComponent';
import { App } from './styles/App';


function AppComponent() {
  React.useEffect(() => {
  })
  return (
    <App>
      <LevelSelectComponent />
      <Header />
      <Main />
      <Footer />
    </App>
  );
}

export default AppComponent;
