import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography} from '@material-ui/core'
import { red } from '@material-ui/core/colors';
import { FavoriteBorderOutlinedIcon, GitHubIcon, LinkIcon, MoreVertIcon } from '@material-ui/icons/FavoriteBorderOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ProjectCard({ data }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            className={classes.avatar}
            src={'https://avatars0.githubusercontent.com/u/56613046?s=460&u=dd342c337117a7ef40ee31b67df2c0b4c310f2cc&v=4'}
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Erik Huynh"
        subheader={data.title}
      />
      <CardMedia
        className={classes.media}
        image={data.image}
        title={data.title}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="Like" disableRipple>
          <FavoriteBorderOutlinedIcon />
        </IconButton>
        <IconButton aria-label="Repository" disableRipple>
          <GitHubIcon />
        </IconButton>
        <IconButton aria-label="Link" disableRipple>
          <LinkIcon />
        </IconButton>
      </CardActions>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {data.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
