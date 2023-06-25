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
    <article className="post" id="index"><p>I&apos;m not sure what to put here, so below is a picture of a racoon wearing a cowboy hat.</p>
      <Link to="/" className="logo"><img src={`${PUBLIC_URL}/images/cowboy_man.JPG`} alt="" />
      </Link>
    </article>
  </Main>
);

export default Index;
