import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    main: {
        display: 'flex',
        flexDirection: 'column',
        minWidth:'70%',
        maxWidth:'80%',
        margin:'4rem auto',
        border: '1px solid black',
        padding: '1.5rem',
        borderRadius: '2rem',
        boxShadow: '5px 5px 5px #d97642',
        [theme.breakpoints.up('lg')]:{
            minWidth: '65%'
        },
    },
    title: {
        margin:'2rem auto'
    }

}))