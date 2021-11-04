import { Story, Meta } from "@storybook/react/types-6-0";

import { Input } from ".";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    id: {
      control: { type: 'text' }
    },
    name: {
      control: { type: 'text' }
    },
    label: {
      control: { type: 'text' }
    },
    placeholder: {
      control: { type: 'text' }
    },
    isInvalid: {
      control: { type: 'boolean' }
    },
    error: {
      control: { type: 'text' }
    },
  },
} as Meta;

export const Basic: Story = ({...argsTypes}) => (
  <Input
    {...argsTypes}
  />
);

const message = 'Campo obrigatório'

export const Error: Story = ({ isInvalid = true, error = message, ...argsTypes }) => (
    <Input
      {...argsTypes}
      isInvalid={isInvalid}
      error={error}
    />
  );
