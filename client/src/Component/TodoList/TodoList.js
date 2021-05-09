import React, { useState, useEffect } from 'react';
import axios from 'axios';
//styles
import style from './todo.module.scss';

//icons
import {RiCheckboxBlankCircleLine, RiCheckboxCircleFill} from 'react-icons/ri';
import { BsTrash } from 'react-icons/bs';

const initialStateUser = JSON.parse(sessionStorage.getItem('userLogged'));

const TodoList = () => {
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
      <div className={style.todoContainer}>
          <form onSubmit={handleAddTodo}>
            <div className="input-group mb-3">
              <input 
                type="text"
                className="form-control bg-secondary" 
                placeholder="Insert Your Todo"
                aria-label="input_todo" 
                aria-describedby="input_todo"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
              />
              <button className={`btn btn-primary ${style.btnAdd}`} type="submit" id="add_todo">ADD</button>
            </div>
          </form>
          <ul className={style.listTodo}>
            {userTodos && userTodos.map(todo => 
                  <div className={style.listItem} key={todo._id} >
                    <span className={style.iconBtn} onClick={() => setStateCompleted(todo._id)}>
                      {
                        !todo.completed ? 
                        <RiCheckboxBlankCircleLine/> 
                        :
                        <RiCheckboxCircleFill/>
                      }
                    </span>
                    <div className={style.todoItem}>
                      <li className={style.todoTask}>
                        <h4 className="m-0">{todo.task}</h4>
                      </li>
                    </div> 
                    <div>
                        <span className={style.iconBtn} onClick={() => deleteTodo(todo._id)}>
                          <BsTrash/>
                        </span>
                    </div>
                  </div>
                )
            }
          </ul>
      </div>
  )
}

export default TodoList;
