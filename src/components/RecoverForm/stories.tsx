import { Story, Meta } from "@storybook/react/types-6-0";

import { RecoverForm } from ".";

export default {
  title: "RecoverForm",
  component: RecoverForm,
} as Meta;

export const Basic: Story = () => (
  <RecoverForm/>
);
