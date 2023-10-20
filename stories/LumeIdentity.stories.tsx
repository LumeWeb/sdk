import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import LumeIdentity from "../src/components/lume/LumeIdentity/LumeIdentity.js";
import AuthProvider from "../src/components/AuthProvider.js";

export default {
  title: "LumeIdentity",
  component: LumeIdentity,
} as Meta<typeof LumeIdentity>;

const Template: StoryFn<typeof LumeIdentity> = (args) => (
  <AuthProvider>
    <LumeIdentity {...args} />
  </AuthProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  // Add initial props here
};
