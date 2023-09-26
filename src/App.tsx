import React from 'react';
import './App.css';
import { IonButton, IonDatetime } from '@ionic/react';

function App() {
  return (
    <div className="App">
          <>
      <IonDatetime></IonDatetime>
      <IonButton fill="clear">Start</IonButton>
    </>
    </div>
  );
}

export default App;
