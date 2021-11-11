import React from "react";
import { Link } from "react-router-dom";
import "./Auth.scss";

export default function AuthFooter({ children, link, linkText }) {
  return (
    <div className="form__footer">
      <div className="form__footer__title">{children}</div>
      <Link to={link} className="nav-link nav-link_footer">
        {linkText}
      </Link>
    </div>
  );
}
