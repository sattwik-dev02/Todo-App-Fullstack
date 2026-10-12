import yup from "yup";

export const todoValidateSchema = yup.object({
  title: yup
    .string()
    .trim()
    .min(3, "title must be atleast 3 characters")
    .required(),
});
