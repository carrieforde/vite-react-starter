import * as React from "react";
import { FormProvider, UseFormReturn, FieldValues } from "react-hook-form";

export type FormProps<T extends FieldValues = FieldValues> = {
  methods: UseFormReturn<T>;
  onSubmit: (e: React.FormEvent) => void;
};

export const Form = ({
  methods,
  onSubmit,
  children,
}: React.PropsWithChildren<FormProps>) => (
  <FormProvider {...methods}>
    <form onSubmit={onSubmit}>{children}</form>
  </FormProvider>
);

export default Form;
