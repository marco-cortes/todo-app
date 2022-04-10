import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { startChecking } from "../redux/actions/auth";

import { PublicRoute } from "./PublicRoute"
import { PrivateRoute } from "./PrivateRoute"
import { TodoApp } from "../components/TodoApp";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import Header from "../components/Header";	
import { Load } from "../components/Load";

export const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking } = useSelector(state => state.auth);
    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch, checking]);

    if (checking) {
        return <Load />
    }
    

    return (
        <div className="container">
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    } />
                    <Route path="/register" element={
                        <PublicRoute>
                            <Register />
                        </PublicRoute>
                    } />
                    <Route path="/" element={
                        <PrivateRoute>
                            <TodoApp />
                        </PrivateRoute>
                    } />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
