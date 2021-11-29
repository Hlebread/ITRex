import React, { FC } from "react";
import { useFormik } from "formik";
import {
  IoChevronForwardOutline,
  IoChevronBackOutline,
  IoMailOutline,
} from "react-icons/io5";

import useTitle from "../../../../hooks/useTitle";
import validationSchema from "./validationSchema";

import AppWrapper from "../../../base/AppWrapper/AppWrapper";
import UiContainer from "../../../base/UiContainer/UiContainer";
import Title from "../../../common/Title/Title";
import Form from "../../../common/Form/Form";
import Button from "../../../common/Button/Button";
import Input from "../../../common/Input/Input";
import Info from "../../../common/Info/Info";

const RestorePage: FC = () => {
  useTitle("Restore password");

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <AppWrapper type="auth">
      <UiContainer type="auth">
        <Form type="auth" onSubmit={formik.handleSubmit}>
          <Title
            btn={{ icon: <IoChevronBackOutline />, link: "/auth/sign-in" }}
          >
            Restore Password
          </Title>

          <Info>
            Please use your email address, and we’ll send you the link to reset
            your password
          </Info>

          <Input
            id="email"
            placeholder="Email"
            type="text"
            iconLeft={<IoMailOutline />}
            invalidMessage={formik.errors.email}
            value={formik.values.email}
            onChange={formik.handleChange}
          />

          <Button iconRight={<IoChevronForwardOutline />} type="submit">
            Send reset link
          </Button>
        </Form>
      </UiContainer>
    </AppWrapper>
  );
};

export default RestorePage;
