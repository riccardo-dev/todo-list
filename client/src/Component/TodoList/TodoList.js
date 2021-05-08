import axios from 'axios';
import React, {useState, useEffect} from 'react';
import useStyle from './styles';
import {CheckBoxOutlineBlankOutlined, DeleteOutlineOutlined, CheckBoxOutlined} from '@material-ui/icons';
import {IconButton, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const initialStateUser = JSON.parse(sessionStorage.getItem('userLogged'));

export const TodoList = () => {
    const classes = useStyle();
    const [user, setUser] = useState(initialStateUser);
    const [newTodo, setNewTodo] = useState('');
    const [userTodos, setUserTodos] = useState([]);

    useEffect(() => {
        getUserTodos();
    }, [user])

      //method to get all todos
      const getUserTodos = async() => {
        try {
            const response = await axios.get('/todos')
            let listAllTodos = response.data;
            let listUserTodos = listAllTodos.filter(item => item.userId === user._id);
            setUserTodos(listUserTodos);
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

     //method to create a new todo of the current user
     const handleAddTodo = async(e) => {
        e.preventDefault();
        let userId = user._id;
        //preparing the object to send at the server
        const todo = {
            task: newTodo,
            userId: userId
        }
        try {
            await axios.post('/todos', todo)
            .then(res => {
                let todo = res.data;
                setUserTodos([...userTodos, todo]);
            });
            setNewTodo('');
        } catch (error) {
            console.log(error.message);
        }
    }

    // method to delete todo
    const deleteTodo = async(todoId) => {
        try {
            await axios.delete(`/todos/${todoId}`);
        } catch (error) {
            console.log(`Error: ${error.message}`); 
        }
        let newTodoList = userTodos.filter(item => item._id !== todoId);
        setUserTodos(newTodoList);
    }


    //method to set the State of todo
    const setStateCompleted = async(todoId) => {
        const newListTodo = [...userTodos];
        const selectedTodo = newListTodo.find(item => item._id === todoId);
        const updateeTodoState = {
            completed: !selectedTodo.completed
        };
        selectedTodo.completed = updateeTodoState.completed;
        setUserTodos(newListTodo);
        await axios.put(`/todos/${todoId}`, updateeTodoState)
        .then(res => {
            console.log(res.data.todo);
        })
        .catch(err => console.log(err));
    }

    return (
        <>
            <form className={classes.input_group} onSubmit={handleAddTodo}>
                <TextField
                    id="todo"
                    label="Insert Todo"
                    variant="outlined"
                    color="secondary"
                    onChange={(e) => setNewTodo(e.target.value)}
                    value={newTodo}
                    fullWidth
                    className={classes.input_todo}
                />
                <Button type="submit" variant="contained" color="secondary">
                    ADD
                </Button>
            </form>
            <ul className={classes.listTodo}>    
                {userTodos && userTodos.map(todo =>
                    <div className={classes.todoContainer} key={todo._id} >
                        <IconButton className={classes.iconButon} onClick={() => setStateCompleted(todo._id)}>
                            {
                                !todo.completed ? 
                                <CheckBoxOutlineBlankOutlined/> :
                                <CheckBoxOutlined/>
                            }
                        </IconButton>
                        <div className={classes.todoItem}>
                            <li>
                                <p>{todo.task}</p>
                            </li>
                        </div>
                        <div className={classes.deleteContent}>
                            <button onClick={() => deleteTodo(todo._id)} className={classes.btnDelete}>
                                <DeleteOutlineOutlined className={classes.deleteIcon}/>
                            </button>
                        </div>
                    </div>  
                )}
            </ul>
           
        
        </>
    )
}
