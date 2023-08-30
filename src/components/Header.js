import { useStaticQuery, graphql, Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import AccentText from "./common/AccentText";
import Underline from "./common/Underline";

const Container = styled.div(
  ({ theme }) => `
  h1, h2, h3 {
    margin: 0rem;
  }
  width: 100%;
`
);

const NavBar = styled.div(
  ({ theme }) => `
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0rem;
  align-items: center;
  * {
    font-weight: 500;
    text-decoration: None
    
  }
  // Matching resume button size
  .home {
    font-size: 1.575rem;

  }
`
);

const NavItems = styled.div(
  ({ theme }) => `
  display: flex;
  justify-content: space-between;
  align-items: right;
  a:not(:last-child) {
    margin-right: 1.5rem;
  }
`
);

const NavItem = styled.div(
  ({ theme }) => `
  transition: ${theme.transitions.main};
  color: ${theme.colors.text.light};
  &:hover {
    color: ${theme.colors.text.dark};
  }
`
);

const NavLink = ({ path, text }) => {
  return (
    <Link to={path}>
      <NavItem>
        <h3>{text}</h3>
      </NavItem>
    </Link>
  );
};

const NavFile = ({ path, text }) => {
  return (
    <NavItem>
      <h3>
        <a href={path} target="_blank" rel="noreferrer">
          {text}
        </a>
      </h3>
    </NavItem>
  );
};

const Header = () => {
  const resume_query = useStaticQuery(graphql`
    {
      ...ResumeQuery
    }
  `);
  console.log(resume_query);
  return (
    <Container>
      <Underline>
        <NavBar>
          <Link to="/">
            <AccentText>
              <div className="home"> Bastani (🍦)</div>
            </AccentText>
          </Link>
          <NavItems>
            <NavLink path="/projects/" text="Projects" />
            <NavLink path="/blog/" text="Blog" />
            {/* <NavLink path="/blog/" text="Resume" /> */}
            <NavFile
              path={resume_query.allFile.edges[0].node.publicURL}
              text="Resume"
            />
          </NavItems>
        </NavBar>
      </Underline>
    </Container>
  );
};
export default Header;
