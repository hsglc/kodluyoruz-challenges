import React, { Component } from "react";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";
import Form from "./components/Form/Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      todos: [],
    };
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

  onInputChange = (e) => {
    const newVal = e.target.value;
    this.setState({
      userInput: newVal,
    });
  };

  deleteItemFromListHandler = (id) => {
    const newTodoList = [...this.state.todos].filter((item) => item.id !== id);
    this.setState({ todos: newTodoList });
  };

  completeTodoHandler = (index) => {
    const newTodos = [...this.state.todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    this.setState({ todos: newTodos });
  };

  render() {
    return (
      <div className="App">
        <Form
          userInput={this.state.userInput}
          onInputChange={this.onInputChange}
          addItem={this.addItem}
        />
        {this.state.todos.length > 0 && (
          <div className="list">
            <TodoList
              todos={this.state.todos}
              onDelete={this.deleteItemFromListHandler}
              onComplete={this.completeTodoHandler}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
