import React, { Component } from "react";
import "./ResumeEntry.css";

type Props = {
    title: string,
    company: string,
    description: string,
};

class ResumeEntry extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="resume-entry">
        <div className="resume-title">{this.props.title}</div>
        <div className="resume-company">{this.props.company}</div>
        <div className="resume-description">{this.props.description}</div>
      </div>
    );
  }
}

export default ResumeEntry;
