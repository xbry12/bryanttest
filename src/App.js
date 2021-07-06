import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import HeaderPortal from "./Components/Header/HeaderPortal";
import Content from "./Components/Content/Content";
import LandingPortal from "./Components/Landing/LandingPortal";
import Footer from "./Components/Footer/Footer";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuth = (user) => {
    if (user) {
      setIsAuthenticated(true);
      setCurrentUser(user);
    } else {
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  };

  return (    
    <Container>
      <HeaderPortal 
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        handleAuth={handleAuth}
      />
      <Route exact path="/" component={LandingPortal} />
      <Content currentUser={currentUser} />
      <Footer />
    </Container>
  );
}

export default App;
