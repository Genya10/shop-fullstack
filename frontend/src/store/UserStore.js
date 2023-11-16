import {makeAutoObservable} from "mobx";

export class UserStore {
    constructor(){
        this._isAuth = false
        this._user ={}
        this._isRole={}
        makeAutoObservable(this)
    }
 
    setIsUser(bool){
        this._isRole = bool
    }
    setIsAuth(bool){
        this._isAuth = bool
    }
    setUser(user){
        this._user= user
    }
    get isAuth(){
        return this._isAuth
    }
    get user(){
        return this._user
    }

}