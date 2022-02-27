import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Page.css';

const Ashish: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Ashish</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Ashish</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div>Hey, Ashish here. Find my sirname!</div>
        <IonButton routerLink="/bairwa">Move to sirname</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Ashish;
