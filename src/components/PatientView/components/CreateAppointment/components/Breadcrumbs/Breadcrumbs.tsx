import React, { FC } from "react";
import { IoChevronForwardOutline } from "react-icons/io5";

import IBreadcrumbs from "./Breadcrumbs.type";
import { StyledBreadcrumbs, StyledCrumb } from "./Breadcrumbs.style";
import { useNavigate } from "react-router";

const Breadcrumbs: FC<IBreadcrumbs> = ({ crumbs }) => {
  const navigate = useNavigate();
  return (
    <StyledBreadcrumbs>
      {crumbs.items.map((item, index) => (
        <React.Fragment key={index}>
          <StyledCrumb onClick={() => navigate(item.path)}>
            {item.label}
          </StyledCrumb>
          <IoChevronForwardOutline
            style={{ color: "var(--color-secondary)" }}
          />
        </React.Fragment>
      ))}
      {<StyledCrumb active={true}>{crumbs.active}</StyledCrumb>}
    </StyledBreadcrumbs>
  );
};

export default Breadcrumbs;
