import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
   table: {
        marginTop: theme.spacing(3),
        borderCollapse: 'collapse'
   },
   td: {
       width: '3rem',
       height: '3rem',
       border: '1px solid grey',
       "&:hover": {
        backgroundColor: 'rgb(3,168,244)',
        cursor: 'pointer'
      }
   }
}));