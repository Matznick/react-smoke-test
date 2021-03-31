import React from "react";
import ReactDOM from "react-dom";
import Expenses from "./Expenses";

describe("Testing Expenses component", () => {
  it("expenses props are not empty", () => {
    const input = [
      { date: "2017-04-05", amount: 0 },
      { date: "2017-04-05", amount: 4 },
    ];
    const div = document.createElement("div");
    ReactDOM.render(<Expenses expenses={input} />, div);
  });
  it("expenses props are empty", () => {
    const input = [];
    const div = document.createElement("div");
    ReactDOM.render(<Expenses expenses={input} />, div);
  });
});
