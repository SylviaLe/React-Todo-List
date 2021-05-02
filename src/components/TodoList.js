import React from 'react'
import Todo from "./Todo"

//this is a parent component. a child will be called here, since the todo will have its own styling
const TodoList = ({ todos, setTodos, filterTodos }) => {
    //the reason we're using filterTodos for mapping but still iport todos and setTodos here, because it's used in Todo components
    //in Todo component, we need todos and setTodos to update the state of the todo. This update should be made on the todos state, not filterTodos, since it's the big database
    
    return (
        <div>
            <div className="container w-70 my-5">
                <ul className="todo-list">
                    {filterTodos.map(todo => (
                        <Todo todo={todo} text={todo.text} key={todo.id} todos={todos} setTodos={setTodos}/>
                    ))}
                    {/* with map, the arrow function goes with () */}
                </ul>
            </div>
        </div>
    )
}

export default TodoList
