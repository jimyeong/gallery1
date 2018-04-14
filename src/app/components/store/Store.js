import React from "react"
import {observable,action} from 'mobx';
import axios from 'axios';
import _ from 'lodash';

const UNSPLASH_API_KEY ="ecdf2c6906172c25ce7c85cf610c3eaf11e8efc1102a6b187a2d1ea2ef2cdd05";
const UNSPLASH_API_URL ="https://api.unsplash.com/photos";

class Store {
    @observable data=[];
    setData (){
        axios.get(UNSPLASH_API_URL + "/?client_id" + UNSPLASH_API_URL)
            .then(res => this.data = res.data)
    }


}

const store = new Store();
store.setData();
export default store