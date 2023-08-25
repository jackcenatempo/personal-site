import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env;

const Index = () => (
  <Main
    description={"Jack Cenatempo's personal website. Cambridge-based UGA Grad."}
  >
    <article className="post" id="index">
      <p> Welcome to my website! Feel free to read more <Link to="/about">about me</Link> or check out my {' '}
        <Link to="/resume">resume / CV. </Link>
      </p>
    </article>
    <article className="post" id="index"><p>I&apos;m not sure what to put here, so here are a few charts I&apos;ve made over the past few months.
       They don&apos;t mean anything together, so don&apos;t read into it too much!</p>
      <Link to="/" className="logo"><img src={`${PUBLIC_URL}/images/sample_of_work_8_23.JPG`} alt="" />
      </Link>
    </article>
  </Main>
);

export default Index;
