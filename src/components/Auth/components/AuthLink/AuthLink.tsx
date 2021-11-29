import React, { FC } from "react";

import StyledLink from "./AuthLink.style";
import IAuthLink from "./AuthLink.type";

const AuthLink: FC<IAuthLink> = ({ link }) => (
  <StyledLink to={link?.path || "/"}>{link?.text}</StyledLink>
);

export default AuthLink;
