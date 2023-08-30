import { graphql } from "gatsby";
import PageHead from "../components/PageHead";

import * as React from "react";
import styled from "styled-components";
import ProjectSection from "../components/ProjectSection";

// Head Export
export const Head = ({ data: { site } }) => {
  return <title>Projects | Arya</title>;
};

const Container = styled.div``;

export default function Projects({ data }) {
  let description = "I am an engineer. I make stuff. Here's some stuff I made.";
  return (
    <Container>
      <PageHead title={"Projects"} description={description} />
      <ProjectSection data={data.projects} />
    </Container>
  );
}

// Export page query
export const query = graphql`
  query Projects {
    ...ProjectQuery
  }
`;
