import { Story, Meta } from "@storybook/react/types-6-0";
import { MemoryRouter } from "react-router-dom";
import { Header, HeaderProps } from ".";
import icon from "../../assets/IconDashboard.svg";

export default {
  title: "Header",
  component: Header,
} as Meta;

const defaultProps: HeaderProps = {
  icon,
  title: "DashBoard",
  paths: [
    { title: "dashboard", path: "/dashboard" },
    { title: "Patrocinadores", path: "/patrocinio" },
  ],
};

export const Basic: Story<HeaderProps> = (args) => (
  <MemoryRouter>
    <Header {...defaultProps} {...args} />
  </MemoryRouter>
);
