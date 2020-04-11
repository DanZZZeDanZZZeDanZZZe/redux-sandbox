import {createStore, bindActionCreators} from 'redux'
import ReactDOM from 'react-dom'
import React from 'react'


import reducer from './reducer'
import * as actions from './actions'
import Counter from './counter'

const store = createStore(reducer)
const { dispatch } = store

const {inc, dec, rnd} =  bindActionCreators(actions, dispatch)

/*document
    .getElementById('inc')
    .addEventListener('click', inc)

document
    .getElementById('dec')
    .addEventListener('click', dec)

document
    .getElementById('rnd')
    .addEventListener('click', () => {
        const payload = Math.floor(Math.random()*10)
        rnd(payload)
    })*/

const update = () => {
   /* document
        .getElementById('counter')
        .innerHTML = store.getState()*/
    ReactDOM.render(
        <Counter
            counter={store.getState()}
            inc={inc}
            dec={dec}
            rnd={() => {
                const payload = Math.floor(Math.random()*10)
                rnd(payload)
            }}
        />, 
        document.getElementById('root'))
}

update()
store.subscribe(update)

