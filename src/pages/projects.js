import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
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

// import { box } from "../styles/projects.module.css";

// export default function Home({ data }) {
//   console.log(data);
//   const projects = data.projects.nodes;
//   const Box = ({ children }) => (
//     <div className={box}>
//       {children}
//       {projects.map((project) => {
//         const image = getImage(project.frontmatter.thumb);
//         return (
//           <Link to={"/projects/" + project.frontmatter.slug}>
//             <div>
//               <GatsbyImage image={image} alt={"SOMETHING HERE"} />
//               <h3>{project.frontmatter.title}</h3>
//               <p>{project.frontmatter.tags}</p>
//             </div>
//           </Link>
//         );
//       })}
//     </div>
//   );
//   return (
//     <div>
//       <h1>Projects</h1>
//       <p>I am an engineer. I make stuff. Here's some stuff I made. </p>
//       <Box></Box>
//     </div>
//   );
// }

// Export page query
export const query = graphql`
  query Projects {
    ...ProjectQuery
  }
`;
