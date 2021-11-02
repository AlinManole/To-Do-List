import React from "react";

class List extends React.Component {
    render(){

        console.log("props" , this.props)
        return(
            <>
            <h1>List</h1>
            <p>{this.props.tasks}</p>
            </>
        )
    }
}

export default List