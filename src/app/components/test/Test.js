import React from 'react';
import store  from "./store"
import {observer} from 'mobx-react';


@observer
    let testData = [];
class Test extends React.component{
    testData = store.setData()


render(){
    console.log(testData);
        return(
            <div>
                <div className="box">

                </div>
            </div>
        )
    }
}
export default Test