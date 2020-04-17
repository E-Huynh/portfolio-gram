import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Button, Typography } from '@material-ui/core';
// import SaveIcon from '@material-ui/icons/Save';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    foo: {
      justifyContent: 'unset'
    },
  }));

function Highlights({ data, setState }) {
    const classes = useStyles();

    function handleFilter() {
        setState({postType: data.filterBy})
    }

    return (
        <Card style={{borderRadius: 0}}
            onClick={handleFilter}
        >
            <Button
                classes={{ label: classes.foo }}
                size="medium"
                fullWidth
                startIcon={
                <Avatar src={data.avatar}/>}

            >
                <Typography
                    variant="body2"
                    color="textSecondary"
                    component="div"
                >
                    {data.text}
                </Typography>
            </Button>
        </Card>
    )
}

export default Highlights
