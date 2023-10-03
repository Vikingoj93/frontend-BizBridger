"use client";
import { LOGIN_URL, LOGOUT_URL } from "@/libs/config";
import axios from "axios";

export function Login() {
  return (
    <>
      <button
        className="inline-block px-4 mx-2 py-2 border rounded-lg bg-buttonBlue hover:font-bold   hover:text-white hover:shadow-md transition duration-300 ease-in-out"
        onClick={() => {
          window.open(`${LOGIN_URL}`, "_self")
        }}
      >
        Login
      </button>
    </>
  );
}
export function LogOut() {
  return (
    <div>
      <button
        className="inline-block px-4 py-2 border rounded-lg bg-buttonRed hover:font-bold hover:text-white hover:shadow-md transition duration-300 ease-in-out"
        onClick={() => {
          axios.get(LOGOUT_URL, {withCredentials: true}).then((res)=>{
            if (res.data === 'done') {
              window.location.href = '/'
            }
          }).catch((err)=>console.log(err))
          
        }}
      >
        Log Out
      </button>
    </div>
  );
}