import React, { Component } from 'react'

export class item extends Component {
    render() {
        return (
            <div className='item'>
                <img src={this.props.item.img} alt="" onClick={() => this.props.onShowFullItem(this.props.item)} />
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.desc}</p>
                <strong>{this.props.item.price}$</strong>
                <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
            </div>
        )
    }
}

export default item