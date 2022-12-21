import type { Meta, Story } from "@storybook/react";
import InputComp, { InputProps } from "./input";

export default {
  component: InputComp,
  title: "Forms/Input",
} as Meta;

const InputTemplate: Story<InputProps> = (args) => <InputComp {...args} />;

export const Input = InputTemplate.bind({});

Input.args = {
  label: "First Name",
  name: "firstName",
};
