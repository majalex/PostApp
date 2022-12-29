import { makeStyles } from "tss-react/mui";
import { lightBlue } from '@mui/material/colors';

const useStyles = makeStyles()((theme) => {
   return {
      appBar: {
         borderRadius: 15,
         margin: '30px 0',
         display: 'flex',
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems: 'center',
         padding: '10px 50px',
         [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
         },
         background: "#0466c8",
         color: "#ffffff"
      },
      image: {
         marginLeft: '10px',
         marginTop: '5px',
      },
      toolbar: {
         display: 'flex',
         justifyContent: 'flex-end',
         width: '400px',
         [theme.breakpoints.down('sm')]: {
            width: 'auto',
         },
      },
      profile: {
         display: 'flex',
         justifyContent: 'space-evenly',
         width: '400px',
         alignItems: 'center'
      },
      logout: {
         marginLeft: '20px',
      },
      userName: {
         display: 'flex',
         alignItems: 'center',
         textAlign: 'center',
      },
      brandContainer: {
         display: 'flex',
         alignItems: 'center',
      },
      purple: {
         scrollSnapMarginRight:'10px',
         backgroundColor: lightBlue[600],
         textAlign: 'center'
      }
   };
});

export default useStyles;