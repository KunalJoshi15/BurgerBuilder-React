import React, { Component } from 'react'
import Auxiliary from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'
class OrderSummary extends Component{
    // This can be the functional compnent does not have to be a class based component 
    componentWillUpdate()
     {
         console.log('Order Summary [Will Update]')
     }
    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
    .map(igKey=>{
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]};
            </li>
        )
    });
        return (
            <Auxiliary>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients</p>
        <ul>
            {ingredientSummary}
        </ul>
    <p>{this.props.totalPrice}</p>
        <p>Continue to Checkout</p>
        <Button clicked={this.props.purchaseCancelled} btnType={"Danger"}>CANCEL</Button>
        <Button clicked={this.props.purchaseContinued} btnType={"Success"}>CONTINUE</Button>
    </Auxiliary>
        )
    }
}

export default OrderSummary;
