import {makeAutoObservable} from "mobx";

export class UserStore {
    constructor(){
        this._isAuth = true
        this._user ={}
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