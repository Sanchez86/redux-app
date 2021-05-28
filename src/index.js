import {createStore} from 'redux';
import './style.css';

const reducer = (state = 0, action) => {
    switch(action.type){
        case 'INC' :
            return state + 1;
        case 'DEC' :
            return state - 1;
        case 'RND' :
            return state + action.value;
        case 'REF' :
            return state = 0;
        default:
            return state;
    }
};
//функции креейторы
const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const rnd = (value) => ({type: 'RND', value});

const store = createStore(reducer);

document.getElementById('inc').addEventListener('click', () => {
    store.dispatch(inc());
});

document.getElementById('dec').addEventListener('click', () => {
    store.dispatch(dec());
});

document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random()*10);
    store.dispatch(rnd(value));
});

document.getElementById('ref').addEventListener('click', () => {
    store.dispatch({type: 'REF'});
});

const update = () => {
    document.getElementById('counter').innerHTML = store.getState();
};

store.subscribe(() => {
  update();
  console.log(store.getState());
});
