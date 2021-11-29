import React, { FC } from "react";
import AppHeader from "../base/AppHeader/AppHeader";
import AppWrapper from "../base/AppWrapper/AppWrapper";
import UiContainer from "../base/UiContainer/UiContainer";

const MainTemplate: FC = ({ children }) => (
	<AppWrapper type="main">
		<AppHeader />
		<UiContainer type="main">{children}</UiContainer>
	</AppWrapper>
);

export default MainTemplate;
