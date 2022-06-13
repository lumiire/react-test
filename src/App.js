import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import { IonApp } from '@ionic/react';
import { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { Routes } from 'react-router';

class App extends Component {
  render() {
    return(
      <IonApp>
        <Header />
        <Routes />
        <Footer />
      </IonApp>

    )
  }
}
export default App;
