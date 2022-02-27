import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Page.css';

const Bairwa: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Bairwa</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Bairwa</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div>Hey, Bairwa here. Find my first name!</div>
        <IonButton routerLink='/ashish'>Move to first name</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Bairwa;
