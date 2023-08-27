import React from "react";
import Header from "./Header";
import styled from "styled-components";
import "../styles/global.css";

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

const FakeDiv = styled.div(
  ({ theme }) => `
  width = 100%
  
  `
);

const Footer = styled.div(
  ({ theme }) => `
  text-align: center;
  color: #bbb;
  margin: 40px auto;
`
);

export default function Layout({ children }) {
  return (
    <FakeDiv>
      <ColorStrip />
      <Header />

      <LimitedWidth>
        <div className="content">{children}</div>
        <Footer>
          Designed and built by Arya Bastani. In whatever town I'm in right now.
        </Footer>
      </LimitedWidth>
    </FakeDiv>
  );
}
