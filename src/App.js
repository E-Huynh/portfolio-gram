import React from 'react';
import NavBar from './components/navbar';
import Card from './components/card';
import { Container } from '@material-ui/core';
import { Data } from './utils/postData';
import Highlight from './components/highlight';

function App() {
  console.log(Data[1])
  return (
    <div>
      <NavBar />
      <section>
        <Container style={{ marginTop: 100, maxWidth: '60%' }}>
          {Data.map((el) => {
            return (
              <div key={el.id} style={{ paddingBottom: 50 }}>
                <Card data={el} />
              </div>
            )
          })}
        </Container>
      </section>
    </div>
  );
}

export default App;
