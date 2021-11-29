import React, { FC } from "react";
import { useFormik } from "formik";
import { IoChevronForwardOutline, IoMailOutline } from "react-icons/io5";

import Button from "../../../common/Button/Button";
import Input from "../../../common/Input/Input";
import InputPassword from "../../../common/Input/InputPassword";
import AuthLink from "../AuthLink/AuthLink";
import AuthTemplate from "../../../templates/AuthTemplate";
import validationSchema from "./validationSchema";

const SignInPage: FC = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <AuthTemplate
      title="Sign In"
      footer={{
        link: { path: "/auth/sign-up", text: "Sign up" },
        text: " Don’t have an account?",
      }}
      onFormSubmit={formik.handleSubmit}
    >
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
      <Button iconRight={<IoChevronForwardOutline />} type="submit">
        Sign in
      </Button>
      <AuthLink
        link={{ path: "/auth/restore-password", text: "Forgot Password?" }}
      />
    </AuthTemplate>
  );
};

export default SignInPage;
