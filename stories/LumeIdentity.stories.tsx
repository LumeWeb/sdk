import { StoryFn, Meta } from "@storybook/react";
import LumeIdentity from "../src/components/lume/LumeIdentity/LumeIdentity.js";

export default {
  title: "LumeIdentity",
  component: LumeIdentity,
} as Meta<typeof LumeIdentity>;

const Template: StoryFn<typeof LumeIdentity> = (args) => (
  <LumeIdentity {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  // Add initial props here
};
