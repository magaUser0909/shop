import React, { Component } from 'react'

export class ShowFullItem extends Component {
    render() {
        return (
            <div className='full-item'>
                <div>
                    <div className='close-icon' onClick={() => this.props.onCloseModalWindow()}><i class="bi bi-x-circle"></i></div>
                    <img src={this.props.item.img} alt="" onClick={() => this.props.onShowFullItem(this.props.item)} />
                    <h2>{this.props.item.title}</h2>
                    <p>{this.props.item.desc}</p>
                    <strong>{this.props.item.price}$</strong>
                    <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
                </div>
            </div>
        )
    }
}

export default ShowFullItem