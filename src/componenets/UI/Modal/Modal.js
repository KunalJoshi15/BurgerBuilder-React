import React,{ Component } from 'react'
import classes from './Modal.module.css'
import Auxiliary from '../../../hoc/Auxiliary'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component{
    shouldComponentUpdate(nextProps,nextState)
    {
        // Using this we have stopped the unnecessary rendering of the functions.
        return nextProps.show!==this.props.show;
    }

    componentWillUpdate(){
        console.log('[Modal] Will Update')
    }
    render()
    {
        return (
            <Auxiliary>
                {/* When this needs to be shown needs to be checked the modalClosed function will be  */}
    <Backdrop clicked={this.props.modalClosed} show={this.props.show}/>
    <div className={classes.Modal}
        style={{
            transform: this.props.show?'translateY(0)':'translateY(-100vh)',
            opacity: this.props.show?'1':'0'
        }}
    >
        {this.props.children}
    </div>
    </Auxiliary>
        )
    }
}

export default Modal;