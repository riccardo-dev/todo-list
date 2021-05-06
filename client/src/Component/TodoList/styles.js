import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    input_group: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    listTodo: {
        margin: '1rem 0',
        padding: 0,
        width: '100%'
    },
    todoItem : {
        listStyle: 'none',
        width: '100%'
    },
    todoContainer: {
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center'
    },
    iconButon: {
        padding: '1rem'
    },
    deleteIcon: {
        padding: '1rem',
    },
    deleteContent: {
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-end'
    },
    btnDelete: {
        background: 'none',
        border: 'none',
        cursor: 'pointer'
    }
}))