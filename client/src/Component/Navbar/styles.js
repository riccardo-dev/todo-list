import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
      margin: 0,
      backgroundColor: '#d97642'
    },
    navImg: {
      width: '150px',
      height: '30px',
      padding: 0,
      margin: '1rem',
      marginLeft: 0,
      marginRight: '1.5rem'
    },
    icon: {
      color: 'white'
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: 0
    },
    rigthList: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    brandLogo: {
      margin: '1rem 1rem 0 0'
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