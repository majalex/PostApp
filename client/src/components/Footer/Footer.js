import React from 'react';
import { AppBar, Toolbar } from "@mui/material";
import useStyles from "./styles";

const Footer = () => {
    const { classes } = useStyles();

    return(
        <AppBar className={classes.appBar} position="static">
            <Toolbar>
                <h5>&#xA9;
                    <a className={classes.link} href='https://amdev.me/' target='blank'> Alex Maj</a>
                </h5>
            </Toolbar>
        </AppBar>
    )
}

export default Footer;