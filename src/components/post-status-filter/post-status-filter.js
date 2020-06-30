import React, { Component } from 'react';
import {Button} from 'reactstrap';

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'Всі'},
            {name: 'like', label: 'Вподобані'},
        ]
    }

    render() {
        const buttons = this.buttons.map(({name, label}) => {

            const {filter, onFilterSelect} = this.props
            
            const active = filter === name;
            const classActive = active ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button key={name}
                        type="button"
                        className={`btn ${classActive}`}
                        onClick={() => onFilterSelect(name)}
                        >{label}</button> 
            )
        })

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}
