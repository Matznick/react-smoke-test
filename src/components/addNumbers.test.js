import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { AddNumber } from "./AddNumbers";
import { AddNumbers } from "./AddNumbers";

describe("Testing AddNumbers", () => {
  it("click the button", () => {
    const funcc = jest.fn();
    const wrapper = mount(<AddNumber onAdd={funcc} />);
    wrapper.find("button").simulate("click");
    console.log(funcc.mock.calls);
  });

  // zweiter test mit welche nummer kommt raus
});
