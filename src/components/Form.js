import React from 'react'

class Form  extends React.Component {

    constructor(){
        super()

        this.state = {
            task: ""
        }
        this.handleTaskDescriptionChange = this.handleTaskDescriptionChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleTaskDescriptionChange(e){
      this.setState({task : e.target.value})
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.addTask(this.state.task)
        this.setState({task: ""})
      
    }

    render() {
        // console.log(this.state.task)
        return (
            <>
            <form className="form-inline d-flex justify-content-center  flex-row" onSubmit={this.handleSubmit}>
                <div className="form-group mx-3 w-25 mb-2">
                    <input type="text" className="form-control " id="inputPassword2" placeholder="Task..." onChange={this.handleTaskDescriptionChange} />
                </div>
                <button type="submit" className="btn btn-primary mb-2">+</button>
            </form>
            </>
        )
    }


}

export default Form