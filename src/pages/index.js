import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { box } from "../styles/home.module.css";

export default function Home() {
  const Box = ({ children }) => (
    <section className={box}>
      {children}
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
    </section>
  );
  return <Box></Box>;
}
