import React from 'react';
import classes from './BuildControl.module.css'

const buildControl = (props)=>(
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button onClick={props.removed} className={classes.Less} disabled={props.disabled}>Less</button>
        <button onClick={props.added} className={classes.More}>More</button>
    </div>
);
// This will add the add property to the function itself.
// Add the logic to remove the ingredients.
export default buildControl;