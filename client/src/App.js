import React from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import buy from './images/buy.jpg';
const App = () => {
    return (
        <Container maxidth="lg">
            <AppBar position= "static" color="inherit">
                <Typography variant="h2" align="center"> Past Quiz</Typography>
                <img src={buy} alt ="buy" height/>
            </AppBar>
        </Container>
        );
}

export default App;