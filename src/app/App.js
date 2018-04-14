import React from "react"
import Header from './components/layout/header/Header';
import Todos from './components/pages/todos/Todos';
import Home from './components/pages/home/Home';
import axios from 'axios';
import _ from 'lodash';
import {Route} from 'react-router-dom';

const UNSPLASH_API_KEY ="ecdf2c6906172c25ce7c85cf610c3eaf11e8efc1102a6b187a2d1ea2ef2cdd05";
const UNSPLASH_API_URL ="https://api.unsplash.com/photos";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            todos :[]

        }
    }


    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then((res) => {
            this.setState({
                todos:res.data
            })
            })
    }




    render(){
        return(
            <div className="App">
                <Header/>
                <div className="wrapper">
                    <Route exact path="/" component={Home}/>
                    <Route path="/todos" render={() => <Todos todos={this.state.todos}/>}/>

                </div>
            </div>
        )
    }
}


export default App



