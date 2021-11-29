import React, { FC } from "react";
import { IoClipboardOutline } from "react-icons/io5";

import CardList from "../../../common/CardList/CardList";
import Toolbar from "../../../common/Toolbar/Toolbar";
import NoPatients from "../NoPatients/NoPatients";

const Patients: FC = () => (
  <>
    <Toolbar title="My Patients" />
    <CardList infoIcon={<IoClipboardOutline />} />
    {/* <NoPatients /> */}
  </>
);

export default Patients;
