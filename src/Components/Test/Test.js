import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from "../Auth/Login";
import AuthPortal from "../Auth/AuthPortal";
import JobsPortal from "../Jobs/JobsPortal";
import LandingPortal from "../Landing/LandingPortal";
import TodoPortal from "../Todo/TodoPortal";
import DefaultHeader from "../Header/DefaultHeader";
import DashBoardPortal  from "../Dashboard/DashBoardPortal";
import HeaderPortal from "../Header/HeaderPortal";

export default function Test() {
    return (
        <Router>
            <HeaderPortal />
        </Router>
    )
}