import React, { useState } from "react";
// import "./styles.css";

import {
  useBasket,
  useDocumentTitle,
  useProduct,
  useRecommendedProducts,
  useScrollTop
} from 'hooks';

import { Link, useParams } from 'react-router-dom';



const Ingredients = () => {
  const [messageList, setMessageList] = useState(["Milk", "Sugar", "Butter"]);
  // console.log(messageList)





  const addTodo = (message) => {
    setMessageList([...messageList, message]);
  };

  const deleteTodo = (message) => {
    let deleteMessageIndex = messageList.indexOf(message);
    setMessageList([
      ...messageList.slice(0, deleteMessageIndex),
      ...messageList.slice(deleteMessageIndex + 1)
    ]);
  };

  return (
    <div className="app-in">
      <TodoHeader />
      <TodoForm addTodo={addTodo} /> <br /> {/* Why */}
      <TodoList messageList={messageList} deleteTodo={deleteTodo} />
      <Footer />
    </div>
  );
};




const TodoHeader = () => {
  
  const { id } = useParams();
  const { product, isLoading, error } = useProduct(id);




  return (

    <div className="header-in">



      {/* simple example for handling the state */}

      <h1 className="margin-top-0">{product?.name}</h1>
      <span className="text-subtle">{product?.brand}</span>





      <h2>Todo List</h2>
    </div>

  )


};



const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const changeHandler = (event) => {
    setInput(event.target.value);
  };

  const submitHandler = (event) => {
    addTodo(input);
    setInput("");
  };

  return (
    <div className="form-in">
      <input
        className="form__input-in"
        type="text"
        value={input}
        onChange={changeHandler}
      />
      <button className="form__submit-in" onClick={submitHandler}>
        Add Ingredients
      </button>
    </div>
  );
};

const TodoList = ({ messageList, deleteTodo }) => (
  <ol className="todolist-in">
    {messageList.map((message, index) => (
      <Todo message={message} deleteTodo={deleteTodo} key={index} />
    ))}
  </ol>
);

const Todo = ({ message, deleteTodo }) => {
  const handleSubmit = (event) => {
    deleteTodo(message);
  };

  return (
    <li className="todo-in">
      <span className="todo__label-in">{message + "  "}</span>
      <button className="todo__delete-in" onClick={handleSubmit}>
        Delete
      </button>
    </li>
  );
};

const Footer = () => (
  <div className="footer-in">
    {/* <a
      href="http://github.com/meethari"
      target="_blank"
      rel="noopener noreferrer"
    >
      Github: meethari
    </a> */}
  </div>
);

export default Ingredients;