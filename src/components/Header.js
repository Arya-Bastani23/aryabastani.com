// import React from "react";
// import styled from "styled-components";
// import { Link, graphql, useStaticQuery } from "gatsby";

// // nav {
// //   display: grid;
// //   grid-template-columns: 1fr 1fr;
// //   margin: 0 auto;
// //   border-bottom: 1px solid black;
// //   white-space: nowrap
// // }
// // nav .links {
// //   display: inline-block;
// //   text-align: right;
// // }
// // nav a {
// //   display: inline-block;
// //   margin-left: 20px;
// //   font-weight: 400;
// //   padding-bottom: 8px;
// // }
// // nav a:hover {
// //   border-color: white;
// // }

// const NavItems = styled.div(
//   ({ theme }) => `
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   a:not(:last-child) {
//     margin-right: 1.5rem;
//   }
// `
// );

// const NavItem = styled.div(
//   ({ theme }) => `
//   transition: ${theme.transitions.main};
//   color: ${theme.colors.text.light};
//   &:hover {
//     color: ${theme.colors.text.dark};
//   }
// `
// );

// const NavLink = ({ path, text }) => {
//   return (
//     <Link to={path}>
//       <NavItem>
//         <h3>{text}</h3>
//       </NavItem>
//     </Link>
//   );
// };

// export default function Header() {
//   const data = useStaticQuery(graphql`
//     {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `);
//   const { title } = data.site.siteMetadata;

//   return (
//     <nav>
//       <h1>{title}</h1>
//       <div className="links">
//         <Link to="/blog">Blog</Link>
//         <Link to="/projects">Projects</Link>
//       </div>
//     </nav>
//   );
// }

import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import AccentText from "./common/AccentText";
import PillButton from "./common/PillButton";
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

const Header = () => {
  return (
    <Container>
      <Underline>
        <NavBar>
          <Link to="/">
            <AccentText>
              <div className="home">Bastani (🍦)</div>
            </AccentText>
          </Link>
          <NavItems>
            <NavLink path="/projects/" text="Projects" />
            <NavLink path="/blog/" text="Blog" />
            <NavLink path="/blog/" text="Resume" />
          </NavItems>
        </NavBar>
      </Underline>
    </Container>
  );
};
export default Header;
