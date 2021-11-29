import styled from "styled-components";

import StyledInput from "../../../Input/Input.style";

export const StyledToolbarSearchContainer = styled.div``;
/* @include for-phone {
	&:focus-within {
		position: absolute;
		width: 100%;
		z-index: 1;
	}
} */
export const StyledToolbarSearchInput = styled(StyledInput)`
  transition: 0.2s;
  width: 200px;
`;
