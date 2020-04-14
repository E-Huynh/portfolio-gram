import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './components/navbar';
import Card from './components/card';
import { Container } from '@material-ui/core';
import { Data } from './utils/postData';
import Highlights from './components/highlights';

const useStyles = makeStyles((theme) => ({
  displayFlex: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  leftColumn: {
    marginTop: 100,
    marginLeft: '20%',
    width: '70%',
    paddingLeft: 0
  },
  rightColumn: {
    marginTop: 100,
    marginRight: '20%',
    width: '30%',
    paddingRight: 0
  },
  postSpacing: {
    paddingBottom: 50
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <section className={classes.displayFlex}>
        <Container className={classes.leftColumn}>
          {Data.map((el) => {
            return (
              <div key={el.id} className={classes.postSpacing}>
                <Card data={el} />
              </div>
            )
          })}
        </Container>
        <Container className={classes.rightColumn}>
          <Highlights/>
        </Container>
      </section>
    </div>
  );
}

export default App;
