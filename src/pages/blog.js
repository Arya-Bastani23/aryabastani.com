import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import BlogSection from "../components/BlogSection";
import PageHead from "../components/PageHead";

// Head Export
export const Head = ({ data: { site } }) => {
  return <title>My Blog | Arya</title>;
};

const Container = styled.div(
  ({ theme }) => `
`
);

export default function Blog({ data }) {
  console.log(data);
  let description =
    "This is my blog. I'm mostly gonna post things that I learned to remind myself.";
  return (
    <Container>
      <PageHead title="Blog" description={description} />
      <BlogSection data={data.blog} _years={false} />
    </Container>
  );
}

export const query = graphql`
  query BlogPageQuery {
    ...BlogQuery
  }
`;
