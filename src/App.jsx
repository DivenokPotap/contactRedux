import { Route, Routes } from "react-router";
import { lazy } from "react";
import { Layout } from "./components/Layout";
import { useAuth } from "./redux/Auth/useAuth";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute";
import './App.css'

const Home = lazy(() => import("./components/Home/Home"))
const RegisterForm = lazy(() => import("./components/RegisterForm/RegisterForm"))
const Contacts = lazy(() => import("./components/Contacts/Contacts"))
const LoginForm = lazy(() => import("./components/LoginForm/LoginForm"))

function App() {
  const { isRefreshing } = useAuth();
  return (
    <div>
      {isRefreshing ? <div>Loading...</div> : ( <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={
                <RestrictedRoute
                  component={<RegisterForm />}
                  navigateTo="/contacts"
                />
              } />
          <Route path="/login" element={
                <RestrictedRoute
                  component={<LoginForm />}
                  navigateTo="/contacts"
                />
              } />
          <Route path="/contacts" element={
                <PrivateRoute
                  navigateTo="/register"
                  component={<Contacts />}
                />
              }
            />
        </Route>
      </Routes>)}
    </div>
  )
}

export default App;