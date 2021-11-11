import React from "react";
import cl from "./Toolbar.module.scss";
import Title from "../../common/Title/Title";
import ToolbarSearch from "./ToolbarSearch";
import ToolbarSelect from "./ToolbarSelect";

export default function Toolbar({title}) {
  return (
    <header className={cl.toolbar}>
      <Title mix={cl.toolbar__title}>{title}</Title>
      <ToolbarSearch />
      <ToolbarSelect label="Sort by:" />
    </header>
  );
}
