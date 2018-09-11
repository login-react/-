--react生命周期

    componentWillMount 即将进入Dom

    componentDidMount 已经进入Dom

    componentWillUnmount 销毁时调用

--数据更新过程：
    componentWillReceiveProps  父组件render时候，子组件会调用
    shouldComponentUpdate  判断是否重新渲染
    componentWillUpdate  组件即将重新渲染


--ref的使用方式
this.refs.thisValue.value
--获取文本框的当前框
<input type="text" ref="thisValue"/>


https://www.cnblogs.com/leijuan/p/7633123.html
https://www.iqiyi.com/v_19rrcr2fn8.html#curid=1032368600_15c8790275614767b7b62a1242fefd03

--动态路由的设置
  在Route中:后面是什么，this.props.match.params.就是后面的名称

  <Route path="/video/:id"/>
  <Route path="/video/:name"/>


  组件接收参数： this.props.match.params.id
              this.props.match.params.name


class home extends Component {
  constructor(){
    super();
    list: ['10010','10086'];
  }
  render(){
    return(
      <div>
        {
          this.state.list.map((item) => {
            return <li>
                <Link to={`/detail/${item}`}{item}
              </li>
          })
        }
      </div>
    );
  }
}

--如何引入父元素中的节点
  {this.props.children}
  <Home>
    <p>I am children</p>
  </Home>

--子组件与父组件通信  回调函数
  --父
  expert default class App extends Component {

      constructor(){
        props();
      }

      --这边是子组件传过来的值的
      toAdd = () => {
        alert(age);
      }

      render(){
        return(
          <div>
            <Home grent={this.toAdd}/>
          </div>
        );
      }
  }

  expert default class Home extends Component {

      constructor(){
        props();
      }

      toAdd () => {
      --这边子组件给父组件  增加了一个参数，那么父组件也需要加一个参数
        this.props.grent(this.state.age)
      }

      render(){
        return(
          <div>
            <Button onClick={this.toAdd}></Button>
          </div>
        );
      }
  }

--组件的另一种写法
  import React,{Component} from 'react';
  const Head = (props) => {
    return (
    <div>
      <p>123</p>
    </div>
    );
  }

  export default Head


 --设置默认值  数据双向绑定
 -- 1 在子组件中有一个input
 --文本框修改的时候，不能是props只读的,而是要this.state
 --input有一个默认属性 defaultValue={this.props.zhi}
 --文本框修改数据
  handleSetData = (event) => {
    this.setState ({
      link: event.target.value
    })
  }

  <input type="text"
  value={this.state.initValue}
  onChange = {(event) => this.handleSetData(event)}
  />


 --2 在父组件中
  class App extends Component {
      constructor(props){
        super(props);
        this.state = {
          message: 'admin'
        }
      }

      <Home initValue={ this.state.message} />

  }

--对象简写
/**
 * Created by mac on 2018/9/12.
 */


import React from 'react';


export default class Object1 extends React.Component {
    render(){
        let username: 'namke';
        let obj = {
            username: 'names',
            getName(){
                return this.username
            }

        }
        let rel = obj.getName();
        console.log('--', rel)
        console.log('nnnnnnnnnnnnnnnnnnnnnn', obj.getName())
        console.log('nnnnnnnnnnnnnnnnnnnnnn', obj)
        return(

            <div>

            </div>
        );
    }
}


















