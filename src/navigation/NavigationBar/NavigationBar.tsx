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
        <div>
            <Grid container direction="column" alignItems="flex-start">
                <Grid item xs={3}/>
                <Grid item xs={3}>
                    <Title text="Matthew Weiler" />
                    <Subtitle text="Dedicated Software Engineer" />
                </Grid>
                <Grid item/>
                <Grid item>
                    <NavigationLinks menuOptions={pageLinks} />
                </Grid>
            </Grid>
        </div>
    );
}

export default NavigationBar;