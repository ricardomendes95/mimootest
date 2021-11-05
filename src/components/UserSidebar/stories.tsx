import { Story, Meta } from "@storybook/react/types-6-0";
import { MemoryRouter } from "react-router-dom";
import { UserSidebar, UserProps  } from ".";

export default {
  title: "UserSidebar",
  component: UserSidebar,
} as Meta;


export const Basic: Story<UserProps> = (args) => (
  <MemoryRouter>
    <UserSidebar {...args} />
  </MemoryRouter>
);
