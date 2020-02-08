import React from 'react';
import Grid from '@material-ui/core/Grid';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import NavigationLinks from '../NavigationLinks/NavigationLinks';
import './NavigationBar.css';

const pageLinks = [
    'Home',
    'Resume',
    'Projects and Skills',
    'Contact Me',
];

type Props = {
    onTabSelect: (page: string) => {};
}

const NavigationBar = (props: Props) => {
    const { onTabSelect } = props;
    return (
        <Grid container className="navigation-bar">
            <Grid item xs={2} />
            <Grid container item xs={10} direction="column" justify="space-evenly" spacing={10}>
                <Grid item xs={1} />
                <Grid item >
                    <Title text="Matthew Weiler" />
                    <br />
                    <Subtitle text="Dedicated Software Engineer" />
                </Grid>
                <Grid item>
                    <NavigationLinks menuOptions={pageLinks} onTabSelect={onTabSelect} />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default NavigationBar;