import React, { useEffect, useState } from "react";
import AppWrapper from "../components/common/AppWrapper/AppWrapper";
import UiContainer from "../components/common/UiContainer/UiContainer";
import Input from "../components/interface/Input/Input";
import Title from "../components/common/Title/Title";
import Button from "../components/interface/Button/Button";
import { Link } from "react-router-dom";
import Form from "../components/common/Form/Form";
import AuthFooter from "../components/templates/Auth/AuthFooter";

export default function SignUp() {
  useEffect(() => {
    document.title = "Sign Up";
  }, []);
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordCheck: "",
  });
  const [inputsIsInvalid, setInputsIsInvalid] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    passwordCheck: false,
  });

  return (
    <AppWrapper className="auth">
      <UiContainer className="auth">
        <Form className="form">
          <Title>Sign Up</Title>
          <Input
            name="firstName"
            iconLeft="firstName"
            placeholder="First name"
            invalidMessage="Strange name, dude!"
            isInvalid={inputsIsInvalid.firstName}
            inputValues={inputValues}
            setInputValues={setInputValues}
          />
          <Input
            name="lastName"
            iconLeft="lastName"
            placeholder="Last name"
            invalidMessage="Strange surname, dude!"
            isInvalid={inputsIsInvalid.lastName}
            inputValues={inputValues}
            setInputValues={setInputValues}
          />
          <Input
            name="email"
            iconLeft="email"
            placeholder="Email"
            invalidMessage="Email not found. Please check the spelling"
            isInvalid={inputsIsInvalid.email}
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
            inputValues={inputValues}
            setInputValues={setInputValues}
          />
          <Input
            name="password-check"
            iconLeft="password-check"
            iconRight="eye"
            placeholder="Repeat password"
            invalidMessage="Password contain unsupported characters"
            isInvalid={inputsIsInvalid.password}
            inputValues={inputValues}
            setInputValues={setInputValues}
          />
          <Button withBtn={true}>Sign Up</Button>
        </Form>

		  <AuthFooter link="/sign-in" linkText="Sign in">Already have an account?</AuthFooter>
      </UiContainer>
    </AppWrapper>
  );
}
