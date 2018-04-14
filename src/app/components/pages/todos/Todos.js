import React from 'react';
import TodosItem from './TodosItem';
import {Route} from 'react-router-dom';
import './todos.scss';
import _ from 'lodash';


class Todos extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }
    renderTask(){
        return(
            _.map(this.props.todos, (todo,i) => <TodosItem {...todo} saveTask={this.saveTask(oldTask,newTask)}/>)
        )
    }
    saveTask(oldTask,newTask){
        const foundTask = _.find(this.props.todos, (todo => todo.title === oldTask))
        foundTask.task = newTask;
        this.setState({
            this.props.todos: this.state.todos

        })
    }


    render(){
        console.log(this.renderTask());
        return(
            <div className="todos">
                <div className="todos__box tit-box">
                    <h3 className="todos__tit">일하자</h3>
                    <p className="todos__txt1">애정이 필요하다면</p>
                </div>
                <div className="todos__box content">
                    <div className="todos__box type-width">
                        {this.renderTask()}
                    </div>
                </div>
            </div>
        )
    }
}


export default Todos;