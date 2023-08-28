import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";
// import { Coffee, GitHub, Linkedin, Send } from "react-feather";
import styled from "styled-components";
import { graphql } from "gatsby";
import Socials from "../components/misc/SocialsRow";

const Container = styled.div(
  ({ theme }) => `
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

const Home = ({ data }) => {
  // console.log(data);
  const { frontmatter } = data.allMdx.nodes[0];
  let image = getImage(frontmatter.thumb);
  return (
    <Container>
      <div>
        <h3>
          Hello, I'm <strong>Arya Bastani (🍦)</strong>. I created this site,
          because I wanted to learn web dev and apply it in the most
          narcassistic way possible.
        </h3>
        <h3>
          I'm gonna go over projects I've worked on that I think are note worthy
        </h3>
        <p>
          I also graduated from{" "}
          <a href="https://www.forbes.com/sites/madisonfernandez/2021/09/08/why-berkeley-is-number-one/?sh=674bb67647e0">
            <strong>Berkeley </strong>
          </a>
          before. 🐻
        </p>
        <Socials />
      </div>
      <ImageGrid className="image">
        <GatsbyImage image={image} alt="Hi it's me!" />
      </ImageGrid>
    </Container>
  );
};

export default Home;

// Export page query
export const query = graphql`
  query IndexQuery {
    ...Hero
  }
`;
