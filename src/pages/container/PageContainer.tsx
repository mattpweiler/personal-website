import React from 'react';
import ContactMe from '../contact-me/contact-me';
import Resume from '../resume/resume';
import './PageContainer.css';
import Home from '../home/home';

type Props = {
    page: string;
}

function renderPage(page: string) {
    if(page === 'Contact Me') {
        return <ContactMe />
    }
    if(page === 'Resume') {
        return <Resume />
    }
    if(page === 'Home') {
        return <Home />
    }
 }

const PageContainer = (props: Props) => {
    const { page } = props;
    return (
        <div className="page-container">
            { renderPage(page) }
        </div>
    );
}

export default PageContainer;