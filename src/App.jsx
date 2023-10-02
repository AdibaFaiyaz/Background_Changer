import { useState } from "react"
import "./App.css";
function App() {
  const [color, setColor] = useState("white")

  return (
    <>
      <div className="background" style={{ backgroundColor: color }}>
        <div className="container">
          <div className="two">
            <button
              onClick={() => setColor("red")}
              className="one" style={{ backgroundColor: "red" }}></button>

            <button
              onClick={() => setColor("green")} className="one" style={{ backgroundColor: "green" }}></button>

            <button
              onClick={() => setColor("lavender")}
              className="one" style={{ backgroundColor: "lavender" }}></button>

            <button
              onClick={() => setColor("blue")} className="one" style={{ backgroundColor: "blue" }}></button>

            <button
              onClick={() => setColor("yellow")} className="one" style={{ backgroundColor: "yellow" }}></button>

            <button
              onClick={() => setColor("rgb(0, 255, 1)")} className="one" style={{ backgroundColor: "rgb(0, 255, 1)" }}></button>

            <button
              onClick={() => setColor("rgb(129, 0, 127)")} className="one" style={{ backgroundColor: "rgb(129, 0, 127)" }}></button>

            <button
              onClick={() => setColor("rgb(13, 202, 240)")} className="one" style={{ backgroundColor: "rgb(13, 202, 240)" }}></button>

            <button
              onClick={() => setColor("rgb(253, 190, 51)")} className="one" style={{ backgroundColor: "rgb(253, 190, 51)" }}></button>

            <button
              onClick={() => setColor("rgb(255, 192, 203)")} className="one" style={{ backgroundColor: "rgb(255, 192, 203)" }}></button>


            <button
              onClick={() => setColor("rgb(175, 61, 67)")} className="one" style={{ backgroundColor: "rgb(175, 61, 67)" }}></button>


            <button
              onClick={() => setColor("rgb(70, 130, 180)")} className="one" style={{ backgroundColor: "rgb(70, 130, 180)" }}></button>


            <button
              onClick={() => setColor("rgb(139, 69, 18)")} className="one" style={{ backgroundColor: "rgb(139, 69, 18)" }}></button>


          </div>
        </div>
      </div>
    </>
  )
}

export default App
