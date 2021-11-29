import React, { FC } from "react";

import { StyledLink, StyledTitle } from "./Title.style";
import ITitle from "./Title.type";

const Title: FC<ITitle> = ({ btn, children = "Title" }) => (
	<StyledTitle>
		{btn ? (
			<StyledLink to={btn.link || "/"} replace>
				{btn.icon}
			</StyledLink>
		) : (
			""
		)}
		{children}
	</StyledTitle>
);

export default Title;
