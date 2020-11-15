import Modal from '../../componenets/UI/Modal/Modal'
import React from 'react'
import Auxiliary from '../Auxiliary'
import { Component } from 'react'

const withErrorHandler = (WrappedComponent,axios)=>{
    return class extends Component{
        state = {
            error:null
        }

        componentWillMount(){
            this.reqInterceptors = axios.interceptors.request.use(req=>{
                this.setState({error:null})
                return req
            })
            this.resInterceptors = axios.interceptors.response.use(res=>(res),error=>{
                this.setState({error:error})
            })
        }

        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptors)
            axios.interceptors.response.eject(this.resInterceptors)
        }

        errorConfirmedHandler = ()=>{
            this.setState({error:null})
        }

        render(){
            return (
                <Auxiliary>
                    <Modal modalClosed={this.errorConfirmedHandler} show={this.state.error}>
                        {this.state.error?this.state.error.message:null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Auxiliary>
            )
        }
    }
}

export default withErrorHandler