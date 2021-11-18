import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Appointment from './pages/Appointment/Appointment';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import PrivateRouter from './pages/PrivateRouter/PrivateRouter';
import Signup from './pages/Signup/Signup';
import Header from './shared/Header/Header';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRouter path="/appointment">
              <Appointment></Appointment>
            </PrivateRouter>
            <PrivateRouter path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRouter>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
