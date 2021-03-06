import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import styles from './Layout.module.css'
import Toolbar from '../../componenets/Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component{
    state={
        showSideDrawer: false
    }
    sideDrawerClosedHandler = ()=>{
        this.setState({showSideDrawer:false});
    }
    sideDrawerToggleHandler = ()=>{
        this.setState((prevState)=>{
            return {showSideDrawer:!prevState.showSideDrawer};
        })
    }
    // This will just toggle the current value.

    render(){
        return (
        <Auxiliary>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        )
    }
} 

export default Layout;