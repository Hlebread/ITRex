import React, { FC } from "react";

import useTitle from "../../hooks/useTitle";

import AppWrapper from "../base/AppWrapper/AppWrapper";
import UiContainer from "../base/UiContainer/UiContainer";
import Form from "../common/Form/Form";
import Title from "../common/Title/Title";
import AuthFooter from "../Auth/components/AuthFooter/AuthFooter";

interface IAuthTemplate {
  title: string;
  footer: {
    link: {
      path: string;
      text: string;
    };
    text: string;
  };
  onFormSubmit?: () => void;
}

const AuthTemplate: FC<IAuthTemplate> = ({
  children,
  title,
  footer,
  onFormSubmit,
}) => {
  useTitle(title);

  return (
    <AppWrapper type="auth">
      <UiContainer type="auth">
        <Form type="auth" onSubmit={onFormSubmit}>
          <Title>{title}</Title>
          {children}
        </Form>
        <AuthFooter link={{ path: footer.link.path, text: footer.link.text }}>
          {footer.text}
        </AuthFooter>
      </UiContainer>
    </AppWrapper>
  );
};

export default AuthTemplate;
