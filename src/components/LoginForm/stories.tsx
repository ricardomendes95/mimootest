import { Story, Meta } from "@storybook/react/types-6-0";
import { MemoryRouter } from "react-router-dom";

import { LoginForm } from ".";

export default {
  title: "LoginForm",
  component: LoginForm,
} as Meta;

export const Basic: Story = () => (
  <MemoryRouter>
    <LoginForm/>
  </ MemoryRouter>
);
