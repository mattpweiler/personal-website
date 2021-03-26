import React from "react";
import Grid from '@material-ui/core/Grid/Grid';
import Title from '../../components/Title/Title';
import "./resume.css";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

const Resume = () => {

    const docs = [
        { uri: require("../../assets/MattWeilerResume.pdf") }, // Local File
    ];
    // volunteer experience - include more numebrs in other dexcriptinos
    return (
        <Grid container item className="resume" direction="column" justify="space-evenly" >
            <Title text="Professional Experience" />
            <br />
            <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />;
        </Grid>
    );
};

export default Resume;
