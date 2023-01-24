import React from "react";

export default function FirstPage(props) {
  return (
    <section className="first-page">
      <div>
        <h1>Queez!</h1>
        <p>A quiz app made using React</p>
        <button onClick={props.onClick}>Start Queez</button>
      </div>
    </section>
  );
}
