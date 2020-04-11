import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';

export default function appbar() {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Container style={{maxWidth: '50%'}}>
                        <Typography>
                            Header
                        </Typography>
                    </Container>
                </Toolbar>
            </AppBar>
        </div>
    )
}
