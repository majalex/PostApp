import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import useStyles from "./styles";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost, getPosts } from "../../actions/posts"

function Form({ currentId, setCurrentId }) {
   const { classes } = useStyles();
   const [postData, setPostData] = useState({ title: "", message: "", tags: "", selectedFile: "" })
   const post = useSelector(state => currentId ? state.posts.posts.find(p => p._id === currentId) : null);
   const dispatch = useDispatch();
   const user = JSON.parse(localStorage.getItem("profile"));

   useEffect(() => {
      if (post) setPostData(post);
   }, [post])

   const handleSubmit = (event) => {
      event.preventDefault();
      if (currentId) {
         dispatch(updatePost(currentId, { ...postData, name: user?.given_name }));
      } else {
         dispatch(createPost({ ...postData, name: user?.given_name }));
         dispatch(getPosts());
      }
      clear();
   }

   const handleChange = (event) => {
      const { name, value } = event.target;
      setPostData(prevData => {
         return {
            ...prevData,
            [name]: value
         };
      });
   }

   const clear = () => {
      setCurrentId(null);
      setPostData({ title: "", message: "", tags: "", selectedFile: "" })
   }

   if (!user?.given_name) {
      return (
         <Paper className={classes.paper}>
            <Typography variant="h6" align="center">
               Please Sign In to create your own Posts!
            </Typography>
         </Paper>
      )
   }

   return (
      <Paper className={classes.paper}>
         <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography className={classes.h6} variant="h6" textAlign="center">{currentId ? "Editting" : "Creating"} a Post </Typography>
            <TextField className={classes.title} name="title" variant="outlined" label="Title" value={postData.title} onChange={handleChange} />
            <TextField className={classes.tags} name="tags" variant="outlined" label="Tags (comma separated)" value={postData.tags}
               onChange={(e => setPostData({ ...postData, tags: e.target.value.split(',') }))} />
            <TextField className={classes.message} name="message" multiline variant="outlined" label="Message" fullWidth value={postData.message} onChange={handleChange} />
            <div className={classes.buttons}>
               <div className={classes.fileInput}>
                  <FileBase
                     type="file"
                     multiple={false}
                     onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                  />
               </div>
               <Button variant="contained" color="primary" size="small" type="submit">Submit</Button>
               <Button variant="outlined" color="error" size="small" onClick={clear}>Clear</Button>
            </div>
         </form>
      </Paper>
   );
}

export default Form;