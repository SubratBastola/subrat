import React, { Component } from 'react';
import cvEN from '../../data/en';
import cvPDFEN from '../../data/subrat_resume.pdf';
import Resume from '../Resume/Resume';

export default class ResumeScreen extends Component {
  render() {
    return <Resume {...cvEN} cvPDF={cvPDFEN} />;
  }
}
