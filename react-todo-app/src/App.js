import React, { Component } from "react";
import TodoList from "./components/TodoList/TodoList";
import TodoHeader from "./Layouts/TodoHeader";
import "./App.css";
import Form from "./components/Form/Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      todos: [],
    };
    this.deleteItemHandler = this.deleteItemHandler.bind(this);
  }

  // Eğer input alanı boş değilse todos'a ekleye
  addItem = () => {
    // input'ta yazılı olan string değer
    const currentValue = this.state.userInput;

    if (this.state.userInput !== "") {
      const userInput = {
        // Delete yaparken kullanılabilmesi için bir her item için random bir id
        id: Math.random(),
        content: currentValue,
        isCompleted: false,
      };

      this.setState(
        {
          // Var olan array'i korumak için spread operatör kullanılıyor
          // spread operatör ile şu anki "todos" array elemanlarını alıyoruz ve yenisini ekliyoruz
          todos: [...this.state.todos, userInput],
        },
        () => {
          // Input'tan alınan değer state'e eklendikten sonra input'u temizliyoruz
          this.setState({
            userInput: "",
          });
        }
      );
    }
  };

  deleteItemHandler = (id) => {
    console.log(id);
    const newTodos = [...this.state.todos].filter((item) => item.id !== id);
    console.log(newTodos);
    console.log("deleteHandler");

    this.setState({ todos: newTodos });
  };

  changeStyleHandler = (id) => {
    const newTodos = [...this.state.todos];

    for (const todo of newTodos) {
      if (todo.id === id) {
        todo.isCompleted = true;
      }
    }
    this.setState({todos: newTodos})
    console.log(newTodos);
  };

  onInputChange = (e) => {
    const newVal = e.target.value;
    this.setState({
      userInput: newVal,
    });
  };

  render() {
    return (
      <div className="App">
        <TodoHeader />
        <Form
          userInput={this.state.userInput}
          onInputChange={this.onInputChange}
          addItem={this.addItem}
        />
        {this.state.todos.length > 0 && (
          <div className="list">
            <TodoList
              todos={this.state.todos}
              deleteHandler={this.deleteItemHandler}
              styleHandler={this.changeStyleHandler}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
