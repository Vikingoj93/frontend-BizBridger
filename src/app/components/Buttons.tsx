import { LOGIN_URL, LOGOUT_URL } from "@/libs/config";
import axios from "axios";

export function Login() {
  return (
    <>
      <button
        className="inline-block px-4 mx-2 py-2 border rounded-lg bg-gradient-to-r from-purple-400 to-pink-500 text-white hover:font-bold hover:shadow-md hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 transition duration-300 ease-in-out"
        onClick={() => {
          window.open(`${LOGIN_URL}`, "_self");
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
        className="inline-block px-4 py-2 border rounded-lg bg-gradient-to-r from-red-400 to-pink-500 text-white hover:font-bold hover:shadow-md hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-600 transition duration-300 ease-in-out"
        onClick={() => {
          axios.get(LOGOUT_URL, { withCredentials: true }).then((res) => {
            if (res.data === "done") {
              window.location.href = "/";
            }
          }).catch((err) => console.log(err));
        }}
      >
        Log Out
      </button>
    </div>
  );
}
