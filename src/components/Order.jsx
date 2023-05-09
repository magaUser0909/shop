import React, { Component } from 'react'

export class order extends Component {
    render() {
        return (
            <div className='item' key={this.props.item.id}>
                <img src={this.props.item.img} alt="" />
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.price}$</p>
                <div className="delete-icon" onClick={() => this.props.onDelete(this.props.item.id)}><i className="bi bi-archive-fill"></i></div>
            </div>
        )
    }
}

export default order