import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './components/navbar';
import ProjectCard from './components/ProjectCard';
import { Container, Typography, Card, Grid } from '@material-ui/core';
import { Data } from './utils/postData';
import { HighlightsData } from './utils/highlightsData';
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
    paddingRight: 0,
  },
  topSpacing: {
    marginTop: 75
  },
  postSpacing: {
    paddingBottom: 50
  },
  highlightsDiv: {
    position: 'fixed'
  }
}));

function App() {
  const classes = useStyles();

  return (<>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
    </Grid>
    <Grid container spacing={3}>
      <Grid item sm={12} md={2}/>
      <Grid item md={5} className={classes.topSpacing}>
        <Container>
          {Data.map((el) => {
            return (
              <div key={el.id} className={classes.postSpacing}>
                <ProjectCard data={el} />
              </div>
            )
          })}
        </Container>
      </Grid>
      <Grid item sm={12} md={3} className={classes.topSpacing}>
        <Container>
          <Card>
            <Typography
              variant="body2"
              color="textPrimary"
              component="div"
            >
              Highlights
            </Typography>
              {HighlightsData.map((el) => {
                return (
                  <div key={el.id}>
                    <Highlights data={el} />
                  </div>
                )
            })}
          </Card>
        </Container>
      </Grid>
      <Grid item sm={12} md={2}/>
    </Grid>
    </>
  );
}

export default App;
