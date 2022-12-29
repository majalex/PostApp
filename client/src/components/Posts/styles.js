import { makeStyles } from "tss-react/mui";


const useStyles = makeStyles()((theme) => {
   return {
    postsContainer: {
         display: 'flex',
         justifyContent: "space-between",
         alignItems: "stretch"
      },
     
   };
});

export default useStyles;