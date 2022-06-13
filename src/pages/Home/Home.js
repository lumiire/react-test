import {
  IonCard,
  IonCardHeader,
  // IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonButton,
} from '@ionic/react';
import { Component } from 'react';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return(
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Home page</IonCardTitle>
            </IonCardHeader>
            <Link to ="/about"><IonButton color="primary">About</IonButton></Link>
            <Link to ="/settings"><IonButton color="secondary">Settings</IonButton></Link>
          </IonCard>
        </IonContent>
    )
  }
}
export default App;
