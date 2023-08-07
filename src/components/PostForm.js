import React, { Component } from 'react'
import axios from 'axios'

 class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id:'',
             body:'',
             title:''
        }
    }
     onSubmitHandler=(e)=>{
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts',this.sate)
        .then(response=>console.log(response))
        .catch(error=>console.log(error))
    }
     onChangeHandler=(e)=>
     {
        this.setState({[e.target.name]:e.target.value})
     }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <input type='text' value={this.state.id}
                    onChange={this.onChangeHandler} name='id'/>
                    <input type='text' value={this.state.body}
                     onChange={this.onChangeHandler} name='body'/>
                    <input type='text' value={this.state.title}
                     onChange={this.onChangeHandler} name='title'/>
                </form>
                
            </div>
        )
    }
}

export default PostForm
