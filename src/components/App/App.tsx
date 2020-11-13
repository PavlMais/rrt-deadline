import React from 'react';
import './App.css';
import { Button, Card, Elevation } from '@blueprintjs/core'
import { connect, ConnectedProps } from 'react-redux'



function App() {
  return (
    <div className="App" >
      <Card className="my-card" elevation={Elevation.TWO} >
        text
        <Button intent="success" text="Text button"/>

      </Card>
    </div>
  );
}

export default App;
