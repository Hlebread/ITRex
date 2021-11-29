import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Name should be at least 2 characters long")
    .max(20, "Name can't be longer than 20 characters long")
    .required("Enter your name"),
  lastName: Yup.string()
    .min(2, "Surname should be at least 2 characters long")
    .max(20, "Surname can't be longer than 20 characters long")
    .required("Enter your surname"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email address is required!"),
  password: Yup.string()
    .min(6, "Password is too short - should be 6 chars minimum")
    .max(16, "Password is too long - should be 16 chars maximum")
    .matches(
      /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/g,
      "Password should match (A-z, 0-9)"
    )
    .required("Password is required"),
  passwordCheck: Yup.string()
    .min(6, "Password is too short - should be 6 chars minimum")
    .max(16, "Password is too long - should be 16 chars maximum")
    .matches(
      /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/g,
      "Password should match (A-z, 0-9)"
    )
    .required("Repeat your password"),
});

export default validationSchema;
