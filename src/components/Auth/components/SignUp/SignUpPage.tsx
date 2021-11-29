import React, { FC } from "react";
import { useFormik } from "formik";
import {
  IoChevronForwardOutline,
  IoMailOutline,
  IoPersonOutline,
  IoCheckmarkOutline,
} from "react-icons/io5";

import Button from "../../../common/Button/Button";
import Input from "../../../common/Input/Input";
import InputPassword from "../../../common/Input/InputPassword";
import AuthTemplate from "../../../templates/AuthTemplate";
import validationSchema from "./validationSchema";

const SignUpPage: FC = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordCheck: "",
    },
    validationSchema,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <AuthTemplate
      title="Sign Up"
      footer={{
        link: { path: "/auth/sign-in", text: "Sign in" },
        text: "Already have an account?",
      }}
      onFormSubmit={formik.handleSubmit}
    >
      <Input
        id="firstName"
        placeholder="First name"
        type="text"
        iconLeft={<IoPersonOutline />}
        invalidMessage={formik.errors.firstName}
        value={formik.values.firstName}
        onChange={formik.handleChange}
      />
      <Input
        id="lastName"
        placeholder="Last name"
        type="text"
        iconLeft={<IoPersonOutline />}
        invalidMessage={formik.errors.lastName}
        value={formik.values.lastName}
        onChange={formik.handleChange}
      />
      <Input
        id="email"
        placeholder="Email"
        type="text"
        iconLeft={<IoMailOutline />}
        invalidMessage={formik.errors.email}
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <InputPassword
        id="password"
        placeholder="Password"
        type="password"
        invalidMessage={formik.errors.password}
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <InputPassword
        id="passwordCheck"
        placeholder="Repeat password"
        type="password"
        iconLeft={<IoCheckmarkOutline />}
        invalidMessage={formik.errors.passwordCheck}
        value={formik.values.passwordCheck}
        onChange={formik.handleChange}
      />
      <Button iconRight={<IoChevronForwardOutline />} type="submit">
        Sign up
      </Button>
    </AuthTemplate>
  );
};

export default SignUpPage;
