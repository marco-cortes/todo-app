import { authFetch, renewFetch } from "../../helpers/fetch";
import { types } from "../type/types";
import { reset } from "./todo";


export const startLogin = (email, password) => {
    return async (dispatch) => {
        const resp = await authFetch("auth", { email, password }, "POST");
        const body = await resp.json();
        if (body.ok) {
            localStorage.setItem("token", body.user.token);
            localStorage.setItem("token-init-date", new Date().getTime());
            dispatch(login({
                uid: body.user.uid,
                name: body.user.name
            }));
        } else {
            if(body.errors){
                if(body.errors.password)
                    console.log(body.errors.password);
                if(body.errors.email)
                    console.log(body.errors.email);
            } else {
                console.log(body.errors);
            }
        }
    }
}

export const login = (user) => ({
    type: types.authLogin,
    payload: user
});


export const startRegister = (email, password, name) => {
    return async (dispatch) => {
        const resp = await authFetch("auth/new", { email, password, name }, "POST");
        const body = await resp.json();
        if (body.ok) {
            localStorage.setItem("token", body.user.token);
            localStorage.setItem("token-init-date", new Date().getTime());
            dispatch(login({
                uid: body.user.uid,
                name: body.user.name
            }));
        } else {
            if(body.errors){
                if(body.errors.password)
                    console.log(body.errors.password);
                if(body.errors.email)
                    console.log(body.errors.email);
                if(body.errors.name)
                    console.log(body.errors.name);
            } else {
                console.log(body.errors);
            }
        }
    }
}

export const startChecking = () => {
    return async (dispatch) => {
        if (localStorage.getItem("token")) {
            const resp = await renewFetch("auth/renew", {});
            const body = await resp.json();
            if (body.ok) {
                localStorage.setItem("token", body.user.token);
                localStorage.setItem("token-init-date", new Date().getTime());
                dispatch(login({
                    uid: body.user.uid,
                    name: body.user.name
                }));
            } else {
                console.log("first")
                dispatch(checkingFinish()); // para que no se quede en el loading
            }
        } else {
            dispatch(checkingFinish());
        }

    }
}

const checkingFinish = () => ({
    type: types.authCheckingFinish
})

export const startLogout = () => {
    return async (dispatch) => {
        localStorage.removeItem("token");
        localStorage.removeItem("token-init-date");
        dispatch(reset());
        dispatch(logout());
    }
}

const logout = () => ({
    type: types.authLogout
});