import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import styled from "styled-components";
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
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  align-items: center;

  .h2 {
    font-size: 4em;
  }

  .h3 {
    font-size: 3em;
    font-weight: 400;
    margin-bottom: 20px;
  }
`
);

const Home = () => {
  return (
    <Container>
      <div>
        <h3>
          Hello, I'm Arya Bastani. I created this site to highlight things that
          I think are cool.
        </h3>
        <p>I graduated from Berkeley before.</p>
      </div>
      <StaticImage
        src="../images/profile.jpg"
        alt="An Arya"
        placeholder="blurred"
        layout="fixed"
      />
    </Container>
  );
};

export default Home;

// Export page query
export const query = graphql`
  query Projects {
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
