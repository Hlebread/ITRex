import React, { FC } from "react";
import AuthLink from "../AuthLink/AuthLink";

import StyledFooter from "./AuthFooter.style";
import IAuthFooter from "./AuthFooter.type";

const AuthFooter: FC<IAuthFooter> = ({ children, link }) => {
  return (
    <StyledFooter>
      <div>{children}</div>
      <AuthLink link={{ path: link?.path || "/", text: link?.text || "" }} />
    </StyledFooter>
  );
};

export default AuthFooter;
