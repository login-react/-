import React from 'react';

export default class JG extends React.Component {
    /**
     * 解构
     *    一.数组赋值
     * @param props
     */

    constructor(props) {
        super(props);
    }

    render() {
        // 数组赋值
        let [a, b, c] = [10, 20, 30];
        console.log('解构', a, b, c);

        let [x, y, ...other] = [1, 2, 3, 4, 5];
        console.log(x, y, other)
        return (
            <div>
                dfsdfsdf
            </div>
        );
    }
}
