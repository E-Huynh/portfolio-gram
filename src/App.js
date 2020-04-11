import React from 'react';
import NavBar from './components/navbar';
import Card from './components/card';
import { Container } from '@material-ui/core'


function App() {
  return (
    <div>
      <NavBar />
      <section>
        <Container style={{ marginTop: 100, maxWidth: '60%' }}>
          <div style={{paddingBottom: 50}}>
            <Card />
          </div>
          <div style={{paddingBottom: 50}}>
            <Card />
          </div>
          <div style={{paddingBottom: 50}}>
            <Card />
          </div>
        </Container>
      </section>
    </div>
  );
}

export default App;
