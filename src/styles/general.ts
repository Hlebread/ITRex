import { createGlobalStyle } from "styled-components";

const GeneralStyles = createGlobalStyle`
	*,
	*::after,
	*::before {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: Poppins;
		font-style: normal;
		scrollbar-width: thin;
	}

	:root {
		--color-primary: #7297ff;
		--color-primary-dark: #476CD3;
		--color-secondary: #a1abc9;
	}

`;

export default GeneralStyles;
