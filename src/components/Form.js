import React from 'react'


//The other way of writing this is function Form(){...}
const Form = ({ setInputText, todos, setTodos, inputText, setStatus}) => {
    const inputTextHandler = (e) => {
        //console.log(e)
        //to see the value entered in, it's e.target.value 
        setInputText(e.target.value)
        //if the above is just props, here it must be props.setInputText. But since you specified it as setInputText, no need here
    }

    const submitHandler = (e) => {
        e.preventDefault() //since everytime you click the button, it's refreshing the page
        setTodos([
            ...todos, {text: inputText, completed: false, id:Math.random()}
        ])
        //...todos means if you already have some todos in the list, pass it here also
        //the {} right after is for new todo, if it exist
        //so right now every time you click the button, it will call this function, which will set the todo list to have the old one, and the newly created one (that is still in the input box)
        //when viewing in the console, this will appear in the props section of Form every time you click the button
        //todos is technically a list (as declared inside the () of useState), so you will see a list form
        setInputText('') //this is to reset the input box to empty after adding a new todo. Must be combined with value attrs in the input below, since this is only doing the resetting but not affecting the UI
    }

    const statusHandler = (e) => {
        //console.log(e.target.value) //seeing this in the console will log the value that you choose (all, completed, uncomplete)
        setStatus(e.target.value) //set the current state of status
    }

    return (
        <>
        <form>
            <div className="row">
                <div className="col-lg-8 col-sm-6 text-center">
                    <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input fs-3 w-60" />
                    {/* everytime the input changes, the handler function will be called */}
                    <button onClick={submitHandler} className="todo-button fs-3 px-2" type="submit">
                        <i className="fas fa-plus-square"></i>
                    </button>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="select">
                        <select onChange={statusHandler} name="todos" className="filter-todo">
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="uncompleted">Uncompleted</option>
                        </select>
                    </div>
                </div>
            </div>
        </form>  
        </>
    )
}

export default Form
