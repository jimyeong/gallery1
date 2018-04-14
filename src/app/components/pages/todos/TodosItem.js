import React from 'react';

class TodosItem extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            ISEDITING :false
        }
    }
    renderEditing(){
        if(this.state.ISEDITING){
            return(
                <div className="todos__btns">
                    <div className="todos__btn save">저장</div>
                    <div onClick={this.onClickCancel.bind(this)} className="todos__btn cancel">취소</div>
                </div>
            )
        }else{
            return(
                <div className="todos__btns">
                    <div onClick={this.onClickEditing.bind(this)} className="todos__btn edit">수정</div>
                    <div className="todos__btn delete">삭제</div>
                </div>
                )
        }
    }
    renderTask(){
        if(this.state.ISEDITING){
            return(
                <div className="todos__item">
                    <form action="">
                        <div className="toods__input-group">
                            <input type="text" class="form-ctrl" ref="inputValue" placeholder="할일입력"/>
                        </div>
                    </form>
                </div>
            )
        }else{
            return(
                <div className="todos__item">
                    {this.props.title}
                </div>
            )
        }
    }

    render(){
        return(
            <div className="todos__outer">
                {this.renderTask()}
                {this.renderEditing()}
            </div>
        )
    }
    onClickEditing(){
        this.setState({
            ISEDITING :true
        })
    }
    onClickCancel(){
        this.setState({
            ISEDITING:false
        })
    }
    onClicksaveTask(){
        const oldTask = this.refs.inputValue.value();
        this.props.saveTask(oldTask,newTask)
        this.setState({
            ISEDITING:false
        })


    }

}


export default TodosItem;