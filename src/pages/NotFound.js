import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const PageNotFound = () => (
  <HelmetProvider>
    <div className="not-found">
      <Helmet title="404 Not Found">
        <meta name="description" content="The content you are looking for cannot be found." />
      </Helmet>
      <h1>Page Not Found</h1>
      <h3>Looking to contact me? Please refer to <Link to="https://drive.google.com/file/d/1DK3qxBE31Ocz58tl9NOFktgEjb-LMUUt/view?usp=sharing">my CV</Link> or add me on <Link to="https://www.linkedin.com/in/jackcenatempo/">LinkedIn</Link>.</h3>
      <p>Return <Link to="/">home</Link>.</p>
    </div>
  </HelmetProvider>
);

export default PageNotFound;
