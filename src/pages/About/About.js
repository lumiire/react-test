import {
  IonCard,
  IonCardHeader,
  // IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonButton,
} from '@ionic/react';
import { Component, Link } from 'react';

class About extends Component {
  render() {
    return(
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>About page</IonCardTitle>
            </IonCardHeader>
            <Link to ="/"><IonButton color="primary">Home</IonButton></Link>
            <Link to ="/settings"><IonButton color="secondary">Settings</IonButton></Link>
          </IonCard>
        </IonContent>
    )
  }
}
export default About;
