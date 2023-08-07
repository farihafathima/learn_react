import React, { Component } from 'react'
import { ChildComponent } from './ChildComponent'

export class ParentComponent extends Component {
    render() {
        const parentName='Parent'
        const greetHandler=child=>alert(`Hello ${parentName} from ${child}`)
        return (
            <div>
                <ChildComponent greetHandler={greetHandler}/>
            </div>
        )
    }
}

export default ParentComponent
