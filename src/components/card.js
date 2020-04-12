import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography } from '@material-ui/core'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  button: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  user: {
    fontWeight: 'bold',
    color: '#000000'
  }
}));

function ProjectCard({ data }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="Erik Huynh"
            src={'https://avatars0.githubusercontent.com/u/56613046?s=460&u=dd342c337117a7ef40ee31b67df2c0b4c310f2cc&v=4'}
          />
        }
        action={
          <IconButton aria-label="Options" className={classes.button} disableRipple>
            <MoreVertIcon />
          </IconButton>
        }
        title={<span className={classes.user}>Erik Huynh</span>}
        subheader={data.title}
      />
      <CardMedia
        className={classes.media}
        image={data.image}
        title={data.title}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="Like" className={classes.button} disableRipple>
          <FavoriteBorderOutlinedIcon />
        </IconButton>
        <IconButton aria-label="Repository" className={classes.button} disableRipple>
          <Link href={data.repo} target="_blank" color={'inherit'}>
            <GitHubIcon />
          </Link>
        </IconButton>
        {data.link
          ? <IconButton aria-label="Link" className={classes.button} disableRipple>
              <Link href={data.link} target="_blank" color={'inherit'}>
                <LinkIcon />
              </Link>
            </IconButton>
          : null
        }
      </CardActions>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <span className={classes.user}>Erik Huynh</span> {data.description}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {data.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;