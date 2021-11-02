import React from "react"
import Form from "./components/Form"
import 'bootstrap/dist/css/bootstrap.min.css';

import List from "./components/List"

class App extends React.Component {
    constructor(){

      
      super()
      this.state = {
        tasks: []
      }
      this.addTask = this.addTask.bind(this)
    }

    addTask(str){
      let val = {description: str, status: "To do" }
        this.setState({tasks: [ val , ...this.state.tasks]})
        console.log(this.state.tasks)
    }

    

  render(){
    return(
      <>
      <h1 className="text-center p-5">To Do List</h1>
      <Form addTask={this.addTask}/>
      <List tasks={this.state.tasks} />
      </>
    )
  }
}

export default App