import React from 'react';
import { Card, Button, Typography } from '@material-ui/core';
// import SaveIcon from '@material-ui/icons/Save';
import Avatar from '@material-ui/core/Avatar';

function Highlights({ data, setState }) {
    function handleFilter(newValue) {
        setState({postType: 'bio'})
    }

    return (
        <Card style={{borderRadius: 0}}>
            <Button
                size="medium"
                fullWidth
                startIcon={<Avatar src={data.avatar}></Avatar>}
                onClick={handleFilter}
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
