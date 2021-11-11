import React, { useEffect, useState } from "react";
import AppWrapper from "../components/common/AppWrapper/AppWrapper";
import UiContainer from "../components/common/UiContainer/UiContainer";
import Input from "../components/interface/Input/Input";
import Title from "../components/common/Title/Title";
import Button from "../components/interface/Button/Button";
import { Link } from "react-router-dom";
import Form from "../components/common/Form/Form";
import AuthFooter from "../components/templates/Auth/AuthFooter";

export default function SignIn() {
  useEffect(() => {
    document.title = "Sign In";
  }, []);

  const [inputValues, setInputValues] = useState({ email: "", password: "" });
  const [inputsIsInvalid, setInputsIsInvalid] = useState({
    email: false,
    password: true,
  });

  return (
    <AppWrapper className="auth">
      <UiContainer className="auth">
        <Form className="form">
          <Title>Sign In</Title>

          <Input
            name="email"
            iconLeft="email"
            placeholder="Email"
            invalidMessage="Email not found. Please check the spelling"
            isInvalid={inputsIsInvalid.email}
            //  getState={test}
            inputValues={inputValues}
            setInputValues={setInputValues}
          />

          <Input
            name="password"
            iconLeft="password"
            iconRight="eye"
            placeholder="Password"
            invalidMessage="Password contain unsupported characters"
            isInvalid={inputsIsInvalid.password}
            //  getState={test}
            inputValues={inputValues}
            setInputValues={setInputValues}
          />

          <Button withBtn={true}>Sign In</Button>

          <Link to="/restore-password" className="nav-link">
            Forgot Password?
          </Link>
        </Form>

        <AuthFooter link="/sign-up" linkText="Sign up">
          Don’t have an account?
        </AuthFooter>
      </UiContainer>
    </AppWrapper>
  );
}
