import {
  IonCard,
  IonCardHeader,
  // IonCardSubtitle,
  IonCardTitle,
  IonContent,
} from '@ionic/react';
import { Component } from 'react';

class Settings extends Component {
  render() {
    return(
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Settings page</IonCardTitle>
            </IonCardHeader>
          </IonCard>
        </IonContent>
    )
  }
}
export default Settings;
