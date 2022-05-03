import React from "react";
import { shallow } from "enzyme";
import Tasters from "./Tasters";

describe("Tasters", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Tasters />);
    expect(wrapper).toMatchSnapshot();
  });
});
