import React from "react";

class List extends React.Component {
    render(){

        console.log("props" , this.props)
        return(
            <div className="d-flex w-50 flex-column mx-auto" >
              {this.props.tasks.map((task, index) => (
                <div className="d-flex justify-content-between flex-row border rounded ">
                    <p className="text-center ps-2 pt-2">{task.description}</p>
                    <p className="text-center ms-auto m-2">{task.status}</p>
                    <button  onClick={this.deleteTask} className="btn  btn-danger">X</button>
                </div> 
              ))}
            </div>
        )
    }
}

export default List