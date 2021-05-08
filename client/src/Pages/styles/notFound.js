import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    notFound: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '10rem 0',
        padding: '1rem'
    },
    text : {
        fontSize: '3rem',
        fontFamily: 'Yanone Kaffeesatz, sans-serif'
    },
    a:{
       textDecoration: 'none',
       color: 'black',
       '&:hover':{
           fontSize: '3.5rem',
           color: '#ce1212'  
       }
    }
}))