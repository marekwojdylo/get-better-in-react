import { CalcBtn } from "./CalcBtn";
import { useState } from "react";
import "./App.css";
import { CalcBtnClear } from "./CalcBtnClear";
import { ResultScreen } from "./ResultScreen";
import { CalcBtnFunction } from "./CalcBtnFunction";

export const App = () => {
  const [result, setResult] = useState("0");
  const [operator, setOperator] = useState();
  const [prevCalc, setPrevCalc] = useState();

  const resultChange = (num) => {
    if (
      (num === "." || num === ",") &&
      (result.includes(".") || result.includes(","))
    ) {
      return;
    }
    if (operator) {
      setResult(num);
      return;
    }

    if (result === "0") {
      setResult(num);
    } else {
      setResult(result + "" + num);
    }
  };

  const backSpace = () => {
    if (result.slice(0, -1)) {
      setResult(result.slice(0, -1));
    } else {
      setResult("0");
    }
  };

  const add = () => {
    setOperator("+");
    setPrevCalc(result); // save for later
  };

  const multiply = () => {
    setOperator("x");
    setPrevCalc(result); // save for later
  };

  const divide = () => {
    setOperator("÷");
    setPrevCalc(result); // save for later
  };

  const subtrack = () => {
    setOperator("-");
    setPrevCalc(result); // save for later
  };

  const equals = () => {
    if (operator === "+") {
      const res = Number(result) + Number(prevCalc);
      return setResult(res);
    }
    if (operator === "-") {
      const res = Number(prevCalc) - Number(result);
      return setResult(res);
    }
    if (operator === "÷") {
      const res = Number(prevCalc) / Number(result);
      return setResult(res);
    }
    if (operator === "x") {
      const res = Number(prevCalc) * Number(result);
      return setResult(res);
    }
  };

  return (
    <div>
      <div>
        <ResultScreen text={result} />
      </div>
      <div>
        <CalcBtnClear
          text="CE"
          onClick={() => {
            setResult("0");
          }}
        />
        <CalcBtn text="C" onClick={backSpace} />
        <CalcBtnFunction
          text="÷"
          onClick={() => {
            divide();
          }}
        />
      </div>
      <div>
        <CalcBtn
          text="7"
          onClick={() => {
            resultChange("7");
          }}
        />
        <CalcBtn
          text="8"
          onClick={() => {
            resultChange("8");
          }}
        />
        <CalcBtn
          text="9"
          onClick={() => {
            resultChange("9");
          }}
        />
        <CalcBtnFunction
          text="×"
          onClick={() => {
            multiply();
          }}
        />
      </div>
      <div>
        <CalcBtn
          text="4"
          onClick={() => {
            resultChange("4");
          }}
        />
        <CalcBtn
          text="5"
          onClick={() => {
            resultChange("5");
          }}
        />
        <CalcBtn
          text="6"
          onClick={() => {
            resultChange("6");
          }}
        />
        <CalcBtnFunction
          text="−"
          onClick={() => {
            subtrack();
          }}
        />
      </div>
      <div>
        <CalcBtn
          text="1"
          onClick={() => {
            resultChange("1");
          }}
        />
        <CalcBtn
          text="2"
          onClick={() => {
            resultChange("2");
          }}
        />
        <CalcBtn
          text="3"
          onClick={() => {
            resultChange("3");
          }}
        />
        <CalcBtnFunction
          text="+"
          onClick={() => {
            add();
          }}
        />
      </div>
      <div>
        <CalcBtn
          text=","
          onClick={() => {
            resultChange(",");
          }}
        />
        <CalcBtn
          text="0"
          onClick={() => {
            resultChange(0);
          }}
        />
        <CalcBtn
          text="."
          onClick={() => {
            resultChange(".");
          }}
        />
        <CalcBtnFunction
          text="="
          onClick={() => {
            equals();
          }}
        />
      </div>
    </div>
  );
};
