export const date = new Date().toISOString().slice(0,10)
export const hours = new Date().toISOString().slice(11,16)

export const URL_SERVER = process.env.BACKEND_URL || "http://localhost:4000"
export const LOGIN_URL = process.env.LOGIN_URL || "http://localhost:4000/auth/google"
export const LOGOUT_URL = process.env.LOGOUT_URL || "http://localhost:4000/logout"