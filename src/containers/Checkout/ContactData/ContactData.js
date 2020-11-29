import React,{ Component } from 'react'
import Button from '../../../componenets/UI/Button/Button'
import classes from './ContactData.module.css'
import axios from '../../../axios-order' 
import Spinner from '../../../componenets/UI/Spinner/Spinner'

class ContactData extends Component{
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode:''
        },
        loading: false
    }
    orderHandler = (event)=>{
        event.preventDefault();
        // console.log(this.props.price)
        this.setState({loading:true})
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer:{
                name: 'Kramnik',
                address:{
                    street:'South Dakota',
                    zipcode: '223322',
                    country: 'USA'
                },
                email:'abc@xyz.com'
            },
            deliveryMethod:'fastest'
        }
        console.log(order)
        axios.post('/orders.json',order)
        .then(response=>{
            this.setState({loading:false,purchasing:false})
        })
        .catch(error=>{
            this.setState({loading:false,purchasing:false})
        })
        this.props.history.push('/')
    }
    render()
    {
        let form = (<form>
            <input className={classes.input} type="text" name="name" placeholder="Your Name"/>
            <input className={classes.input} type="text" name="email" placeholder="Your Mail"/>
            <input className={classes.input} type="text" name="street" placeholder="Street"/>
            <input className={classes.input} type="text" name="postal" placeholder="Postal Code"/>
            <Button clicked={this.orderHandler} btnType="Success">ORDER</Button>
        </form>)
        if(this.state.loading)
        {
            form = <Spinner/>
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Data Here</h4>
                {form}
            </div>
        )
    }
}

export default ContactData