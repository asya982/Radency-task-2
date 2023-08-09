import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().required("Name of note is required"),
  content: Yup.string().max(1000, "Express yourself in 1000 symbols"),
  category: Yup.number().required("Please, pick category"),
});
