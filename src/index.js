import React from "react";
import ReactDOM from "react-dom";
import image from "./lizard.jfif";
import "./styles.css";

function Completedata() {
    let share = "SHARE";
    let learn = "LEARN MORE"
  return (
    <div className="firstdiv">
      <div className="seconddiv">
        <img src={image} />
        <div className="thirdclass">
          <h2>LIZARD</h2>
          <p>
            Lizard are a widespread group of squamate <br />
            reptiles, with over 6000 species, ranging across <br />
            all continents except Antartica
          </p>
          <a href="">{share}</a>
          <a href = "" className="space">{learn}</a>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Completedata />, document.getElementById("root"));
