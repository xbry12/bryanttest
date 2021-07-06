import React from "react";
import logo from "../../Images/TRKR.svg";
import { Nav, Navbar, Button } from "react-bootstrap";
import styled from "@emotion/styled";
import { Link, Redirect } from 'react-router-dom';
import '../../css/header.css'

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  > img {
    padding: 0 0.5rem;
  }
`;
const StyledButton = styled(Button)`
  background: var(--color-purple);
  padding: 0 2rem;
  margin-left: 3rem;
  border-radius: 2px;
`;

function AuthHeader({ 
    setAuthRedirect, 
    authRedirect, 
    setCurrentUser, 
    currentUser, 
    handleAuth 
}) {
    const handleLogOut = (e) => {
        handleAuth(null);
        setCurrentUser(null);
        setAuthRedirect(false);
        console.log(authRedirect)
        if(!currentUser.username) {
          console.log(currentUser, '&&&&&&&&')
        }
      };
      
      if(currentUser=== null) return <Redirect to='/' />
      

  return (
    <StyledHeader>
      <img src={logo} width="250" style={{}}></img>

      <Navbar expand="lg" variant="light">
          <h1 className ='showUsername'>Hello {currentUser.username}</h1>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#"></Nav.Link>
            <Nav.Link href="#"></Nav.Link>
          </Nav>
          <Nav className="mr-auto">
            <Link to="/">Home</Link>
            <Link to="/portal/jobs">Dashboard</Link>
            <Link to="/profile">Profile</Link>
            <StyledButton onClick={handleLogOut}>Log Out</StyledButton>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </StyledHeader>
  );
}

export default AuthHeader
