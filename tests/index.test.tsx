import React from "react";
import { shallow } from "enzyme";
import Index from "../pages/index";

describe("<Index />", () => {
  it("test template", () => {
    const component = shallow(<Index />);

    expect(component.find("div").html()).toContain("Test Template");
  });
});
