import React from 'react';
import styled from '@emotion/styled';

import ProjectContainer from './ProjectContainer';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 20px;
`;

const ProjectGrid = () => (
  <StyledGrid>
    <ProjectContainer name={'Project1'} description={'Hello from Project1'} />
    <ProjectContainer name={'Project2'} description={'Hello from Project2'} />
    <ProjectContainer name={'Project3'} description={'Hello from Project3'} />
    <ProjectContainer name={'Project4'} description={'Hello from Project4'} />
  </StyledGrid>
);

export default ProjectGrid;
