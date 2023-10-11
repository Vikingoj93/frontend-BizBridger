'use client'
import { URL_SERVER } from '@/libs/config'
import axios from 'axios'
import {createContext, useContext, useState, useEffect} from 'react' 

const auth = createContext(false)

export function authContext(){
    return useContext(auth)
}

export default function AuthContext({children}:{children: React.ReactNode}) {

  const [authenticated, setAuthenticated] = useState<boolean>(false)

  useEffect(()=>{
    axios.get(`${URL_SERVER}`, {withCredentials: true}).then((res)=>{
      if (res.data === 'autenticated') {
        setAuthenticated(true)
      }else{
        setAuthenticated(false)
      }
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <auth.Provider value={authenticated}>{children}</auth.Provider>
  )
}
