import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography, Link, Button, FormControl, InputBase, Tooltip } from '@material-ui/core'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 'unset'
  },
  commentForm: {
    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  commentDisplay: {
    paddingTop: 0,
    paddingBottom: 0
  },
  commentDiv: {
    paddingTop: 5,
    paddingBottom: 0,
    "&:last-child": {
      paddingBottom: 0
    },
    borderTop: '1px solid #efefef'
  },
  commentInput: {
    flexGrow: 1
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
  postBtn: {
    color: '#0095F6'
  },
  postBtnTransparent: {
    color: '#0095F6',
    opacity: 0.5
  },
  user: {
    fontWeight: 400,
    color: '#000000'
  },
  hashtag: {
    fontWeight: 400,
    color: '#0000EE'
  },
  cardActions: {
    paddingBottom: 0
  },
  cardContent: {
    paddingTop: 0,
    paddingBottom: 10
  }
}));

function ProjectCard({ data }) {
  const [state, setState] = useState({
    isLiked: false,
    comment: '',
    pastComments: []
  })

  const classes = useStyles();
  const isCommentEmpty = state.comment.replace(/\s/g, '') !== '';
  let map = {};

  const toggleLike = () => {
    setState({ ...state, isLiked: !state.isLiked })
  }

  const handleOnSubmit = (event) => {
    state.pastComments.push(event.target.value)
    setState({ ...state, pastComments: state.pastComments })
    clearForm(event);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // sets the event to the form event value
    if (!event.target.value) {
      event.target.value = event.target.elements[0].value;
    }
    handleOnSubmit(event)
  }

  const handleOnChange = (event) => {
    const name = event.target.name
    const comment = event.target.value
    setState({ ...state, [name]: comment })
  }

  const clearForm = (event) => {
    event.target.value = '';
    map = {};
    // only fires when you use the POST button
    if (event.target.reset) { event.target.reset() };
  }

  const handleShiftEnter = (event) => {
    map[event.keyCode] = event.type === 'keydown';
    if (!map['16'] && map['13']) {
      // stop default action of event
      event.preventDefault();
      // stops the /n from completing
      event.stopPropagation();
      handleOnSubmit(event);
    } else if (map['16'] && map['13']) {
      map = {};
    }
  }

  const createHashtags = (arr) => {
    if (arr) {
      const hashtags = '#' + arr.join(' #')
      return hashtags
    }
  }

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
        // action={
        //   <IconButton
        //     aria-label="Options"
        //     className={classes.button}
        //     disableRipple
        //   >
        //     <MoreVertIcon />
        //   </IconButton>
        // }
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
        className={classes.cardActions}
      >
        <Tooltip title='Like'>
          <IconButton
            aria-label="Like"
            className={classes.button}
            disableRipple
            onClick={toggleLike}
            size='small'
          >

            {state.isLiked
              ? <FavoriteIcon
                color="secondary"
              />
              : <FavoriteBorderOutlinedIcon />}
          </IconButton>
        </Tooltip>
        {data.id !== 'erik-huynh'
          ? <Tooltip title="Github">
            <IconButton
              aria-label="Repository"
              className={classes.button}
              disableRipple
              size='small'
            >
              <Link
                href={data.repo}
                target="_blank"
                color={'inherit'}
              >
                <GitHubIcon />
              </Link>
            </IconButton>
          </Tooltip>
          : <>
            <Tooltip title="Github">
              <IconButton
                aria-label="Repository"
                className={classes.button}
                disableRipple
                size='small'
              >
                <Link
                  href={data.repo}
                  target="_blank"
                  color={'inherit'}
                >
                  <GitHubIcon />
                </Link>
              </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <IconButton
                aria-label="Repository"
                className={classes.button}
                disableRipple
                size='small'
              >
                <Link
                  href={data.linkedin}
                  target="_blank"
                  color={'inherit'}
                >
                  <LinkedInIcon />
                </Link>
              </IconButton>
            </Tooltip>
          </>
        }
        {data.link &&
          <Tooltip title='Visit App'>
            <IconButton
              aria-label="Link"
              className={classes.button}
              disableRipple
              size='small'
            >
              <Link
                href={data.link}
                target="_blank"
                color={'inherit'}
              >
                <LinkIcon />
              </Link>
            </IconButton>
          </Tooltip>
        }
      </CardActions>
      <CardContent
        className={classes.cardContent}
      >
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
      {state.pastComments.map((comment) => {
        return (
          <CardContent
            className={classes.commentDisplay}
          >
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
            >
              <span className={classes.user}>Future Employer&nbsp;</span> {comment}
            </Typography>
          </CardContent>
        )
      })}
      <br />
      <CardContent
        className={classes.commentDiv}
      >
        <form
          noValidate
          autoComplete="off"
          onSubmit={handleFormSubmit}
        >
          <FormControl
            className={classes.commentForm}
            fullWidth
          >
            <InputBase
              className={classes.commentInput}
              placeholder='Add a comment...'
              inputProps={{ 'aria-label': 'Comment Area', style: { fontSize: '0.875rem' } }}
              multiline
              name='comment'
              onChange={handleOnChange}
              onKeyDown={handleShiftEnter}
            />
            <Button
              className={isCommentEmpty ? classes.postBtn : classes.postBtnTransparent}
              disabled={isCommentEmpty ? false : true}
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