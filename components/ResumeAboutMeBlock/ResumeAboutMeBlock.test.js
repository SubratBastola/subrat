import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import ResumeAboutMeBlock from './ResumeAboutMeBlock';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <IntlProvider locale="en">
      <MemoryRouter location="someLocation" context={{}}>
        <ResumeAboutMeBlock
          fullName="Subrat Bastola "
          headline="Installation Engineer"
          summary="Electrical Engineer"
          pictureUrl="https://localhost:3000/share.png"
          resumeUrl="https://localhost:3000/static/media/subrat_resume.pdf"
        />
      </MemoryRouter>
    </IntlProvider>,
    div,
  );
});
