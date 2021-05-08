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
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
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
    menuButton:{
      margin: 0
    },
}));