import React, { FC } from "react";

import StyledLogo from "./Logo.style";
import LogoIcon from "./components/LogoIcon";
import LogoTitle from "./components/LogoTitle";

const Logo: FC = () => (
	<StyledLogo>
		<LogoIcon />
		<LogoTitle />
	</StyledLogo>
);

export default Logo;
