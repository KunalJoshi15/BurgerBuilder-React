import React, { Component } from 'react'
import CheckoutSummary from '../../componenets/Order/CheckoutSummary/CheckoutSummary'
import { Route } from 'react-router-dom'
import ContactData from './ContactData/ContactData'
class Checkout extends Component{
    state = {
        ingredients: {
            salad: 1,
            bacon:1,
            cheese:1,
            meat:1
        },
        totalPrice:null
    }
    componentWillMount(){
        const query = new URLSearchParams(this.props.location.search)
        // console.log(this.props)
        const ingredients = {
        }
        let price=0;
        for(let params of query.entries())
        {
            if(params[0]==='match')
            {
                price = params[1]
            }
            else{
                ingredients[params[0]] = +params[1]
            }
        }
        this.setState({ingredients:ingredients,totalPrice:price})
    }
    checkoutCancelledHandler=()=>{
        // console.log()
        this.props.history.goBack()
        // This particular function is used to go back to the last route which is on the stack.
    }
    checkoutContinuedHandler=()=>
    {
        // alert("AS")
        this.props.history.replace('/checkout/contact-data/');
    }

    render(){
        return (
            <div>
                <CheckoutSummary checkoutCancelled={this.checkoutCancelledHandler} checkoutContinued={this.checkoutContinuedHandler} ingredients={this.state.ingredients}/>
                <Route path={this.props.match.path+'/contact-data'} render={(props)=>(<ContactData {...props} ingredients={this.state.ingredients} price={this.state.totalPrice}/>)}/>
            </div>
        )
    }
}

export default Checkout