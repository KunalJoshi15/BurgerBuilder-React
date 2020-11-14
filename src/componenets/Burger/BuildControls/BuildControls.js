import React from 'react'
import classes from './BuildControl.module.css'
import BuildControl from './BuildControl/BuildControl'

const buildControls = (props)=>{
    const controls = [
        {label:'salad',type: 'salad'},
        {label:'Bacon',type: 'bacon'},
        {label:'Cheese',type: 'cheese'},
        {label:'Meat',type: 'meat'}
    ]
    return (<div className={classes.BuildControls}>
        <p>Total Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map((ctrl)=>(
            <BuildControl disabled={props.disabled[ctrl.type]} removed={()=>(props.ingredientRemoved(ctrl.type))} added={()=>(props.ingredientAdded(ctrl.type))} key={ctrl.label} label={ctrl.label} type={ctrl.type}/>
        ))}
        <button className={classes.OrderButton} onClick={props.ordered} disabled={!props.purchase}>Order Now</button>
        {/* This is now working */}
    </div>);
}

export default buildControls;