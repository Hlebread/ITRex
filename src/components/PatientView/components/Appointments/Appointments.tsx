import React, { FC } from "react";
import { FaPlus } from "react-icons/fa";
import { RiHeartPulseLine } from "react-icons/ri";

import Button from "../../../common/Button/Button";
import CardList from "../../../common/CardList/CardList";
import Toolbar from "../../../common/Toolbar/Toolbar";

const Appointments: FC = () => (
	<>
		<Toolbar title="My Appointments">
			<Button iconLeft={<FaPlus />} option="toolbar">Create an appointment</Button>
		</Toolbar>
		<CardList infoIcon={<RiHeartPulseLine />} />
	</>
);

export default Appointments;
