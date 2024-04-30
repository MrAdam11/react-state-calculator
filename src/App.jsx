import "./App.css";
import { useState } from "react";

function App() {
  const [currentOp, bIDMAS] = useState("+");

  const [buttonNum, selectedNum] = useState(0);

  const [buttonNum2, selectedNum2] = useState(0);

  const [currentAnswer, finalSum] = useState(0);

  const calculation = () => {
    let sum = 0;
    if (currentOp === "+") {
      sum = buttonNum + buttonNum2;
    } else if (currentOp === "-") {
      sum = buttonNum - buttonNum2;
    } else if (currentOp === "*") {
      sum = buttonNum * buttonNum2;
    } else if (currentOp === "÷") {
      if (buttonNum2 === 0) {
        sum = "error";
      } else {
        sum = buttonNum / buttonNum2;
      }
    } else {
      sum = "0";
    }
    finalSum(sum);
  };

  return (
    <div className="calculator">
      {/* First Number */}

      <div className="panel">
        <p className="numbers">{buttonNum}</p>
        <div className="numbers">
          <button onClick={() => selectedNum(1)}>1</button>
          <button onClick={() => selectedNum(2)}>2</button>
          <button onClick={() => selectedNum(3)}>3</button>
          <button onClick={() => selectedNum(4)}>4</button>
          <button onClick={() => selectedNum(5)}>5</button>
          <button onClick={() => selectedNum(6)}>6</button>
          <button onClick={() => selectedNum(7)}>7</button>
          <button onClick={() => selectedNum(8)}>8</button>
          <button onClick={() => selectedNum(9)}>9</button>
          <button onClick={() => selectedNum(0)}>0</button>
          <button onClick={() => selectedNum(0)}>Clear</button>
        </div>
      </div>
      {/* Operators */}
      <div className="panel">
        <p className="bidmastools">{currentOp}</p>
        <div className="numbers">
          <button onClick={() => bIDMAS("+")}>+</button>
          <button onClick={() => bIDMAS("-")}>-</button>
          <button onClick={() => bIDMAS("*")}>*</button>
          <button onClick={() => bIDMAS("÷")}>÷</button>
        </div>
      </div>

      {/* Second Number */}

      <div className="panel">
        <p className="numbers">{buttonNum2}</p>
        <div className="numbers">
          <button onClick={() => selectedNum2(1)}>1</button>
          <button onClick={() => selectedNum2(2)}>2</button>
          <button onClick={() => selectedNum2(3)}>3</button>
          <button onClick={() => selectedNum2(4)}>4</button>
          <button onClick={() => selectedNum2(5)}>5</button>
          <button onClick={() => selectedNum2(6)}>6</button>
          <button onClick={() => selectedNum2(7)}>7</button>
          <button onClick={() => selectedNum2(8)}>8</button>
          <button onClick={() => selectedNum2(9)}>9</button>
          <button onClick={() => selectedNum2(0)}>0</button>
          <button onClick={() => selectedNum2(0)}>Clear</button>
        </div>
      </div>

      {/* Answer */}

      <div className="panel answer">
        <p>{currentAnswer}</p>
        <div>
          <button onClick={calculation}>=</button>
        </div>
      </div>
    </div>
  );
}
export default App;
