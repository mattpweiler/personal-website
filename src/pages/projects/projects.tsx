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
import "./projects.css";

const Projects = () => {

    return (
        <Grid container className="root-Projects" direction="column">
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
                This section coming soon! Outside of school/the office, the main projects I have completed are making this website with react and aws serverless architecture and
                building sasthesquatch.com to sell the book I published. I am currently working on research on the state of the current educational system,
                and am building an app to help people find the ideal type of education for them.
                {/* Building This Website From Scratch Using React for Front end and AWS Serverless Architecture on Backend */}
            </Grid>
        </Grid>
    );
};

export default Projects;
