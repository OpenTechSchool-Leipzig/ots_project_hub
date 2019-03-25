import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div``;

interface IProjectProps {
  name: string;
  description?: string;
}

const ProjectContainer = ({ name, description }: IProjectProps) => (
  <Container>
    <div className="nes-container with-title">
      <p className="title">{name}</p>
      <p>{description}</p>
      <button type="button" className="nes-btn is-success">
        Zum Projekt
      </button>
    </div>
  </Container>
);

export default ProjectContainer;
