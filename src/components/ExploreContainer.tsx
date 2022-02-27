import { IonButton } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <IonButton routerLink='/ashish'>Move to my name</IonButton>
    </div>
  );
};

export default ExploreContainer;
