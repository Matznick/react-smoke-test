import React from "react";
import { shallow } from "enzyme";
import UserStory from "./UserStory";

describe("UserStory test", () => {
  it("click Deliver button", () => {
    const funcc = jest.fn();
    const shallowRenderer = shallow(<UserStory updateStatus={funcc} />);
    shallowRenderer.find('[data-behavior="deliver"]').simulate("click");

    expect(funcc.mock.calls).toEqual([["delivered"]]);
  });

  it("click Finish button", () => {
    const funcc = jest.fn();
    const shallowRenderer = shallow(<UserStory updateStatus={funcc} />);
    shallowRenderer.find('[data-behavior="finish"]').simulate("click");

    expect(funcc.mock.calls).toEqual([["finished"]]);
  });
});
