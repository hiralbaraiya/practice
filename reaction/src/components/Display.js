import React from 'react'
import {MyContext} from '../index'

export const Display=(props)=>{
    return(
        <MyContext.Consumer>
            {state=>state.length!==0?
            state.map((item)=>{
                return(
                    <div>{item.text}</div>
                )
            }):<div></div>}
        </MyContext.Consumer>
    )
}