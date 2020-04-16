import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './components/navbar';
import ProjectCard from './components/ProjectCard';
import { Container, Typography, Card, Grid, useMediaQuery } from '@material-ui/core';
import { Data } from './utils/postData';
import { HighlightsData } from './utils/highlightsData';
import Highlights from './components/highlights';

const useStyles = makeStyles((theme) => ({
  topSpacing: {
    marginTop: 75
  },
  postSpacing: {
    paddingBottom: 50
  },
  highlightsDiv: {
    position: 'fixed',
    maxWidth: '100%'
  }
}));

function App() {
  const classes = useStyles();
  const isColumn = useMediaQuery('(max-width: 959px');
  const [ state, setState ] = useState({
    postType: ''
  })

  return (<>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
    </Grid>
    <Grid container spacing={3} 
      direction={isColumn ? 'column-reverse': 'row' }
    >
      <Grid item sm={12} md={2} />
      <Grid item md={5} className={classes.topSpacing}>
        <Container>
          { state.postType !== '' 
          ? Data.filter(el => el.type === state.postType)
               .map((el) => {
                  return (
                    <div key={el.id} className={classes.postSpacing}>
                      <ProjectCard data={el} />
                    </div>
                  )
                }
          )
         : Data.map((el) => {
            return (
              <div key={el.id} className={classes.postSpacing}>
                <ProjectCard data={el} />
              </div>
            )
          }
    )
        }
        </Container>
      </Grid>
      <Grid item sm={12} md={3} className={classes.topSpacing}>
        <Container>
          <Card
            // className={classes.highlightsDiv}
          >
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
                    <Highlights data={el} setState={setState} />
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
