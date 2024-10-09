import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Jack Cenatempo</h2>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p> Hi! I&apos;m Jack, a first-year PhD Candidate in Economics at Columbia University. Prior to graduate school, I obtained my B.A. in Economics from the University of Georgia and then spent two years as a Pre-doctoral Research Fellow with the Economics and Computation group at <a href="https://www.microsoft.com/en-us/research/lab/microsoft-research-new-england/"> Microsoft Research</a>.</p>
      {/* <p>Hi! I&apos;m Jack, a Pre-doctoral Research Fellow with the Economics and Computation group at <a href="https://www.microsoft.com/en-us/research/lab/microsoft-research-new-england/"> Microsoft Research </a> in Cambridge, Massachusetts. In 2022 I received my undergraduate degree in economics from the University of Georgia, and in the fall, I&apos;ll begin my PhD in Economics at <a href="https://econ.columbia.edu/"> Columbia University </a>.</p> */}
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Jack Cenatempo. This website is based on the saintly efforts of Michael D&apos;Angelo <Link to="/">mldangelo.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
