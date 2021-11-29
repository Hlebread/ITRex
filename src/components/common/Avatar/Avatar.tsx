import { FC } from "react";

import StyledAvatar from "./Avatar.style";
import IAvatar from "./Avatar.type";

import pic from "../../../assets/images/avatar.jpg";

const Avatar: FC<IAvatar> = ({status}) => (
  <StyledAvatar>
    <img src={pic} alt="Avatar" />
	 {status ? <div /> : ""}
  </StyledAvatar>
);

export default Avatar;
