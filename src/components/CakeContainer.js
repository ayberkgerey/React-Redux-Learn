import React, {Component} from 'react';
import {connect} from 'react-redux'
import { buyCake } from "../redux";

function CakeContainer(props){
        return (
            <div>
                <h2>Number of cakes : {props.numOfCakes}</h2>
                <button onClick={props.buyCake}>Press to buy</button>
            </div>
        )
}

// It lets you access redux state in your component
const mapStateToProps = state => {
    return{
        numOfCakes: state.numOfCakes
    }
}

// It lets you dispatch actions in your component
const mapDispatchToProps = dispatch => {
    return{
        buyCake: () => dispatch(buyCake())
    }
}

//And all this become possible with connect function from react-redux
export  default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
//It connects a react component to redux store
