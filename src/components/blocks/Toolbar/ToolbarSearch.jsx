import React from "react";
import Input from "../../interface/Input/Input";
import "./ToolbarSearch.scss";

export default function ToolbarSearch() {
  return (
    <div className="toolbar-search">
      <Input name="search" iconLeft="search" placeholder="Search" />
    </div>
  );
}
