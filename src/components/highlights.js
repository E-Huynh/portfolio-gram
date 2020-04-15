import React from 'react';
import { Card, Button, Typography } from '@material-ui/core';
// import SaveIcon from '@material-ui/icons/Save';
import Avatar from '@material-ui/core/Avatar';

function Highlights({ data }) {
    return (
        <Card>
            <Button
                size="medium"
                fullWidth
                disableElevation={true}
                startIcon={<Avatar src={data.avatar}></Avatar>}
                onClick={data.alert}
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
