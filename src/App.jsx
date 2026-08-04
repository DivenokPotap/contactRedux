import { Route, Routes } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Layout } from "./components/Layout";
import Home from "./components/Home/Home";
import { RegisterForm } from "./components/RegisterForm/RegisterForm";
import { Contacts } from "./components/Contacts/Contacts";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { useAuth } from "./redux/useAuth";
import { fetchRefreshUser } from "./redux/authOperations";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRefreshUser());
  }, [dispatch]);

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