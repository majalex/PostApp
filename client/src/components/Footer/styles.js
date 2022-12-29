import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
   return {
      appBar: {
         borderRadius: 15,
         position: 'absolute',
         bottom: '0',
         width: '100%',
         display: 'flex',
         flexDirection: 'row',
         justifyContent: 'center',
         alignItems: 'center',
         padding: '10px 50px',
         [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
         },
         background: "#0466c8",
         color: "#ffffff",
         height: '50px',
      },
      link: {
         textDecoration: "none",
         color: "white",
      }
   };
});

export default useStyles;