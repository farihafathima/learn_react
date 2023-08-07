import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[]
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            this.setState({posts:response.data})
            console.log(response.data)
           })
        .catch(error=>console.log(error))
    }
    
    render() {
        return (
            <div>
                {this.state.posts.length!==0?
                this.state.posts.map(ele=><div key={this.state.posts.id}>{ele.title}</div>)
                :null}
                
                </div>
        )
    }
}

export default PostList
