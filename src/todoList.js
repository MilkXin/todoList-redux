import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'
import store from './store'
import { inputChangeAction, addAction, delAction } from './store/actionCreators'

export class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        store.subscribe(this.storeChange)
    }

    componentDidMount() {
    }

    storeChange = () => {
        this.setState(store.getState())
    }

    inputChange = (e) => {
        const action = inputChangeAction(e.target.value)
        store.dispatch(action)
    }
    
    onAdd = () => {
        const action = addAction()
        store.dispatch(action)
    }

    onDel = (index) => {
        const action = delAction(index)
        store.dispatch(action)
    }

    render() {
        const { inputValue, list } = this.state
        return (
            <div>
                <Input style={{ width: '250px' }} value={inputValue} onChange={this.inputChange} />
                <Button type="primary" onClick={this.onAdd}>增加</Button>
                <List
                    bordered
                    dataSource={list}
                    renderItem={(item, index) => (<List.Item onDoubleClick={() => this.onDel(index)}>{item}</List.Item>)}
                />
            </div>
        )
    }
}

export default TodoList
