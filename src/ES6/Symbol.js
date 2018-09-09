import  React from 'react';

export default  class ES6 extends React.Component {

    /*
    * ES6新增了Symbol的原始类型
    *
    * */

    constructor(props){
        super(props);
        this.state= {
            age: 12,
            name: 'xiaoqu'
        }
    }

    render(){
        let str1 = String('Hello');
        let str2 = String('Hello');
        let str3 = Symbol('Hello');
        let str4 = Symbol('Hello');
        if(str1 == str2){
            console.log(str1,str2)
            // typeof 是什么类型
            console.log(typeof str2)

        }
        if(str3 == str4){
            alert(2)
        }else {
            console.log(str3===str4)
        }


        return(
            <div>
               12
            </div>
        );
    }
}
