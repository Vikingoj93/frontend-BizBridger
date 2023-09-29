"use client";
import { useRouter } from "next/navigation";
import { LOGIN_URL, LOGOUT_URL } from "@/libs/config";
import axios, { AxiosResponse } from "axios";

export function SignIn() {
  return (
    <>
      <button
        className="border border-white mx-2"
        onClick={() => {
          window.open(`${LOGIN_URL}`, "_self")
        }}
      >
        Sign In
      </button>
    </>
  );
}
export function LogOut() {
  const router = useRouter();
  return (
    <div>
      <button
        className="border border-white mx-2"
        onClick={() => {
          axios.get(LOGOUT_URL, { withCredentials: true }).then((res)=>{
            if (res.data === "done") {
              window.location.href = "/"
            }
          });
        }}
      >
        Log Out
      </button>
    </div>
  );
}