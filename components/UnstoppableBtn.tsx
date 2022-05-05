
import {useWeb3React} from '@web3-react/core'
import React from 'react'
import { uauth } from "../config/uAuth"

export default function UnstoppableBtn(){
    const {activate} = useWeb3React() 

    async function handleUAuthConnect() {
      await activate(uauth)
    }
    return (
      <button
      className="flex justify-center items-center space-x-2 border-2 border-gray-500 hover:border-gray-400 bg-white rounded-full px-3"
      onClick={handleUAuthConnect}
      style={{
        color: 'rgb(76, 71, 247)',
        border: '2px solid rgb(76, 71, 247)',
      }}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuxBfh5e_1zE4f3WZAmDoMD5RwzjLlktMd8A&usqp=CAU"
        alt="Unstoppable"
        width={20}
        height={20}
        className="mx-2"
      />
      Login with Unstoppable
    </button>
    )
  
}

