import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'
import store from './store'

export class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        store.subscribe(this.storeChange)
    }

    componentDidMount() {
    }

    inputChange = (e) => {
        const action = {
            type: 'changeValue',
            value: e.target.value
        }

        store.dispatch(action)
    }

    storeChange = () => {
        this.setState(store.getState())
    }

    onAdd = () => {
        const action = {
            type: 'add'
        }

        store.dispatch(action)
    }

    onDel = (index) => {
        const action = {
            type: 'del',
            index
        }

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
