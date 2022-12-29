import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, Grow, Grid, Paper } from "@mui/material";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { getPosts } from "../../actions/posts";
import useStyles from "./styles";

const Home = () => {
   const [currentId, setCurrentId] = useState(null);
   const { classes } = useStyles();
   const dispatch = useDispatch();


   useEffect(() => {
      dispatch(getPosts());
   }, [currentId, dispatch]);


   return (
      <Grow in>
         <Container maxWidth="xl" className={classes.container}>
            <Grid item xs={12} md={3} sm={6} className={classes.formGrid}>
               <Form currentId={currentId} setCurrentId={setCurrentId} />
               <Paper className="classes.pagination" elevation={6}>
               </Paper>
            </Grid>
            <Grid item xs={12} md={9} sm={6}>
               <Posts setCurrentId={setCurrentId} />
            </Grid>
         </Container>
      </Grow>
   )
}

export default Home;