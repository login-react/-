import  React from 'react';

export default  class ES6 extends React.Component {
/*
* `${}`这边是一个字符串扩展
* includs 判断字符串是否包含某些字符串
* startsWith 是以某个字符开头
* endsWith 是以某个字符结束的
* console.log(str.repeat(4)) 后面的数字是说要复制几次
* */

    constructor(props){
        super(props);
        this.state= {
            age: 12,
            name: 'xiaoqu'
        }
    }

    render(){
        let names = this.state.name;
        console.log(names)
        if(names.includes('x')){
            console.log('确实是有这个值');
        }
        if(names.startsWith('x')){
            console.log('确实是以这个开头的')
        }
        if(names.endsWith('u')){
            console.log('确实是以这个结束的')
        }
        {
            let str = 'a';
            console.log(str.repeat(4))
        }
        return(
            <div>
               `我叫${this.state.name},我的年龄是${this.state.age}`
            </div>
        );
    }
}
