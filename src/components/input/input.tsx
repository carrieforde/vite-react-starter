import { FormControl } from "baseui/form-control";
import { Input as BaseInput, InputProps as BaseInputProps } from "baseui/input";
import * as React from "react";
import { Controller } from "react-hook-form";

export type InputProps = Omit<BaseInputProps, "overrides"> & {
  label: string;
  name: string;
};

export const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  name,
  ...props
}) => (
  <FormControl
    label={label}
    overrides={{
      Label: {
        style: () => ({
          color: "var(--color-default-100)",
        }),
      },
    }}
  >
    <BaseInput {...props} type={type} name={name} />
  </FormControl>
);

export default Input;

export type ControlledInputProps = InputProps;

export const ControlledInput: React.FC<ControlledInputProps> = ({
  name,
  label,
}) => (
  <Controller
    name={name}
    render={({ field: { onBlur, onChange, value, ref } }) => (
      <Input
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        inputRef={ref as any}
        name={name}
        label={label}
      />
    )}
  />
);
