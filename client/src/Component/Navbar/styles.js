import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
      margin: 0,
      backgroundColor: '#d97642'
    },
    navImg: {
      width: '150px',
      padding: 0,
      margin: 0
    },
    icon: {
      color: 'white'
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: 0
    },
    linkText: {
      textDecoration: 'none',
      textTransform: 'uppercase',
      color: 'white',
      margin: 0
    },
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
}));