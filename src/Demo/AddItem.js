import React from 'react';

export default class AddItem extends React.Component {

    constructor(){
        super();
        this.state ={
            age: 88
        }
    }

    handleDelete = (index) => {
        this.props.delete(this.props.index);
    }

    // 子组件传值给父组件是需要用回调函数
    // this.props.grent调用的是父组件函数名
    handleGrent = (age) => {
        this.props.grent(this.state.age)
    }

    render() {
        return (
            <div
                onClick={this.handleDelete}>
                {this.props.content}
                <input type="button" value="这是一个测试" onClick={() => this.props.sendDataForm('aa')}/>
                <div>
                    <button onClick={this.handleGrent}>test</button>
                </div>
            </div>
        );
    }
}