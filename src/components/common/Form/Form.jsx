import React from "react";
import "./Form.scss";

export default function Form({ children, ...props }) {
  return <form {...props}>{children}</form>;
}
