import React from 'react'

const Todo = ({ text, todos, setTodos, todo }) => {
    //todos and setTodos is import so that we can update the state of it.
    //this is pass all the way down from Apps, to TodoList, then here, Todod

    //delete a task
    const deleteHandler = () => {
        //console.log(todo) //so every time you click the trash btn, it will log the current todo list you are on.
        setTodos(todos.filter(el => el.id !== todo.id))
        //loop through each of the todo, check if its id equal the id of the todo that call the function. if not equal, stay, if does, get rid of it
        //this need to be combined with todo={todo} in TodoList, else it doesn;t know what the hell is todo
    }

    const completeHandler = () => {
        //console.log(todo) //so every time you click the trash btn, it will log the current todo list you are on.
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                    //checking if the id of the item is indeed the one we clicked on, return. In return, keep every attrs of the current item the same, but flip the state of completed
                }
            }
            return item;
            //if not match then return whatever the item was
        }))
        //loop through each of the todo, check if its id equal the id of the todo that call the function. if not equal, stay, if does, get rid of it
        //this need to be combined with todo={todo} in TodoList, else it doesn;t know what the hell is todo
    }

    return (
        <div className='todo m-1 bg-light fs-5 d-flex justify-content-between align-items-center'>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            {/* Turn the className into JS code. Then check with the $ (a little like jQuery now). If todo.completed is true, toggle the class completed. Else, add nothing */}
            <button className="complete-btn" onClick={completeHandler}><i className="fas fa-check"></i></button>
            <button className="trash-btn" onClick={deleteHandler}><i className="fas fa-trash"></i></button>
        </div>
    )
}

export default Todo
