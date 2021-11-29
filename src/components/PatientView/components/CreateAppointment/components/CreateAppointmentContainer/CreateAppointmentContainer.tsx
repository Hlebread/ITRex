import React, { FC } from "react";
import StyledCreateAppointmentContainer from "./CreateAppointmentContainer.style";

const CreateAppointmentContainer: FC = ({ children }) => (
  <StyledCreateAppointmentContainer>
    {children}
  </StyledCreateAppointmentContainer>
);

export default CreateAppointmentContainer;
