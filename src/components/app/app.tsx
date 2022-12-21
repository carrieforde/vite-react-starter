/* eslint-disable no-console */
import { Button } from "baseui/button";
import { Form } from "components/form/form";
import { ControlledInput } from "components/input/input";
import * as React from "react";
import { useForm } from "react-hook-form";

interface NewUserForm {
  firstName: string;
  lastName: string;
}

export const App = () => {
  const methods = useForm<NewUserForm>({
    defaultValues: { firstName: "", lastName: "" },
  });

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    methods.handleSubmit((data) => console.log(data));
    console.log(methods.getValues());
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Form methods={methods as any} onSubmit={handleOnSubmit}>
      <ControlledInput label="First Name" name="firstName" />

      <ControlledInput label="Last Name" name="lastName" />

      <Button type="submit">Submit</Button>
    </Form>
  );
};
