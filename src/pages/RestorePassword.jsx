import React, { useEffect, useState } from "react";
import AppWrapper from "../components/common/AppWrapper/AppWrapper";
import UiContainer from "../components/common/UiContainer/UiContainer";
import Input from "../components/interface/Input/Input";
import Title from "../components/common/Title/Title";
import Button from "../components/interface/Button/Button";
import { Link } from "react-router-dom";
import Form from "../components/common/Form/Form";
import InfoBlock from "../components/common/InfoBlock/InfoBlock";

export default function RestorePassword() {
  useEffect(() => {
    document.title = "Restore password";
  }, []);

  const [inputValues, setInputValues] = useState({ email: "" });
  const [inputsIsInvalid, setInputsIsInvalid] = useState({
    email: false,
  });

  return (
    <AppWrapper className="auth">
      <UiContainer className="auth">
        <Form className="form">
          <Title withBtn={true}>Restore password</Title>

          <InfoBlock>
            Please use your email address, and we’ll send you the link to reset
            your password
          </InfoBlock>

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

          <Button withBtn={true}>Send reset link</Button>

          <Link to="/restore-password" className="nav-link">
            Forgot password?
          </Link>
        </Form>
      </UiContainer>
    </AppWrapper>
  );
}
