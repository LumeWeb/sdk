import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import LumeDashboard from "../src/components/lume/LumeDashboard/LumeDashboard.js";
import NetworksProvider from "src/components/NetworksProvider.js";

export default {
  title: "LumeDashboard",
  component: LumeDashboard,
} as Meta<typeof LumeDashboard>;

const Template: StoryFn<typeof LumeDashboard> = (args) => (
  <NetworksProvider>
    <LumeDashboard {...args} />
  </NetworksProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  // Add initial props here
};
