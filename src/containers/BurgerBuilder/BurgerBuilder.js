import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../componenets/Burger/Burger'
import BuildControls from '../../componenets/Burger/BuildControls/BuildControls'
import Modal from '../../componenets/UI/Modal/Modal'
import OrderSummary from '../../componenets/Burger/OrderSummary/OrderSummary'

const INGREDIENT_COUNT = {
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}

class BurgerBuilder extends Component {
    
    state = {
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:0,
        purchaseable: false,
        purchasing: false
    };

    addIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngredients = {
            ...this.state.ingredients
        }

        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_COUNT[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice+priceAddition;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount-1;
        if(oldCount<0)
        {
            return;
        }
        const updatedIngredients = {
            ...this.state.ingredients
        }

        updatedIngredients[type] = updatedCount;
        const priceReduction = INGREDIENT_COUNT[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice-priceReduction;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    updatePurchaseState = (ingredients)=>{
        
        const sum = Object.keys(ingredients)
        .map(igKey=>{
            return ingredients[igKey]
        })
        .reduce((sum,el)=>{
            return sum+el;
        },0)
        // console.log(sum);
        this.setState({purchaseable: sum>0});
    }

    purchaseHandler=()=>{
        this.setState({purchasing:true});
        // This function is called when the order now button is clicked and then.
    }

    purchaseCancelHandler = ()=>{
        this.setState({purchasing:false});
    }
    purchaseContinueHandler = ()=>{
        alert('You Continue');
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };


        for(let key in disabledInfo)
        {
            disabledInfo[key] = disabledInfo[key]<=0;
        }
        return (
            <Auxiliary> 
                <Modal modalClosed={this.purchaseCancelHandler} show={this.state.purchasing}>
                    <OrderSummary totalPrice={this.state.totalPrice.toFixed(2)} purchaseContinued={this.purchaseContinueHandler} purchaseCancelled={this.purchaseCancelHandler} ingredients={this.state.ingredients}/>
                </Modal>
                <div>
                    <Burger ingredients={this.state.ingredients}/>
                </div>
                <div>
                    <BuildControls
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabled={disabledInfo}
                    ordered={this.purchaseHandler}
                    purchase={this.state.purchaseable}
                    price={this.state.totalPrice}/>
                </div>
            </Auxiliary>
        )
    }
}

export default BurgerBuilder
