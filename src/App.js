import React from 'react';
import NavBar from './components/navbar';
import Card from './components/card';
import { Container } from '@material-ui/core';
import {Data} from './utils/postData'

function App() {
  return (
    <div>
      <NavBar />
      <section>
        <Container style={{ marginTop: 100, maxWidth: '60%' }}>
          {Data.map((el) => {
            return (
              <div style={{paddingBottom: 50}}>
            <Card />
          </div>
            )
          })}
        </Container>
      </section>
    </div>
  );
}

export default App;
