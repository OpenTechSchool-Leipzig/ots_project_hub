import React from 'react';
import { Link } from '@reach/router';

const Header = () => (
  <header className="nes-container is-centered" style={{ marginBottom: 20 }}>
    <div>OpenTechSchool Projekte</div>
    <Link to="/" style={{ paddingRight: 20 }}>
      Home
    </Link>
    <Link to="about">About</Link>
  </header>
);

export default Header;
