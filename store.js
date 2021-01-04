import {createStore,applyMiddlewere} from 'redux'
import thunkMiddlewere from 'redux-thunk'
import firebase from 'firebase'

// Firebaseの設定
let config = {

};

// Firebase初期化
let fireapp;
try{
    firebase = firebase.initializeApp(config);
}catch(error){
    console.log(error.message);
}
export default fireapp;

// ステートの初期化
const initial = {
    login:false,
    username:'(click here!)',
    email:'',
    data:[],
    items:[]
}

// レデユーサー
function fireReducer(state = initial,action){
    switch(action.type){
        // ダミー
        case 'UPDATE_USER':
            return action.value;
        // デフォルト
        default:
            return state;
    }
}

// iniStore関数
export function iniStore(state = initial){
    return createStore(fireReducer,state,applyMiddlewere(thunkMiddlewere))
}