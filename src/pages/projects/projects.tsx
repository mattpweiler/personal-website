import React from "react";
import Grid from '@material-ui/core/Grid';
import Title from '../../components/Title/Title';
import Image from '../../components/Image/Image';
import jsLogo from '../../assets/images/js-logo.png';
import reactLogo from '../../assets/images/react-logo.png';
import reduxLogo from '../../assets/images/redux-logo.png';
import angularLogo from '../../assets/images/angular-logo.png';
import javaLogo from '../../assets/images/java-logo.png';
import awsLogo from '../../assets/images/aws-logo.png';
import "./projects.css";

const Projects = () => {

    return (
        <Grid container className="root-Projects" direction="column">
            <Title text="Skills" />
            <br />
            <br />
            <br />
            <Grid item container spacing={10}>
                <Grid item xs={2} >
                    <Image img={jsLogo} text="Javascript" />
                </Grid>
                <Grid item xs={2} >
                    <Image img={reactLogo} text="React" />
                </Grid>
                <Grid item xs={2} >
                    <Image img={reduxLogo} text="Redux" />
                </Grid>
                <Grid item xs={2} >
                    <Image img={angularLogo} text="Angular 2+" />
                </Grid>
                <Grid item xs={2} >
                    <Image img={javaLogo} text="Java" />
                </Grid>
                <Grid item xs={2} >
                    <Image img={awsLogo} text="AWS Serverless" />
                </Grid>
            </Grid>
            <br />
            <br />
            <Title text="Projects outside of Work/School" />
            <Grid item container>
                {/* project item */}
            </Grid>
        </Grid>
    );
};

export default Projects;
