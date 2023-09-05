import { useState } from "react";

export default function App() {
  return (
    <div className="container">
      <LeftBox></LeftBox>
      <RightBox></RightBox>
    </div>
  );
}

function LeftBox() {
  return (
    <section className="left">
      <h1>Left side</h1>
    </section>
  );
}

function RightBox() {
  return (
    <section className="right">
      <h1>Right size</h1>
    </section>
  );
}
