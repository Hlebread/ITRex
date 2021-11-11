import React from "react";
import ClassMixer from "../../../utils/ClassMixer";
import cl from "./DropList.module.scss";

function DropListItem(props) {
  return <li className={cl.dropList__item} {...props}></li>;
}

export default function DropList({ options, setValue, open, mix }) {
  return (
    <ul
      className={ClassMixer(
        cl.dropList,
        open ? cl.dropList_open : null,
        ...(Array.isArray(mix) ? mix : [mix])
      )}
    >
      {options.map((o) => (
        <DropListItem onClick={() => setValue(o.label)}>{o.label}</DropListItem>
      ))}
    </ul>
  );
}
