import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";
// import { Coffee, GitHub, Linkedin, Send } from "react-feather";
import styled from "styled-components";
import { graphql } from "gatsby";
import Socials from "../components/misc/SocialsRow";
import ProjectSection from "../components/ProjectSection";
import BlogSection from "../components/BlogSection";
import Underline from "../components/common/Underline";

// Play around with container border later
const Container = styled.div(
  ({ theme }) => `
  padding:  10px ;
  margin:  5px ;

  border: 2px solid ${theme.colors.primary};
  border-radius: 0.75rem;


  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 50px;

  .h2 {
    font-size: 4em;
  }

  .h3 {
    font-size: 3em;
    font-weight: 200;
    margin-bottom: 20px;
  }

  // Image
  .image {
    display: flex:
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    .image {
      display: none
    }
  }
`
);

const ImageGrid = styled.div(
  ({ theme }) => `
  display: grid;
  grid-template-rows: 1fr;
  // .gatsby-image-wrapper {
  //   border-width: 1px;
  //   border-style: solid;
  //   border-radius: 50%;
  // }
`
);

const Divider = styled.div(
  ({ theme }) => `
  h1,h2,h3 {
    margin: 0rem;
    color: ${theme.colors.text.dark};
  }
  margin: 1em 0em;
`
);

const Home = ({ data }) => {
  const { frontmatter } = data.allMdx.nodes[0];
  let image = getImage(frontmatter.thumb);
  return (
    <Container>
      <div>
        {/* <h3>
          Hello, I'm <strong>Arya Bastani (🍦)</strong>. I created this site
          because I wanted to learn web dev, and apply it in the most
          narcissistic way possible.
        </h3> */}
        <h3>
          Hello, I'm <strong>Arya Bastani (🍦)</strong>. I'm building Camfer to
          make design and CAD'ing faster and more fun.
        </h3>
        <h3>
          The problems I enjoy solving the most revolve around ML and robotics.
          🧠 🦾
        </h3>
        <p>
          I graduated from{" "}
          <a href="https://www.forbes.com/sites/madisonfernandez/2021/09/08/why-berkeley-is-number-one/?sh=674bb67647e0">
            <strong> UC Berkeley </strong>
          </a>
          in 2023 🐻. I worked as a SDE at{" "}
          <a href="https://aws.amazon.com/">
            <strong> AWS </strong>
          </a>
          for 9 long months. In May 2024, after admission to YC S24, I quit to
          build a start-up with my best friends 🛠️. More info coming soon!
        </p>
        <Socials />
      </div>
      <ImageGrid className="image">
        <GatsbyImage image={image} alt="Dis me with BMS" />
      </ImageGrid>
    </Container>
  );
};

const Output = ({ data }) => {
  const { frontmatter } = data.allMdx.nodes[0];
  let image = getImage(frontmatter.thumb);
  return (
    <div>
      <Home data={data} />
      <h1>Projects</h1>
      <ProjectSection data={data.projects} />
      <h1>Blog</h1>
      <BlogSection data={data.blog} />
    </div>
  );
};

export default Output;

// Export page query
export const query = graphql`
  query IndexQuery {
    ...Hero
    ...LimittedProjectQuery
    ...LimittedBlogQuery
  }
`;
