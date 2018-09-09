import React from 'react';
import PropTypes from 'prop-types';

export default class Record extends React.Component {

    render(){
        return(
            // <tr key={this.props.record.id}>
            //   <td>{this.props.record.data}</td>
            //   <td>{this.props.record.title}</td>
            //   <td>{this.props.record.amount}</td>
            // </tr>

            <tr key={this.props.id}>
            <td>{this.props.data}</td>
            <td>{this.props.title}</td>
            <td>{this.props.amount}</td>
            </tr>
        );
    }
}

Record.propTypes={
    id:PropTypes.number,
    data:PropTypes.string,
    title:PropTypes.string,
    amount:PropTypes.number
}