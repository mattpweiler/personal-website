import React from "react";
import Grid from '@material-ui/core/Grid';
import Title from '../../components/Title/Title';
import "./resume.css";
import ResumeData from './resume-data.json';
import ResumeEntry from '../../components/ResumeEntry/ResumeEntry';

const Resume = () => {

    return (
        <Grid container item className="contact-me" direction="column" justify="space-evenly" >
            <Title text="Professional Experience" />
            <br />
            <ResumeEntry 
                title={ResumeData.jobs.amfam.title}
                company={ResumeData.jobs.amfam.company}
                description={ResumeData.jobs.amfam.description}
            />
            <ResumeEntry 
                title={ResumeData.jobs.webCourseWorks.title}
                company={ResumeData.jobs.webCourseWorks.company}
                description={ResumeData.jobs.webCourseWorks.description}
            />
            <ResumeEntry 
                title={ResumeData.jobs.sasTheSquatch.title}
                company={ResumeData.jobs.sasTheSquatch.company}
                description={ResumeData.jobs.sasTheSquatch.description}
            />
             <Title text="Education" />
             <br />
            <ResumeEntry 
                title={ResumeData.education.college.name}
                company={ResumeData.education.college.degree}
                description={ResumeData.education.college.description}
            />
             <Title text="Certifications" />
             <br />
            <ResumeEntry 
                title={ResumeData.certifications.awsCloud.name}
                company={ResumeData.certifications.awsCloud.date}
                description={ResumeData.certifications.awsCloud.description}
            />
        </Grid>
    );
};

export default Resume;
