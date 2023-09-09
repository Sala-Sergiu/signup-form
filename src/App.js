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
      <Logo />
    </section>
  );
}

function RightBox() {
  return (
    <section className="right">
      <Text>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
        laying out print, graphic or web designs. The passage is attributed to
        an unknown typesetter in the 15th century who is thought to have
        scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
        type specimen book. It usually begins with:
      </Text>

      <InputBox />
      <Button />
      <Text>
        If you already have an account, then you can{" "}
        <span className="span">log in</span>
      </Text>
    </section>
  );
}

function Logo() {
  return (
    <div className="logo-container">
      <h1 className="logo">The Odin Project</h1>
    </div>
  );
}

function Text({ children }) {
  return (
    <div className="text">
      <p>{children}</p>
    </div>
  );
}
function InputBox() {
  return (
    <>
      <h2 className="heading2">Let's do this</h2>
      <div className="input-grid">
        <div>
          <label for="firstName" className="label">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="input"
          ></input>
        </div>
        <div>
          <label for="lastName" className="label">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="input"
          ></input>
        </div>
        <div>
          <label for="email" className="label">
            Email:
          </label>
          <input type="email" id="email" name="email" className="input"></input>
        </div>
        <div>
          <label for="phoneNum" className="label">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phoneNum"
            name="phoneNum"
            className="input"
          ></input>
        </div>
        <div>
          <label for="password" className="label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="input"
          ></input>
        </div>
        <div>
          <label for="Cpassword" className="label">
            Confirm Password:
          </label>
          <input
            type="password"
            id="Cpassword"
            name="Cpassword"
            className="input"
          ></input>
        </div>
      </div>
    </>
  );
}
function Button() {
  return <button className="btn">Sign up!</button>;
}
