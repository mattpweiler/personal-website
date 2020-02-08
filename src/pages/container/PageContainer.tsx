import React from 'react';
import ContactMe from '../contact-me/contact-me';
import Resume from '../resume/resume';

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
 }

const PageContainer = (props: Props) => {
    const { page } = props;
    return (
        <div className="navigation-links">
            { renderPage(page) }
        </div>
    );
}

export default PageContainer;