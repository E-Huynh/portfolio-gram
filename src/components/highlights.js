import React from 'react';
import { Card, Button } from '@material-ui/core';
// import SaveIcon from '@material-ui/icons/Save';
import Avatar from '@material-ui/core/Avatar';

function Highlights() {
    return (
        <Card>
            <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                startIcon={<Avatar src='https://avatars0.githubusercontent.com/u/56613046?s=460&u=dd342c337117a7ef40ee31b67df2c0b4c310f2cc&v=4'></Avatar>}
            >
                Who Am I?
            </Button>
        </Card>
    )
}

export default Highlights
