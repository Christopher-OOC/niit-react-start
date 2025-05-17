import { useReducer } from "react";
import "./calculator.css";

const initialState = { expression: "", answer: "" };

function reducer(state, action) {
  switch (action.type) {
    case "1": {
      console.log(action.payload);
      return {
        ...state,
        expression: state.expression + action.payload,
      };
    }
    default: {
      console.log(action.payload);
      return {
        ...state,
      };
    }
  }
}

export default function Calculator() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { expression, answer } = state;

  return (
    <div className="container">
      <div className="calculator">
        <div className="calculator__screen">
          <input
            className="calculator__screen--input"
            value={`${expression}`}
            type="text"
            disabled
          />
        </div>
        <div className="calculator-button__container">
          <div className="calculator-button__button-row">
            <span
              onClick={(e) =>
                dispatch({ type: "buttonClick", payload: e.target.textContent })
              }
            >
              1
            </span>
            <span
              onClick={(e) =>
                dispatch({ type: "buttonClick", payload: e.target.textContent })
              }
            >
              2
            </span>
            <span
              onClick={(e) =>
                dispatch({ type: "buttonClick", payload: e.target.textContent })
              }
            >
              3
            </span>
            <span
              onClick={(e) =>
                dispatch({ type: "buttonClick", payload: e.target.textContent })
              }
            >
              +
            </span>
          </div>
          <div className="calculator-button__button-row">
            <span
              onClick={(e) =>
                dispatch({ type: "buttonClick", payload: e.target.textContent })
              }
            >
              4
            </span>
            <span
              onClick={(e) =>
                dispatch({ type: "buttonClick", payload: e.target.textContent })
              }
            >
              5
            </span>
            <span
              onClick={(e) =>
                dispatch({ type: "buttonClick", payload: e.target.textContent })
              }
            >
              6
            </span>
            <span
              onClick={(e) =>
                dispatch({ type: "buttonClick", payload: e.target.textContent })
              }
            >
              -
            </span>
          </div>
          <div className="calculator-button__button-row">
            <span
              onClick={(e) =>
                dispatch({ type: "buttonClick", payload: e.target.textContent })
              }
            >
              7
            </span>
            <span
              onClick={(e) =>
                dispatch({ type: "buttonClick", payload: e.target.textContent })
              }
            >
              8
            </span>
            <span
              onClick={(e) =>
                dispatch({ type: "buttonClick", payload: e.target.textContent })
              }
            >
              9
            </span>
            <span
              onClick={(e) =>
                dispatch({ type: "buttonClick", payload: e.target.textContent })
              }
            >
              *
            </span>
          </div>
          <div className="calculator-button__button-row">
            <span
              onClick={(e) =>
                dispatch({ type: "buttonClick", payload: e.target.textContent })
              }
            >
              C
            </span>
            <span
              onClick={(e) =>
                dispatch({ type: "buttonClick", payload: e.target.textContent })
              }
            >
              0
            </span>
            <span
              onClick={(e) =>
                dispatch({ type: "buttonClick", payload: e.target.textContent })
              }
            >
              =
            </span>
            <span
              onClick={(e) =>
                dispatch({ type: "buttonClick", payload: e.target.textContent })
              }
            >
              /
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
