import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography, Link, Button, FormControl, InputBase } from '@material-ui/core'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 100,
    paddingTop: '56.25%', // 16:9
  },
  button: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  user: {
    fontWeight: 400,
    color: '#000000'
  },
  hashtag: {
    fontWeight: 400,
    color: '#0000EE'
  },
}));

function ProjectCard({ data }) {
  const classes = useStyles();

  const [state, setState] = useState({
    isLiked: false,
    comment: '',
    pastComments: []
  })

  function toggleLike() {
    setState({ ...state, isLiked: !state.isLiked })
  }

  const handleOnSubmit = (event) => {
    state.pastComments.push(event.target.value)
    setState({ ...state, pastComments: state.pastComments })
    clearForm(event);
  }
  
  const clearForm = (event) => {
    event.target.value = '';
    map = {};
    if(event.target.reset) { event.target.reset() };
  }

  function createHashtags(arr) {
    if (arr) {
      const hashtags = '#' + arr.join(' #')
      return hashtags
    }
  }

  let map = {};

  return (
    <Card
      className={classes.root}
    >
      <CardHeader
        avatar={
          <Avatar
            aria-label="Erik Huynh"
            src={'https://avatars0.githubusercontent.com/u/56613046?s=460&u=dd342c337117a7ef40ee31b67df2c0b4c310f2cc&v=4'}
          />
        }
        action={
          <IconButton
            aria-label="Options"
            className={classes.button}
            disableRipple
          >
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
        onDoubleClick={toggleLike}
      />
      <CardActions
        disableSpacing
      >
        <IconButton
          aria-label="Like"
          className={classes.button}
          disableRipple
          onClick={toggleLike}
        >
          {state.isLiked
            ? <FavoriteIcon
              color="secondary"
            />
            : <FavoriteBorderOutlinedIcon />}
        </IconButton>
        {data.id !== 'erik-huynh'
          ? <IconButton
            aria-label="Repository"
            className={classes.button}
            disableRipple
          >
            <Link
              href={data.repo}
              target="_blank"
              color={'inherit'}
            >
              <GitHubIcon />
            </Link>
          </IconButton>
          : <>
            <IconButton
              aria-label="Repository"
              className={classes.button}
              disableRipple
            >
              <Link
                href={data.repo}
                target="_blank"
                color={'inherit'}
              >
                <GitHubIcon />
              </Link>
            </IconButton>
            <IconButton
              aria-label="Repository"
              className={classes.button}
              disableRipple
            >
              <Link
                href={data.linkedin}
                target="_blank"
                color={'inherit'}
              >
                <LinkedInIcon />
              </Link>
            </IconButton>
          </>
        }
        {data.link
          ? <IconButton
            aria-label="Link"
            className={classes.button}
            disableRipple
          >
            <Link
              href={data.link}
              target="_blank"
              color={'inherit'}
            >
              <LinkIcon />
            </Link>
          </IconButton>
          : null
        }
      </CardActions>
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
        >
          <span className={classes.user}>
            Erik Huynh&nbsp;
          </span>
          {data.description}&nbsp;
          <span className={classes.hashtag}>
            {createHashtags(data.tech)}
          </span>
        </Typography>
      </CardContent>
      <CardContent>
        <form
          noValidate
          autoComplete="off"
          onSubmit={(event) => {
            event.preventDefault();
            if (!event.target.value) {
              event.target.value = event.target.elements[0].value;
            }
            event.target.isButton = true
            handleOnSubmit(event)
          }}
        >
          <FormControl
            style={{
              display: 'inline-flex',
              flexDirection: 'row',
              justifyContent: 'flex-end'
            }}
            fullWidth
          >
            <InputBase
              style={{
                flexGrow: 1,
              }}
              placeholder='Add a comment...'
              inputProps={{ 'aria-label': 'Comment Area' }}
              multiline
              name='comment'
              onKeyDown={(event) => {
                map[event.keyCode] = event.type === 'keydown';
                if (!map['16'] && map['13']) {
                  event.target.isButton = false
                  event.preventDefault();
                  event.stopPropagation();
                  handleOnSubmit(event);
                } else if(map['16'] && map['13']) {
                  map = {};
                }
              }}
            />
            <Button
              style={{
                color: '#0095F6'
              }}
              size='small'
              type='submit'
            >
              Post
            </Button>
          </FormControl>
        </form>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;