import React, { Component } from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.module.css'
const checkoutSummary = (props)=>{
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope that it tastes well</h1>
            {/* In this checkout summary component we will be having the burger with its ingredients and we can make final changes */}
            <div style={{width:'100%',margin:'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType="Danger" clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    )
}

export default checkoutSummary