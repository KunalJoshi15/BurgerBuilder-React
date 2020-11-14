import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'


const burger = (props)=>{
    let trasformedIngredients = Object.keys(props.ingredients)
    // console.log(trasformedIngredients);
    .map(igKey=>{
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
            return <BurgerIngredient key={igKey+i} type={igKey}/>
        });
    })
    .reduce((arr,el)=>{
        // console.log(el);
        return arr.concat(el);
    },[])
    
    // console.log(trasformedIngredients);
    if(trasformedIngredients.length===0)
    {
        trasformedIngredients = <p>Please start adding the ingredient.</p>;
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {trasformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}
// That value is being passed to the main location from where it can be accessed.
/*If a aparticular array is empty then we need to change the logic. */
export default burger;