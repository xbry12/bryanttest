/* called by DashBoardNav.js */

import React from 'react'
import { Link } from 'react-router-dom';

import { 
    Nav,
    Row

 } from 'react-bootstrap/';

function NavBar() {
    return (
        <Nav justify variant="tabs" className="jobNavbar flex-column">
            <Row>
                <Link to="/portal/dashboard">DashBoard</Link>
            </Row>
            <Row>
                <Link to="/portal/jobs">Jobs</Link>               
            </Row>
            <Row>
                <Link to="/portal/todo">To Do List</Link>    
            </Row>
            <Row>
                <Link to="/portal/analytics">Analytics</Link>    
            </Row>
        </Nav>
    )
}

export default NavBar
