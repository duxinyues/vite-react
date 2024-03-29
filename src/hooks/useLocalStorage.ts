import { useState,useDebugValue } from 'react';

export default function useLocalStorage(key: any) {
  const [localStorage] = useState(window.localStorage.getItem(key))

  const setLocalStorage = (params: any) => {
    window.localStorage.setItem(key, JSON.stringify(params))
  }
  useDebugValue(localStorage,(value)=>{
    console.log("这是修改后的value:",value)
    return "这是修改后的value:"+value
  })
  return [localStorage, setLocalStorage]
}
