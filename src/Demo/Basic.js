import React from "react";
import add from './Add';
import './Basic.css';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: 1,
            fontSize: "15px",
            color: "red",
            checked: 1,
            display_name: 'block'
        };
    }

    componentWillMount = () => {
        // alert(2);张三  全文搜索  shift+commit+f 格式化代码 option+command+l
    };

    componentDidMount = event => {
        const _self = this;
        window.setTimeout(function () {
            _self.setState({
                color: 'green'
            });
        }, 1000)
    };

    handleClick = (event) => {
        if (this.state.display_name === 'none') {
            this.setState({
                display_name: 'block',
            });
        } else if (this.state.display_name === 'block') {
            this.setState({
                display_name: 'none',
            });
        }
    }


    render() {
        return (
            <div
                style={{
                    opacity: this.state.opacity,
                    fontSize: this.state.fontSize,
                    color: this.state.color
                }}
            >
                HelloWorlds
                <br/>
                <input onClick={ this.handleClick.bind(this)} style={{border: '1px solid grey'}} type="button"
                       value="显示与隐藏"></input>
                <span style={{display: this.state.display_name}}>测试内容</span>
                <div>
                    <add/>
                </div>
            </div>
        );
    }
}



