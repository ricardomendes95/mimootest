import { Story, Meta } from "@storybook/react/types-6-0";
import { LoginForm } from "../LoginForm";

import { LoginLayout } from ".";

export default {
  title: "LoginLayout",
  component: LoginLayout,
} as Meta;

export const Basic: Story = () => {
  return <LoginLayout>{LoginForm}</LoginLayout>;
};
