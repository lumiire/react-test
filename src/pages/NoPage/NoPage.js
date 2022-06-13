import {
  IonCard,
  IonCardHeader,
  // IonCardSubtitle,
  IonCardTitle,
  IonContent,
} from '@ionic/react';
import { Component } from 'react';

class NoPage extends Component {
  render() {
    return(
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>NoPage page</IonCardTitle>
            </IonCardHeader>
          </IonCard>
        </IonContent>
    )
  }
}
export default NoPage;
