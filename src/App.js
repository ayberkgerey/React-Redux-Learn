import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import CakeContainer from "./components/CakeContainer";
import { Provider } from 'react-redux'
import store from "./redux/store";

export default function App(){
    return(
        <Provider store={store}>
        <div className='App'>
            <CakeContainer />
        </div>
        </Provider>
        )
}
