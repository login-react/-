import React from 'react';


export default class RecordsForm extends React.Component {

    constructor(props){
        super(props);
        this.state={
            date:'',
            title:'',
            amount:''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        let name,obj;
        name = event.target.name;
        alert(name);
        this.setState((
            obj={},
            obj[""+name]=event.target.value,
            obj
        ))
     }


    valid = () => {
        return this.state.data && this.state.title && this.state.amount;
    }

    render(){
        return(
            <form className="form-inline">
                <div className="from-group">
                    <input type="text" onChange={this.handleChange} className="form-control" placeholder="Data" name="data" value={this.state.data}/>
                </div>
                <div className="from-group">
                    <input type="text" onChange={this.handleChange} className="form-control" placeholder="Title" name="title" value={this.state.title}/>
                </div>
                <div className="from-group">
                    <input type="text" onChange={this.handleChange} className="form-control" placeholder="Amount" name="amount" value={this.state.amount}/>
                </div>
                <div className="from-group">
                    <button className="btn btn-primary"  disabled={!this.valid()}>Create</button>
                </div>
            </form>
        );
    }
}
