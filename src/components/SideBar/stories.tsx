import { Story, Meta } from "@storybook/react/types-6-0";
import { MemoryRouter } from "react-router-dom";
import { Sidebar, SidebarProps } from ".";
import icon from "../../assets/IconDashboard.svg";

export default {
  title: "Sidebar",
  component: Sidebar,
} as Meta;

const defaultProps = {
  menuActive: "/dashboard",
  paths: [
    { title: "dashboard", path: "/dashboard" },
    { title: "Patrocinadores", path: "/patrocinio" },
  ],
};

export const Basic: Story<SidebarProps> = (args) => (
  <MemoryRouter>
    <Sidebar {...defaultProps} {...args} />
  </MemoryRouter>
);
