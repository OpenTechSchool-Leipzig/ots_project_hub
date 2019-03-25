import React from 'react';
import styled from '@emotion/styled';
import 'nes.css/css/nes.css';

const Container = styled.div`
  padding: 30px;
`;

const App = () => (
  <Container>
    <div className="nes-container with-title">
      <p className="title">OTS Project Hub</p>
      <p>Test paragraph</p>
      <button type="button" className="nes-btn is-success">
        Test Button
      </button>
    </div>
  </Container>
);

export default App;
