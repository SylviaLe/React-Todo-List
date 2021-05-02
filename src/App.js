import React, { useState, useEffect } from 'react'
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {


  //all the state are put in apps so that all the component can access it at some points
  const [inputText, setInputText] = useState(""); //the actual value and update func. This is for the text in the input field
  const [todos, setTodos] = useState([])  //this is for the actual task itself
  const [status, setStatus] = useState('all')  //this is for filtering the todos. Just too change the appearance and globalize the state of the filter, not actually do the filtering job. The default is all. This is passed to Form
  const [filterTodos, setFilterTodos] = useState([]) //our plan now: when you choose the option Complete, the state of status is now 'completed'. The completed task in todos should be added to filterTodos
  //the reason we have todos and filterTodos, is because when filtering, we don't want to get rid of the other status todos


  //useEffect
  //RUN ONCE
  useEffect(() => {
    getLocalTodos()
  }, [])


  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [todos, status]) //HOW IT WORKS: every time the things inside the array (2nd argument) change, the arrow function (the 1st argument) will be run. If the array has nothing, the function will be run once at the start of the app
  //check again now, every time you change something the array of filterTodos states will be updated
  //at this point, if you haven't update TodoList from todo to filterTodos, the UI not going to render. The UI is going to change base on state. But the todos is unchanged.
  //TOGGLE vs UI+STATE: toggle is used when you want to change the appearance base on an attrs of an element; the appearance change but the appearance is still there. UI+STATE is used when you want to make sth disappear entirely fro the UI

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilterTodos(todos.filter(todo => todo.completed === true))
        break

      case 'uncompleted':
        setFilterTodos(todos.filter(todo => todo.completed === false))
        break

      default:
        setFilterTodos(todos) //since you want to show all, not filter anymore
        break 
    }
  }
  //for now, just with the switch, the state of filterTodos does not change, since you haven't linked it anywhere (like onClick or onChange). We want to update when a new todo is added, or every time the select is clicked. We will do this using  useEffect


  //save to local
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos)) //push the new thing to the local storage
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]))
      //if the local storage couldn't find the todos, then set it to the current todos state, 
    }
    else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      //if the local storage can find it, then get it, save it, and set the local variable to equal to it
      //https://www.w3schools.com/js/js_let.asp
      setTodos(todoLocal)
    }
  }



  return (
    <div className="App container w-50">
      <header>
        <h1 className="fw-normal fs-1 text-center text-light py-5">Sylvia's Tasks</h1>
        {/* since you have your state, you can use it anywhere in your app. For example, in h1 you set Sylvia's Task {inputText}, the thing you type in the input field will appear after the word Task */}
      </header>

      <Form todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText} setStatus={setStatus}/>
      {/* The setInputText function is passed to Form component as a prop. This prop also name setInputText (it can be anything you want) */}
      {/* we don't pass status here but only setStatus, since we are only changing it */}
      
      <TodoList todos={todos} setTodos={setTodos} filterTodos={filterTodos}/>
      {/* the filterTodos is passed in so that only the todos that match the category is display */}
    </div>
  );
}

export default App;
