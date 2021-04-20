import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#d97642',
  },
  form: {
    width: '50%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#d97642',
    '&:hover': {
      backgroundColor: '#c15050'

    }

  },
  singUp: {
    alignContent: 'center'
  },
}))