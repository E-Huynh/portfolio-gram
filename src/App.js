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
      <section style={{display: 'flex', justifyContent: 'space-between'}}>
        <Container style={{ marginTop: 100, marginLeft: '20%', width: '70%', paddingLeft: 0 }}>
          {Data.map((el) => {
            return (
              <div key={el.id} style={{ paddingBottom: 50 }}>
                <Card data={el} />
              </div>
            )
          })}
        </Container>
        <Container style={{ marginTop: 100, marginRight: '20%', width: '30%', paddingRight: 0 }}>
          Highlights
        </Container>
      </section>
    </div>
  );
}

export default App;
