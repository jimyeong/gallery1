import React from 'react';
import './home.scss';
class Home extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        return(
            <div className="home">
                <h3 className="home__tit">
                    Hi:)
                </h3>
            </div>
        )
    }
}


export default Home;