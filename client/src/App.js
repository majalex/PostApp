import React from "react";
import { Container } from "@mui/material";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Footer from "./components/Footer/Footer";


const App = () => {

   const user = JSON.parse(localStorage.getItem('profile'));

   return (
      <BrowserRouter>
      <Container maxWidth="xl" className="container">
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Home} />
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
        </Switch>
        <Footer/>
      </Container>
    </BrowserRouter>
  );
};

export default App;
