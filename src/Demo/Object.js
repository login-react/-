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