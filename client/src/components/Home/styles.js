import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      paddingBottom: '100px',
    },
    formGrid: {
      marginBottom: '20px',
    },
  };
});

export default useStyles;
