import React from 'react';
import Grid from '@material-ui/core/Grid';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import NavigationLinks from '../NavigationLinks/NavigationLinks';

const pageLinks = [
    'Home',
    'Resume',
    'Skills',
    'Projects',
    'Contact Me',
];
const NavigationBar = () => {
    return (
        <Grid container>
            <Grid item xs={2} />
            <Grid container item xs={10} direction="column" justify="space-evenly" spacing={10}>
                <Grid item xs={1} />
                <Grid item >
                    <Title text="Matthew Weiler" />
                    <br />
                    <Subtitle text="Dedicated Software Engineer" />
                </Grid>
                <Grid item>
                    <NavigationLinks menuOptions={pageLinks} />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default NavigationBar;