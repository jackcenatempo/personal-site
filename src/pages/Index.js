import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env;

const Index = () => (
  <Main
    description={"Jack Cenatempo's personal website. Cambridge-based UGA Grad."}
  >
    <article className="post" id="index">
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume / CV. </Link>
      </p>
      <p> Source available <a href="https://github.com/mldangelo/personal-site">here</a>.</p>
    </article>
    <article className="post" id="index"><p>I&apos;m not sure what to put here, so below is a picture of a racoon wearing a cowboy hat.</p>
      <Link to="/" className="logo"><img src={`${PUBLIC_URL}/images/mr_man.jpg`} alt="" />
      </Link>
    </article>
  </Main>
);

export default Index;
