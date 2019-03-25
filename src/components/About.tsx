import React from 'react';
import { RouteComponentProps } from '@reach/router';
import styled from '@emotion/styled';

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  div {
    width: 80vw;
  }
`;

const About = (props: RouteComponentProps) => (
  <AboutContainer>
    <div className="nes-container with-title">
      <p className="title">About</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet distinctio fugit rerum
        expedita repellendus, sed iusto porro nihil nostrum non. Qui fugit dolore, dicta deserunt,
        quod corrupti animi facere quaerat cumque consectetur iusto quas illum, culpa error quam
        amet labore eaque atque reprehenderit ipsa dolorum. Inventore, quasi? Debitis inventore
        cumque corrupti aut, quod veniam rem quae quaerat voluptate architecto veritatis nam a. Eius
        laudantium dolores ipsa incidunt nihil quis neque adipisci pariatur error commodi tenetur
        maiores ab esse vero mollitia deserunt corporis ut, dolor nobis, cum debitis culpa, porro
        omnis? Itaque, rerum ullam expedita sed iste odit, velit deserunt nihil nobis nesciunt
        excepturi qui explicabo repellendus facilis, voluptatum obcaecati eius. Minus nesciunt
        laboriosam aperiam sit. Placeat vel, dignissimos ad earum ipsam esse obcaecati corporis eius
        nostrum perferendis? Modi exercitationem placeat porro repellendus ea qui iure incidunt
        possimus ipsa! Quidem asperiores placeat id earum aspernatur eveniet officiis ad quasi
        exercitationem nulla at aperiam sunt, non, voluptates rem molestias assumenda doloremque
        ipsa, sint consequatur nostrum. Voluptatem commodi fugiat accusantium ad cum soluta
        eligendi? Numquam eveniet perspiciatis error maiores ad nulla recusandae in soluta incidunt
        consequatur, hic nostrum, ab distinctio quod qui culpa officia voluptatem consectetur
        veritatis cumque reiciendis obcaecati aspernatur amet quos!
      </p>
    </div>
  </AboutContainer>
);

export default About;
