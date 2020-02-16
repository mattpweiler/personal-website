import React from "react";
import Grid from '@material-ui/core/Grid/Grid';
import Title from '../../components/Title/Title';
import Image from '../../components/Image/Image';
import jsLogo from '../../assets/images/js-logo.png';
import reactLogo from '../../assets/images/react-logo.png';
import reduxLogo from '../../assets/images/redux-logo.png';
import angularLogo from '../../assets/images/angular-logo.png';
import javaLogo from '../../assets/images/java-logo.png';
import awsLogo from '../../assets/images/aws-logo.png';
import sasthesquatch from '../../assets/images/sasthesquatch.png';
import "./projects.css";

const Projects = () => {

    // certification id
    // sasthesquatch book
    // talk about education work

    return (
        <Grid container className="projects" direction="column">
            <Title text="Skills" />
            <br />
            <br />
            <br />
            <Grid item container spacing={10}>
                <Grid item md={2}>
                    <Image img={jsLogo} text="Javascript" />
                </Grid>
                <Grid item md={2} >
                    <Image img={reactLogo} text="React" />
                </Grid>
                <Grid item md={2} >
                    <Image img={reduxLogo} text="Redux" />
                </Grid>
                <Grid item md={2} >
                    <Image img={angularLogo} text="Angular 2+" />
                </Grid>
                <Grid item md={2} >
                    <Image img={javaLogo} text="Java" />
                </Grid>
                <Grid item md={2} >
                    <Image img={awsLogo} text="AWS Serverless Architecture" />
                </Grid>
            </Grid>
            <br />
            <br />
            <Title text="Projects outside of the Office" />
            <Grid item container>
                <br />
                <div>
                    <br />
                    <h2> sasthesquatch.com </h2>
                    Although the website is no longer in use, I did build sasthesquatch.com using wordpress to quickly sell my book online.
                    My mom and I wrote the book about my childhood hero, bigfoot, and sold it online in the year 2018. We would also go into schools
                    to read the book to kids.
                    <br />
                    <div><img style={{ width: '300px' }} src={sasthesquatch} /></div>
                </div>
                <br />
                <div>
                    <h2> weilersworld.com  </h2>
                    I built this to summarize my experience in a simple way and to solidify my understanding of common AWS services such as API Gateway,
                    S3, Cloudfront, Lambda to make a simple website backend from scratch. The website object is stored in S3, which is served using cloudfront.
                    I use API gateway, lambda, and simple email service to send myself notifications. This was fun to make and is all stored on github: https://github.com/mattpweiler/Personal-Website
                </div>
                <br />
                <div>
                    <h2> Educational Interest Portal  </h2>
                    I am currently working on research on the state of the current educational system,
                   and am building an app to help people find the ideal type of education for them.
                </div>
            </Grid>
        </Grid>
    );
};

export default Projects;
