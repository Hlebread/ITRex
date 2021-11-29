import { FC } from "react";

import StyledHeader from "./AppHeader.style";
import {
  useGetAuthStatus,
  useGetAuthUsertype,
} from "../../../store/selectors/auth";

import Avatar from "../../common/Avatar/Avatar";
import Logo from "../../common/Logo/Logo";
import UserInfo from "../../common/UserInfo/UserInfo";
import { setUsertypeAction } from "../../../store/actions/auth";

const AppHeader: FC = () => {
  const usertype = useGetAuthUsertype();
  const status = useGetAuthStatus();

  const clickHandler = () => {
    setUsertypeAction("patient");
    console.log(status);
  };

  return (
    <StyledHeader>
      <Logo />
      <div onClick={clickHandler}>
        <UserInfo
          topText="Gleb Makhankov"
          bottomText="Doctor"
          isHeader={true}
        />
        <Avatar status="TEST" />
      </div>
    </StyledHeader>
  );
};

export default AppHeader;
