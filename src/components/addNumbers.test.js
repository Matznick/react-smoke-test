import React from "react";
import { mount } from "enzyme";
import { AddNumbers } from "./AddNumbers";

describe("Testing AddNumbers", () => {
  it("renders the Number component on click", () => {
    const wrapper = mount(<AddNumbers />);
    wrapper.find("button").simulate("click");
    expect(wrapper.find(".number-div").length).toEqual(1);
    wrapper.find("button").simulate("click");
    expect(wrapper.find(".number-div").length).toEqual(2);
  });
});
