import React, { FC } from "react";

import StyledForm from "./Form.style";
import IForm from "./Form.type";

const Form: FC<IForm> = ({ children, type, onSubmit }) => (
  <StyledForm type={type} onSubmit={onSubmit}>
    {children}
  </StyledForm>
);

export default Form;
