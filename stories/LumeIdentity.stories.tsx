import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import LumeIdentity from "../src/components/lume/LumeIdentity/LumeIdentity.js";
import LumeProvider from "../src/components/lume/LumeProvider.js";

export default {
  title: "LumeIdentity",
  component: LumeIdentity,
} as Meta<typeof LumeIdentity>;

const Template: StoryFn<typeof LumeIdentity> = (args) => (
  <LumeProvider>
    <LumeIdentity {...args} />
  </LumeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  // Add initial props here
};
