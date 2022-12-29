import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
   return {
      root: {
         "& .MuiTextField-root": {
            margin: theme.spacing(1),
         },
      },
      paper: {
         padding: theme.spacing(2),
      },
      form: {
         display: "flex",
         flexWrap: "wrap",
         justifyContent: "space-between",
      },
      fileInput: {
         width: "97%",
         margin: "10px 0",
      },
      title: {
         width: '49%',
         margin: '0 !important'
      },
      tags: {
         width: '49%',
         margin: '0 !important'
      },
      message: {
         marginLeft: '0 !important',
         marginRight: '0 !important'
      },
      h6: {
         width: '100%'
      },
      buttons: {
         width: '100%',
         display: "flex",
         flexWrap: "wrap",
         justifyContent: "space-around"
      }
   };
});

export default useStyles;
