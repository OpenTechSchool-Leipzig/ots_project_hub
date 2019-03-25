import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import { Router, Link, RouteComponentProps } from '@reach/router';

import 'nes.css/css/nes.css';

import Header from './components/Header';
import ProjectGrid from './components/ProjectGrid';
import About from './components/About';

const App = () => (
  <>
    <Header />
    <Router>
      <ProjectGrid path="/" />
      <About path="about" />
    </Router>
  </>
);

export default App;
