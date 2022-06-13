import {
    IonHeader,
  IonToolbar,
  IonTitle,
} from '@ionic/react';
import { Component } from 'react';

class Header extends Component {
  render() {
    return(
      <IonHeader>
      <IonToolbar>
        
        <IonTitle>My Navigation Bar</IonTitle>
      
        <IonTitle>Subheader</IonTitle>
      </IonToolbar>
    </IonHeader>
    )
  }
}
export default Header;
