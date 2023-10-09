import { StoryFn, Meta } from "@storybook/react";
import LumeDashboard from "../src/components/lume/LumeDashboard/LumeDashboard.js";
import LumeProvider from "../src/components/lume/LumeProvider.js";

export default {
  title: "LumeDashboard",
  component: LumeDashboard,
} as Meta<typeof LumeDashboard>;

const Template: StoryFn<typeof LumeDashboard> = (args) => (
  <LumeProvider>
    <LumeDashboard {...args} />
  </LumeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  // Add initial props here
};
