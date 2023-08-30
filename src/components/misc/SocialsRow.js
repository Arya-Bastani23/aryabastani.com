import React from "react";
import { Coffee, GitHub, Linkedin, Send } from "react-feather";
import styled from "styled-components";

const Container = styled.span(
  ({ theme }) => `
  margin-top: 1.5em;  
  margin-bottom: 0rem;
  display: flex;

  div:not(:last-child) {
    margin-right: 1rem;
  }
`
);

const SocialItem = styled.div(
  ({ theme }) => `
  svg {
    transition: white;
    color: ${theme.colors.buttons.border};
    &:hover {
      color: ${theme.colors.buttons.border_hover};
    }
  }
`
);

const Socials = () => {
  let iconSize = 30;
  let strokeWidth = 1.5;
  return (
    <Container>
      <SocialItem>
        <a
          href="https://www.linkedin.com/in/arya-bastani/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={iconSize} strokeWidth={strokeWidth} />
        </a>
      </SocialItem>
      <SocialItem>
        <a
          href="https://github.com/Arya-Bastani23/aryabastani.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub size={iconSize} strokeWidth={strokeWidth} />
        </a>
      </SocialItem>
      <SocialItem>
        <a
          href="mailto:arya.bastani23@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Send size={iconSize} strokeWidth={strokeWidth} />
        </a>
      </SocialItem>
      <SocialItem>
        <a
          href="https://venmo.com/code?user_id=2440783097495552074&created=1693003504.32917&printed=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Coffee size={iconSize} strokeWidth={strokeWidth} />
        </a>
      </SocialItem>
    </Container>
  );
};
export default Socials;
