import Dashboard from "./dashboard/Dashboard"
import Signin from "./signin/Signin"
import Login from "./login/Login"
import './app.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route
                    path="/admin/login"
                    element={
                        <Login/>
                    }
                />
                <Route
                    path="/admin/signin"
                    element={
                        <Signin/>
                    }
                />
                <Route 
                    path="/admin" 
                    element={<Dashboard/>}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App