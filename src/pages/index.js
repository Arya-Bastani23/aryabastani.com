import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

// import { box } from "../styles/home.module.css";

// .box {
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   grid-gap: 40px;
//   align-items: center;
// }
// .box h2 {
//   font-size: 4em;
// }
// .box h3 {
//   font-size: 3em;
//   font-weight: 400;
//   margin-bottom: 20px;
// }

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
    font-weight: 400;
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
  console.log(frontmatter);
  let image = getImage(frontmatter.thumb);
  return (
    <Container>
      <div>
        <h3>
          Hello, I'm Arya Bastani. I created this site to highlight things that
          I think are cool.
        </h3>
        <p>I graduated from Berkeley before.</p>
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

// export default function Home() {
//   const Box = ({ children }) => (
//     <section className={box}>
//       {children}
// <div>
//   <h3>
//     Hello, I'm Arya Bastani. I created this site to highlight things that
//     I think are cool.
//   </h3>
//   <p>I graduated from Berkeley before.</p>
// </div>
// <StaticImage
//   src="../images/profile.jpg"
//   alt="An Arya"
//   placeholder="blurred"
//   layout="fixed"
// />
//     </section>
//   );
//   return <Box></Box>;
// }

// // Export page query
// export const query = graphql`
//   query Projects {
//     ...Hero
//   }
// `;
