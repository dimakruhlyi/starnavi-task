import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
    },
    listItem: {
        textAlign: 'center',
        maxWidth: '150px',
        height: '40px',
        margin: '10px auto',
        background: '#FBF8E3',
        borderRadius: theme.spacing(1)
    }
}));