import React from 'react';
import AddItem from './AddItem';
export default  class add extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lists: [],
            InputValue: '',
            message: 'Hello World'
        }

        this.sendDataForm = this.sendDataForm.bind(this);
    }

    handleClick = () => {
        console.log(...this.state.lists);
        this.setState({
            lists: [...this.state.lists, this.state.InputValue],
            InputValue: ''
        });
    }

    handleInputChange = (e) => {
        this.setState({
            InputValue: e.target.value,
        });
    }


    handleDetlre = (index)=> {
        const list = [...this.state.lists];
        list.splice(index, 1);
        this.setState({
            lists: list
        });
    }

    //子组件传到父组件中
    sendDataForm = (value) => {
        this.setState({
            message: value
        })
    }
    /*
    * 子组件里面有一个参数是age,既然是子组件传过来的值，子组件有一个参数，那么父组件也是有一个参数的
    * 现在:
    * */
    handleGrent = (age) => {
        alert(age);
    }

    render() {
        return (
            <div>
                <input value={this.state.InputValue} onChange={this.handleInputChange.bind(this)}/>
                <input onClick={ this.handleClick.bind(this)}
                       style={{border: '1px solid grey'}}
                       type="button"
                       value="显示与隐藏"></input>
                /*
                * <ul>
                 <h1>{this.state.message}</h1>
                 {
                 this.state.lists.map((item, index) => {
                 return <AddItem
                 sendDataForm={this.sendDataForm}
                 delete={this.handleDetlre.bind(this)}
                 grent = { this.handleGrent}
                 key={index}
                 content={item}
                 index={index}/>
                 })
                 }
                 </ul>
                *
                * */
                <AddItem
                    sendDataForm={this.sendDataForm}
                    delete={this.handleDetlre.bind(this)}
                    grent = { this.handleGrent}/>
            </div>
        );
    }
}
