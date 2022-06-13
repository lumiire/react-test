import {
    IonFooter,
  IonToolbar,
  IonTitle,
} from '@ionic/react';
import { Component } from 'react';

class Footer extends Component {
  render() {
    return(
      <IonFooter>
      <IonToolbar>
        
        <IonTitle>My Navigation Bar</IonTitle>
      
        <IonTitle>Subheader</IonTitle>
      </IonToolbar>
    </IonFooter>
    )
  }
}
export default Footer;
