/* Medium Font: Helvetica Neue */
// @import url('https://fonts.googleapis.com/css2?family=Charter:wght@300;400;500;700&display=swap');

import React from "react";
import Header from "./Header";
import styled, { createGlobalStyle } from "styled-components";
import "../styles/global.css";

const GlobalStyles = createGlobalStyle(
  ({ theme }) => `
  * {
  text-decoration: none;
  font-family: ${theme.fonts.main};
  color: black;
  }

  // Global Style
  html {
    scroll-behavior: smooth;
    font-size: 15px;
  }

  // Media Queries
  @media (max-width: 800px) {
    html { font-size: 14px; }
  }
  @media (max-width: 600px) {
    html { font-size: 14px; }
  }
  @media (max-width: 450px) {
    html { font-size: 13px; }
  }
  @media (max-width: 370px) {
    html { font-size: 11px; }
  }

  // Setting Background
  body {
    background-color: ${theme.colors.background};
    font-family: ${theme.fonts.main};
  }

  // Font Styles
  a {
    text-decoration: none;
  }
  h1, h2, h3, h4 {
    font-weight: 500;
  }
  h1 {
    font-size: 1.75rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  h3 {
    font-size: 1.25rem;
  }
  h4 {
    font-size: 1rem;
  }
  p, li, td, tr, .katex {
    font-size: 1.2rem;
  }
`
);

const ColorStrip = styled.div(
  ({ theme }) => `
  height: 0.5rem;
  background-color: ${theme.colors.primary};
`
);

const LimitedWidth = styled.div(
  ({ theme }) => `
  max-width: ${theme.widths.max};
  margin: 0 auto;
  padding: 0rem 1rem;
`
);

const ContentWidth = styled.div(
  ({ theme }) => `
  max-width: ${theme.widths.content};
  margin: 0 auto;
`
);

const FakeDiv = styled.div(
  ({ theme }) => `
  width = 100%
  min-height 100vh;
  `
);

const Footer = styled.div(
  ({ theme }) => `
  text-align: center;
  color: #bbb;
  margin: 40px auto;

  a {
    color: #bbb;
  }
`
);

export default function Layout({ children }) {
  return (
    <FakeDiv>
      <ColorStrip />
      <LimitedWidth>
        <ContentWidth>
          <GlobalStyles />
          <Header />
          <div className="content">{children}</div>
          <Footer>
            Designed and built by Arya Bastani. In whatever town I'm in right
            now. <br />
            <a href="https://patrickyoussef.com/">
              Aided significantly by patrickyoussef.com
            </a>
          </Footer>
        </ContentWidth>
      </LimitedWidth>
    </FakeDiv>
  );
}
