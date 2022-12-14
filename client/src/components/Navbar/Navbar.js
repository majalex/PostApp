import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@mui/material";
import useStyles from "./styles";
import logo from "../../images/logoP.svg";
import { useDispatch } from "react-redux";

const Navbar = () => {
   const { classes } = useStyles();
   const dispatch = useDispatch();

   const [user, setUser] = useState(localStorage.getItem("profile") ? JSON.parse(localStorage.getItem("profile")) : null)

   const logout = () => {
      dispatch({ type: "LOGOUT" })
      setUser(null);
      window.location.replace("/");
   }

   return (
      <AppBar className={classes.appBar} position="static" color="inherit">
         <div className={classes.brandContainer}>
            <Typography component={Link} to="/" align="center">
               <img className={classes.image} src={logo} alt="memories" height="80" width="225" />
            </Typography>
         </div>
         <Toolbar className={classes.toolbar}>
            {user ? (
               <div className={classes.profile}>
                  <Avatar sx={{ width: 56, height: 56 }} className={classes.purple} alt={user.given_name} src={user.picture}>{user?.given_name}</Avatar>
                  <Typography className={classes.userName} variant="h6">{user.given_name}</Typography>
                  <Button variant="contained" className={classes.logout} color="primary" onClick={logout}>Logout</Button>
               </div>
            ) : (
               <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
            )}
         </Toolbar>
      </AppBar>
   )
}

export default Navbar;