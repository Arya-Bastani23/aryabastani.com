import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";
import { box } from "../styles/projects.module.css";

export default function Home({ data }) {
  console.log(data);
  const projects = data.allMdx.nodes;
  const Box = ({ children }) => (
    <div className={box}>
      {children}
      {projects.map((project) => {
        const image = getImage(project.frontmatter.thumb);
        return (
          <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
            <div>
              <GatsbyImage image={image} alt={"SOMETHING HERE"} />
              <h3>{project.frontmatter.title}</h3>
              <p>{project.frontmatter.tags}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
  return (
    <div>
      <h1>Projects</h1>
      <p>This some stuff I made.</p>
      <Box></Box>
    </div>
  );
}

// Export page query
export const query = graphql`
  query Projects {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        frontmatter {
          slug
          title
          tags
          thumb {
            childImageSharp {
              gatsbyImageData(width: 800, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;
