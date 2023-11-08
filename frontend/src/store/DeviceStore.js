import {makeAutoObservable} from "mobx";

export class DeviceStore {
    constructor(){
       this._types=[
        {id:1,name:'Fridge'},
        {id:2,name:'Smartphone'}
       ]
       this._brands=[
        {id:1,name:'Sansung'},
        {id:2,name:'Apple'}
       ]
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        this._isAuth = bool
    }
    setIsUser(user){
        this._isAuth = user
    }
    get isAuth(){
        return this._isAuth
    }
    get user(){
        return this._user
    }
}