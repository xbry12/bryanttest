import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';

import DashBoardNav from './DashBoardNav';
import JobsPortal from '../Jobs/JobsPortal';
import TodoPortal from '../Todo/TodoPortal';
import AnalyticsPortal from '../Analytics/AnalyticsPortal';
import DashBoard from './DashBoard';

import {FaUser} from "react-icons/fa"


import {
    Col,
    Row,
    Container
} from 'react-bootstrap'

function DashBoardPortal() {
    const [savedJobsArray, setSavedJobsArray] = useState([]);
    return (
        <Container>
            <Row>
                <Col xs='2'>
                    <Row>
                    {/* '''calls DashbBoardNav which creates the NavBar() object the NavBar()''' */}
                        <DashBoardNav />
                    </Row>
                    <Row>
                        <Link to="/profile">
                            <FaUser size={50}/>
                        </Link>
                    </Row>
                </Col>
                {/* what does next ROUTE column do? */}
                <Col>
                    <Route
                        path='/portal/dashboard'
                        render={() => {
                            return <DashBoard savedJobsArray={savedJobsArray}  />
                        }}
                    />
                    <Route
                        path='/portal/jobs'
                        render={() => {
                            return <JobsPortal savedJobsArray={savedJobsArray} />
                        }}
                    />
                    <Route
                        path='/portal/todo'
                        render={()=> {
                            return <TodoPortal />
                        }}
                    />
                    <Route
                        path='/portal/analytics'
                        render={()=> {
                            return <AnalyticsPortal />
                        }}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default DashBoardPortal
